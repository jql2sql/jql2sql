const { isArray } = require("lodash");
const nearley = require("nearley");
const jql_grammer = require("./jql_grammer.js");
const { clearAST } = require("./utils");

/**
 * Parse JQL to AST(Abstract Syntax Tree)
 * 
 * @param {*} expr JQL string
 * @returns AST
 */
function parseJQL(expr) {
  expr = expr.trim();

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(jql_grammer));
  parser.feed(expr);

  /**
   * As we might get multiple ASTs due to ambiguous grammer definition,
   * So, to return consitent AST, we return first AST, always.
   */
  if (isArray(parser.results) && parser.results.length > 0) {
    return clearAST(parser.results[0]);
  }

  return null;
}

module.exports = { parseJQL };