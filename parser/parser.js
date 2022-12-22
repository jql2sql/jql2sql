const { isArray } = require("lodash");
const nearley = require("nearley");
const jql_grammer = require("./jql_grammer.js");

/**
 * Parse JQL to AST(Abstract Syntax Tree)
 * 
 * @param {*} expr JQL string
 * @returns AST
 */
function parseJQL(expr) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(jql_grammer));

  parser.feed(expr);

  /**
   * As we might get multiple ASTs due to ambiguous language definition,
   * So, to make it clear, always we return first AST, only.
   */
  if (isArray(parser.results) && parser.results.length > 0) {
    return parser.results[0];
  }

  return null;
}

module.exports = { parseJQL };