const { parseJQL, KINDS } = require('../../index.js')

function testFunction(expectedField, expectedOp, expectedValue) {
  const expr = `${expectedField} ${expectedOp} ${expectedValue}`;
  const rlt = parseJQL(expr);
  const kinds = rlt.kinds;
  const field = Array.isArray(rlt.field)? rlt.field.join('').split(',').join(''): rlt.field;
  const operator = rlt.ops[0].join('').split(',').join('');
  const value = rlt.value[0].join('').split(',').join('');

  expect(kinds).toBe(KINDS.AST_FOV);
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