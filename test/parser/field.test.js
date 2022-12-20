const {testShouldPass, testShouldFail} = require('./testfunction')

testShouldPass('AA', '=', 'B');
testShouldPass('AB', '=', 'B');
testShouldPass('aB', '=', 'B');
testShouldPass('aB_', '=', 'B');
testShouldPass('aB_0', '=', 'B');
testShouldPass('aB_01', '=', 'B');
testShouldPass('aB_01_Cd', '=', 'B');

testShouldFail('_01', '=', 'B');
testShouldFail('01', '=', 'B');