/** Definition of AST kinds */
const KINDS = {
  /** AST of Field Operator Value type, i.e. 'field = 10' */
  AST_FOV : 0,
  /** AST contains two expressions 'left expression' AND(OR) 'right expression' */
  AST_LTRT : 1, 
  /** AST Bracket type '(' expression ')' */
  AST_BRACKET : 2
};

/**
 * Clear AST,
 * 
 * AST (parsed by nearley) contains field or value as array or comma separated character.
 * So, this fucntion concates them as string
 *
 * @param {*} ast 
 * @returns AST continas field or value as string
 */
function clearAST(ast) {
  if (ast.kinds == KINDS.AST_LTRT) {
    if (Array.isArray(ast.andOr)) {
      ast.andOr = ast.andOr.join('').split(',').join('');
    }
  }
  else if (ast.kinds == KINDS.AST_FOV) {
    if (Array.isArray(ast.field)) {
      ast.field = ast.field.join('').split(',').join('');
    }
    if (Array.isArray(ast.ops)) {
      ast.operator = ast.ops.join('').split(',').join('');
    }
    if (Array.isArray(ast.value)) {
      ast.value = ast.value.join('').split(',').join('');
    }
  }
  else if (ast.kinds == KINDS.AST_BRACKET) {

  }

  return ast;
}

module.exports = { KINDS, clearAST };