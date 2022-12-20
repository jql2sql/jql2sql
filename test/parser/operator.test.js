const { testShouldPass, testShouldFail } = require('./testfunction')

testShouldPass('A', '=', 'B');
testShouldPass('A', '!=', 'B');
testShouldPass('A', '>', 'B');
testShouldPass('A', '<', 'B');
testShouldPass('A', '>=', 'B');
testShouldPass('A', '<=', 'B');
testShouldPass('A', '~', 'B');
testShouldPass('A', '!~', 'B');
testShouldPass('A', 'in', 'B');
testShouldPass('A', 'not in', 'B');
testShouldPass('A', 'is', 'B');
testShouldPass('A', 'is not', 'B');

testShouldFail('A', '/=', 'B');
testShouldFail('A', '!=!', 'B');
testShouldFail('A', '>>', 'B');
testShouldFail('A', '<<', 'B');
testShouldFail('A', '>>=', 'B');
testShouldFail('A', '<<=', 'B');
testShouldFail('A', '~~', 'B');
testShouldFail('A', '!~~', 'B');
testShouldFail('A', '!!~', 'B');
testShouldFail('A', 'in in', 'B');
testShouldFail('A', 'nnot in', 'B');
testShouldFail('A', 'is is', 'B');
testShouldFail('A', 'is mpt not', 'B');