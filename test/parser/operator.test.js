const { testShouldPass, testShouldFail } = require('./testfunction')

testShouldPass('A', '=', 'B');
testShouldPass('A', '!=', 'B');
testShouldPass('A', '>', 'B');
testShouldPass('A', '<', 'B');
testShouldPass('A', '>=', 'B');
testShouldPass('A', '<=', 'B');
testShouldPass('A', '~', 'B');
testShouldPass('A', '!~', 'B');
testShouldPass('A', 'is', 'B');
testShouldPass('A', 'is not', 'B');
testShouldPass('A', 'in', '(B)');
testShouldPass('A', 'in', '(field)');
testShouldPass('A', 'in', '("field")');
testShouldPass('A', 'in', '(field,field2)');
testShouldPass('A', 'in', '("field","field2")');
testShouldPass('A', 'in', '(   field )');
testShouldPass('A', 'in', '(     FIELD )');
testShouldPass('A', 'in', '(     field  , "text" )');
testShouldPass('A', 'in', '(  "  text  "   ,   field,    "  text  " )');

testShouldFail('A', 'not in', 'B');
testShouldFail('A', 'in', 'B');
testShouldFail('A', 'not in', 'B');
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