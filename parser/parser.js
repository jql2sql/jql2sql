const nearley = require("nearley");
const jql_grammer = require("./jql_grammer.js");

const KINDS = {
  EXP_FOV : 0,
  EXP_LTRT : 1,
  EXP_BRACKET : 2
};

function clearAST(exp) {
  if (exp.kinds == KINDS.EXP_LTRT) {
    if (Array.isArray(exp.andOr)) {
      exp.andOr = exp.andOr.join('').split(',').join('');
    }
  }
  else if (exp.kinds == KINDS.EXP_FOV) {
    if (Array.isArray(exp.field)) {
      exp.field = exp.field.join('').split(',').join('');
    }
    if (Array.isArray(exp.ops)) {
      exp.operator = exp.ops.join('').split(',').join('');
    }
    if (Array.isArray(exp.value)) {
      exp.value = exp.value.join('').split(',').join('');
    }
  }
  else if (exp.kinds == KINDS.EXP_BRACKET) {

  }

  return exp;
}

module.exports = { nearley, jql_grammer, KINDS, clearAST };