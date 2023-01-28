const { parseJQL, KINDS, clearAST, clearSpaceFromValueOfInOperator, myJoin } = require('../../index.js')

function testFunction(expectedField, expectedOp, expectedValue) {
  const expr = `${expectedField} ${expectedOp} ${expectedValue}`;
  console.log('Input: ' + expr);
  let rlt = parseJQL(expr);
  rlt = clearAST(rlt);

  const kinds = rlt.kinds;
  const field = rlt.cleaned.field;
  const operator = rlt.cleaned.operator;
  const value = myJoin(rlt.value);
  
  const rltExpr = `Parsed output: ${field} ${operator} ${value}`;
  console.log(rltExpr);

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