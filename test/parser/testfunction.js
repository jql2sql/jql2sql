const { nearley, jql_grammer, KINDS } = require('../../index.js')

function testFunction(expectedField, expectedOp, expectedValue) {
  const expr = `${expectedField} ${expectedOp} ${expectedValue}`;
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(jql_grammer));
  parser.feed(expr);
  const rlts = parser.results;
  const kinds = rlts[0].kinds;
  const field = Array.isArray(rlts[0].field)? rlts[0].field.join('').split(',').join(''): rlts[0].field;
  const operator = rlts[0].ops[0].join('').split(',').join('');
  const value = rlts[0].value[0].join('').split(',').join('');

  expect(kinds).toBe(KINDS.EXP_FOV);
  expect(field).toBe(expectedField);
  expect(operator).toBe(expectedOp);
  expect(value).toBe(expectedValue);
}

function testShouldPass(expectedField, expectedOp, expectedValue) {
  const expr = `${expectedField} ${expectedOp} ${expectedValue}`;
  it(expr, () => {
    testFunction(expectedField, expectedOp, expectedValue);
  });
}

function testShouldFail(expectedField, expectedOp, expectedValue) {
  const expr = `${expectedField} ${expectedOp} ${expectedValue}`;
  it(expr, () => {
    let exception = null;

    try {
      testFunction(expectedField, expectedOp, expectedValue);
    }
    catch (e){
      exception = e;
    }

    expect(exception).not.toBeNull();
  });
}

module.exports = { testShouldPass, testShouldFail };