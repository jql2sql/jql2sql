const { trim } = require("lodash");
const { KINDS, clearAST } = require("./utils");

function transpileFOV(ast) {
  const field = ast.field;
  const operator = ast.operator;
  const value = ast.value;

  /** We may use these operators without transfiling */
  const ops1 = ['=', '!=', '>', '<', '>=', '<='];
  /** Operators should be transpiled */
  const ops2 = ['~', '!~', 'in', 'not in', 'is', 'is not'];

  // TODO Need to transpile as per operator and value

  return {field: field, operator: operator, value: value};
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
    const fov = transpileFOV(clearAST(ast));
    const { field, operator, value } = fov;

    where = `${field} ${operator} ${value}`;
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
  let where = transpileAST(clearAST(ast), f2f);

  return trim(where);
}

module.exports = { transpile2SQL };