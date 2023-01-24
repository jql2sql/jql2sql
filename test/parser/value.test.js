const { testShouldPass, testShouldFail } = require('../parser/testfunction')

testShouldPass('A', '=', 'a');
testShouldPass('A', '=', 'A');
testShouldPass('A', '=', 'aA_');
testShouldPass('A', '=', 'aA12');
testShouldPass('A', '=', 'aA_0');
testShouldPass('A', '=', '1234');
testShouldPass('A', '=', '0.9876');
testShouldPass('A', '=', 'abcd()');
testShouldPass('A', '=', '"ab_ _cd"');
testShouldPass('A', '=', '" text "');
testShouldPass('A', '=', '" text text "');

testShouldFail('A', '=', '_');
testShouldFail('A', '=', '_aA');
testShouldFail('A', '=', '01234');