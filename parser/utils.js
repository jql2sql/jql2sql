/** Definition of AST kinds */
const KINDS = {
  /** AST of Field Operator Value type, i.e. 'field = 10' */
  AST_FOV : 0,
  /** AST contains two expressions 'left expression' AND(OR) 'right expression' */
  AST_LTRT : 1, 
  /** AST Bracket type '(' expression ')' */
  AST_BRACKET : 2
};

function myJoin(mightBeArray) {
  let str = '';

  if (Array.isArray(mightBeArray)) {
    for (element of mightBeArray) {
      if (Array.isArray(element)) {
        str += myJoin(element);
      }
      else {
        str += element;
      }
    }
  }
  else {
    str += mightBeArray;
  }

  return str;
}

function clearSpaceFromValueOfInOperator(value) {
  value = value.trim();
  let str = '';
  let skipSpace = true;

  for (c of value) {
    if (c == '"') {
      skipSpace = !skipSpace;
    }

    if (skipSpace == true && c == ' ')
      continue;
    
    str += c;
  }

  return str.split(',').join(', ');
}

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
  ast.cleaned = {}

  if (ast.kinds == KINDS.AST_LTRT) {
    if (Array.isArray(ast.andOr)) {
      ast.cleaned.andOr = myJoin(ast.andOr);
      ast.cleaned.andOr = ast.cleaned.andOr.trim();
    }
  }
  else if (ast.kinds == KINDS.AST_FOV) {
    if (Array.isArray(ast.field)) {
      ast.cleaned.field = myJoin(ast.field);
      ast.cleaned.field = ast.cleaned.field.trim();
    }
    if (Array.isArray(ast.ops)) {
      ast.cleaned.operator = myJoin(ast.ops);
      ast.cleaned.operator = ast.cleaned.operator.trim();
    }
    if (Array.isArray(ast.value)) {
      ast.cleaned.value = myJoin(ast.value);
      ast.cleaned.value = ast.cleaned.value.trim();
      
      if (ast.cleaned.operator == 'in' || ast.cleaned.operator == 'not in') {
        ast.cleaned.value = clearSpaceFromValueOfInOperator(ast.cleaned.value);
      }
    }
  }
  else if (ast.kinds == KINDS.AST_BRACKET) {

  }

  return ast;
}

module.exports = { KINDS, clearAST, clearSpaceFromValueOfInOperator, myJoin };