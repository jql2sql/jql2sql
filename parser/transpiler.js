const { trim, has } = require("lodash");
const { KINDS } = require("./utils");

function transpileFOV(ast) {
  const field = ast.cleaned.field;
  const operator = ast.cleaned.operator;
  let value = ast.cleaned.value;
  // console.log('transpileFOV: ' + `${field} ${operator} ${value}`);
  // console.log(ast);

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
  const transfiledOperator = opsTranspiling[operator];
  console.log(transfiledOperator);

  if (has(ast, 'valueHint') && has(ast.valueHint, 'text')) {
    const hintText = ast.valueHint.text;
    if (hintText == 'simpleDoubleQuoteValue') {
      // escape " i.e) "blah" -> blah
      value = value.substr(1, value.length - (1*2));
      value = `'${value}'`;
    }
    else if (hintText == 'doubleQuoteValueWithSpace') {
      // escape " i.e) "blah" -> blah
      value = value.substr(1, value.length - (1*2));
      // value contains ' '(space)
      if (value.indexOf(' ') >= 0) {
        const vs = value.split(' ');
        const fovs = vs.map(v => `${field} ${transfiledOperator} '${v}'`);

        return '(' + fovs.join(' and ') + ')';
      }
    }
    else if (hintText == 'doubleQuoteValueWithAsterisk') {
      // escape " i.e) "blah" -> blah
      value = value.substr(1, value.length - 2);
      value = value.replace('*', '%');
      value = `'${value}'`;
    }
    else if (hintText == 'nestedDoubleQuoteValue') {
      // escape "\"blah\"" i.e) "\"blah\"" -> blah
      value = value.substr(3, value.length - (3*2));
      value = `'${value}'`;
    }
  }

  // Transpile value as per operator
  // return {field: field, operator: transfiledOperator, value: value};
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
    let lt = transpileAST(ast.expLt);
    let rt = transpileAST(ast.expRt);

    where = `${lt} ${ast.andOr} ${rt}`;
  }
  else if (ast.kinds == KINDS.AST_FOV) {
    const partOfSQL = transpileFOV(ast);
    where = partOfSQL;
  }
  else if (ast.kinds == KINDS.AST_BRACKET) {
    where = '(' + transpileAST(ast.exp) + ')';
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
  let where = transpileAST(ast, f2f);

  return trim(where);
}

module.exports = { transpile2SQL };