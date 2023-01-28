const { has } = require("lodash");
const { KINDS, isNumeric, clearAST } = require("./utils");

function transpileFOV(ast) {
  /** We may use these operators without transfiling */
  const opsGroup1 = ['=', '!=', '>', '<', '>=', '<=', 'in', 'not in'];
  /** Operators should be transpiled */
  const opsGroup2 = ['~', '!~', 'is', 'is not'];
  
  const opsTranspiling = {
    /** We may use these operators without transfiling */
    '=': '=',
    '!=': '!=',
    '>': '>',
    '<': '<',
    '>=': '>=',
    '<=': '<=',
    'in': 'in',
    'not in': 'not in',
    /** Operators should be transpiled */
    '~': 'LIKE',
    '!~': 'NOT LIKE',
    'is': '=',
    'is not': '!='
  }  

  // console.log(ast);

  const field = ast.cleaned.field;
  const operator = ast.cleaned.operator;
  let value = ast.cleaned.value;
  const transfiledOperator = opsTranspiling[operator];

  // console.log('transpileFOV() ' + `${field} ${operator} ${value}`);

  if (operator === 'in'
      || operator === 'not in') {
    /**
     * b or "b" -> 'b'
     * @param {*} v  b or "b"
     * @returns 'b'
     */
    function valueForIn(v) {
      v = v.trim();

      if (v[0] == '\"')
        v = v.substr(1, v.length - (1*2));

      // v is not number, we surround with '
      if (!isNumeric(v)) {
        v = '\'' + v+ '\''
      }

      return v;
    }

    value = value.substr(1, value.length - (1*2));

    if (value.indexOf(',') >= 0) {
      let vs = value.split(',');
      vs = vs.map(v => valueForIn(v));
      value = vs.join(', ');
    }
    else {
      value = valueForIn(value);
    }

    value = '(' + value + ')';
  }

  if (operator === '~'
      || operator === '!~') {
    if (has(ast, 'valueHint') && has(ast.valueHint, 'text')) {
      const hintText = ast.valueHint.text;
      if (hintText == 'noQuoteValueNoSpace') {
        value = `'${value}'`;
      }
      else if (hintText == 'doubleQuoteValueNoSpace') {
        // Escape " i.e) "blah" -> blah
        value = value.substr(1, value.length - (1*2));
        value = `'${value}'`;
      }
      else if (hintText == 'doubleQuoteValueWithSpace') {
        // Escape " i.e) "blah" -> blah
        value = value.substr(1, value.length - (1*2));
        // value contains ' '(space)
        if (value.indexOf(' ') >= 0) {
          const vs = value.split(' ');
          const fovs = vs.map(v => `${field} ${transfiledOperator} '${v}'`);

          value = '(' + fovs.join(' and ') + ')';
        }
      
        return value;
      }
      else if (hintText == 'doubleQuoteValueWithLeftAsterisk'
               || hintText == 'doubleQuoteValueWithRightAsterisk'
               || hintText == 'doubleQuoteValueWithBothAsterisk') {
        // Escape "*blah" i.e) "*blah" -> *blah
        // Escape "blah*" i.e) "blah*" -> blah*
        // Escape "*blah*" i.e) "*blah*" -> *blah*
        value = value.substr(1, value.length - 2);
        value = value.replace('*', '%');
        value = value.replace('*', '%');
        value = `'${value}'`;
      }
      else if (hintText == 'nestedDoubleQuoteValue') {
        // Escape "\"blah\"" i.e) "\"blah\"" -> blah
        value = value.substr(3, value.length - (3*2));
        value = `'%${value}%'`;
      }
    }        
  }

  return `${field} ${transfiledOperator} ${value}`;
}

/**
 * Transpile AST to SQL where clause
 *
 * @param {*} ast Abstrat syntax tree
 * @param {*} f2f Mapping field(in AST) with field(in DB or table)
 * @returns SQL where clause
 */
function transpileAST(ast, f2f) {
  let where = '';

  if (ast.kinds == KINDS.AST_LTRT) {
    let lt = transpileAST(clearAST(ast.expLt));
    let rt = transpileAST(clearAST(ast.expRt));

    where = `${lt} ${ast.andOr} ${rt}`;
  }
  else if (ast.kinds == KINDS.AST_FOV) {
    where = transpileFOV(clearAST(ast));
  }
  else if (ast.kinds == KINDS.AST_BRACKET) {
    where = '(' + transpileAST(clearAST(ast.exp)) + ')';
  }

  return where;
}

/**
 * ASTs are trasnfiled to SQL where clause
 *
 * @param {*} ast 'parser.results' should be given
 * @param {*} astField2DBfield To map AST field to Database field, in SQL
 * @returns SQL where clause
 */
function transpile2SQL(ast, astField2DBfield) {
  const f2f = astField2DBfield;
  let where = transpileAST(clearAST(ast), f2f);

  return where.trim();
}

module.exports = { transpile2SQL };