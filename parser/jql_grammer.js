// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const KINDS = {
  EXP_FOV : 0,
  EXP_LTRT : 1,
  EXP_BRACKET : 2
};
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "exp$ebnf$1", "symbols": []},
    {"name": "exp$ebnf$1", "symbols": ["exp$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$2", "symbols": []},
    {"name": "exp$ebnf$2", "symbols": ["exp$ebnf$2", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": [{"literal":"("}, "exp$ebnf$1", "exp", "exp$ebnf$2", {"literal":")"}], "postprocess": 
        function expBracket(data) {
          return {
            kinds: KINDS.EXP_BRACKET,
            bracketLt: data[0],
            exp: data[2],
            bracketRt: data[4]
          }
        }
        },
    {"name": "andOr", "symbols": ["and"]},
    {"name": "andOr", "symbols": ["or"]},
    {"name": "and$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "and", "symbols": ["and$string$1"]},
    {"name": "and$string$2", "symbols": [{"literal":"A"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "and", "symbols": ["and$string$2"]},
    {"name": "or$string$1", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "or", "symbols": ["or$string$1"]},
    {"name": "or$string$2", "symbols": [{"literal":"O"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "or", "symbols": ["or$string$2"]},
    {"name": "exp$ebnf$3", "symbols": []},
    {"name": "exp$ebnf$3", "symbols": ["exp$ebnf$3", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$4", "symbols": []},
    {"name": "exp$ebnf$4", "symbols": ["exp$ebnf$4", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["exp", "exp$ebnf$3", "andOr", "exp$ebnf$4", "exp"], "postprocess": 
        function exp2(data) {
          return {
            kinds: KINDS.EXP_LTRT,
            expLt: data[0],
            andOr: data[2],
            expRt: data[4]
          }
        }
        },
    {"name": "field$ebnf$1", "symbols": []},
    {"name": "field$ebnf$1", "symbols": ["field$ebnf$1", /[a-zA-Z0-9_-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "field", "symbols": [/[a-zA-Z]/, "field$ebnf$1"]},
    {"name": "symbolOps", "symbols": [{"literal":"="}]},
    {"name": "symbolOps$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$1"]},
    {"name": "symbolOps", "symbols": [{"literal":">"}]},
    {"name": "symbolOps", "symbols": [{"literal":"<"}]},
    {"name": "symbolOps$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$2"]},
    {"name": "symbolOps$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$3"]},
    {"name": "value", "symbols": ["alphabetNumberUnderbar"]},
    {"name": "value", "symbols": ["number"]},
    {"name": "value", "symbols": ["doubleQuoteValueWithSpace"]},
    {"name": "alphabetNumberUnderbar$ebnf$1", "symbols": []},
    {"name": "alphabetNumberUnderbar$ebnf$1", "symbols": ["alphabetNumberUnderbar$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "alphabetNumberUnderbar", "symbols": [/[a-zA-Z]/, "alphabetNumberUnderbar$ebnf$1"]},
    {"name": "number", "symbols": ["naturalNumber"]},
    {"name": "number", "symbols": ["decimal"]},
    {"name": "naturalNumber$ebnf$1", "symbols": []},
    {"name": "naturalNumber$ebnf$1", "symbols": ["naturalNumber$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "naturalNumber", "symbols": [/[1-9]/, "naturalNumber$ebnf$1"]},
    {"name": "decimal", "symbols": ["zeroDecimal"]},
    {"name": "decimal", "symbols": ["nonZeroDecimal"]},
    {"name": "zeroDecimal$string$1", "symbols": [{"literal":"0"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "zeroDecimal$ebnf$1", "symbols": []},
    {"name": "zeroDecimal$ebnf$1", "symbols": ["zeroDecimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "zeroDecimal$ebnf$2", "symbols": [/[1-9]/]},
    {"name": "zeroDecimal$ebnf$2", "symbols": ["zeroDecimal$ebnf$2", /[1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "zeroDecimal", "symbols": ["zeroDecimal$string$1", "zeroDecimal$ebnf$1", "zeroDecimal$ebnf$2"]},
    {"name": "nonZeroDecimal$ebnf$1", "symbols": [/[1-9]/]},
    {"name": "nonZeroDecimal$ebnf$1", "symbols": ["nonZeroDecimal$ebnf$1", /[1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nonZeroDecimal$ebnf$2", "symbols": []},
    {"name": "nonZeroDecimal$ebnf$2", "symbols": ["nonZeroDecimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nonZeroDecimal$ebnf$3", "symbols": []},
    {"name": "nonZeroDecimal$ebnf$3", "symbols": ["nonZeroDecimal$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nonZeroDecimal$ebnf$4", "symbols": [/[1-9]/]},
    {"name": "nonZeroDecimal$ebnf$4", "symbols": ["nonZeroDecimal$ebnf$4", /[1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nonZeroDecimal", "symbols": ["nonZeroDecimal$ebnf$1", "nonZeroDecimal$ebnf$2", /./, "nonZeroDecimal$ebnf$3", "nonZeroDecimal$ebnf$4"]},
    {"name": "exp$ebnf$5", "symbols": []},
    {"name": "exp$ebnf$5", "symbols": ["exp$ebnf$5", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$6", "symbols": []},
    {"name": "exp$ebnf$6", "symbols": ["exp$ebnf$6", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$5", "symbolOps", "exp$ebnf$6", "value"], "postprocess": 
        function expFOV(data) {
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            value: data[4]
          }
        }
        },
    {"name": "opsTilde", "symbols": [{"literal":"~"}]},
    {"name": "opsTilde$string$1", "symbols": [{"literal":"!"}, {"literal":"~"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsTilde", "symbols": ["opsTilde$string$1"]},
    {"name": "doubleQuoteValueWithRightAsterisk$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithRightAsterisk$ebnf$1", "symbols": ["doubleQuoteValueWithRightAsterisk$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithRightAsterisk$string$1", "symbols": [{"literal":"*"}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "doubleQuoteValueWithRightAsterisk", "symbols": [{"literal":"\""}, "doubleQuoteValueWithRightAsterisk$ebnf$1", "doubleQuoteValueWithRightAsterisk$string$1"]},
    {"name": "doubleQuoteValueWithLeftAsterisk$string$1", "symbols": [{"literal":"\""}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "doubleQuoteValueWithLeftAsterisk$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithLeftAsterisk$ebnf$1", "symbols": ["doubleQuoteValueWithLeftAsterisk$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithLeftAsterisk", "symbols": ["doubleQuoteValueWithLeftAsterisk$string$1", "doubleQuoteValueWithLeftAsterisk$ebnf$1", {"literal":"\""}]},
    {"name": "doubleQuoteValueWithBothAsterisk$string$1", "symbols": [{"literal":"\""}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "doubleQuoteValueWithBothAsterisk$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithBothAsterisk$ebnf$1", "symbols": ["doubleQuoteValueWithBothAsterisk$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithBothAsterisk$string$2", "symbols": [{"literal":"*"}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "doubleQuoteValueWithBothAsterisk", "symbols": ["doubleQuoteValueWithBothAsterisk$string$1", "doubleQuoteValueWithBothAsterisk$ebnf$1", "doubleQuoteValueWithBothAsterisk$string$2"]},
    {"name": "doubleQuoteValueNoSpace$ebnf$1", "symbols": [/[\w:./@]/]},
    {"name": "doubleQuoteValueNoSpace$ebnf$1", "symbols": ["doubleQuoteValueNoSpace$ebnf$1", /[\w:./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueNoSpace", "symbols": [{"literal":"\""}, "doubleQuoteValueNoSpace$ebnf$1", {"literal":"\""}]},
    {"name": "noQuoteValueNoSpace$ebnf$1", "symbols": [/[\w:./@]/]},
    {"name": "noQuoteValueNoSpace$ebnf$1", "symbols": ["noQuoteValueNoSpace$ebnf$1", /[\w:./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "noQuoteValueNoSpace", "symbols": ["noQuoteValueNoSpace$ebnf$1"]},
    {"name": "nestedDoubleQuoteValue$string$1", "symbols": [{"literal":"\""}, {"literal":"\\"}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nestedDoubleQuoteValue$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "nestedDoubleQuoteValue$ebnf$1", "symbols": ["nestedDoubleQuoteValue$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nestedDoubleQuoteValue$string$2", "symbols": [{"literal":"\\"}, {"literal":"\""}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nestedDoubleQuoteValue", "symbols": ["nestedDoubleQuoteValue$string$1", "nestedDoubleQuoteValue$ebnf$1", "nestedDoubleQuoteValue$string$2"]},
    {"name": "doubleQuoteValueWithSpace$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithSpace$ebnf$1", "symbols": ["doubleQuoteValueWithSpace$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithSpace", "symbols": [{"literal":"\""}, "doubleQuoteValueWithSpace$ebnf$1", {"literal":"\""}]},
    {"name": "exp$ebnf$7", "symbols": []},
    {"name": "exp$ebnf$7", "symbols": ["exp$ebnf$7", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$8", "symbols": []},
    {"name": "exp$ebnf$8", "symbols": ["exp$ebnf$8", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$7", "opsTilde", "exp$ebnf$8", "noQuoteValueNoSpace"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'noQuoteValueNoSpace';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$9", "symbols": []},
    {"name": "exp$ebnf$9", "symbols": ["exp$ebnf$9", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$10", "symbols": []},
    {"name": "exp$ebnf$10", "symbols": ["exp$ebnf$10", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$9", "opsTilde", "exp$ebnf$10", "doubleQuoteValueNoSpace"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueNoSpace';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$11", "symbols": []},
    {"name": "exp$ebnf$11", "symbols": ["exp$ebnf$11", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$12", "symbols": [/[ ]/]},
    {"name": "exp$ebnf$12", "symbols": ["exp$ebnf$12", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$11", "opsTilde", "exp$ebnf$12", "doubleQuoteValueWithSpace"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithSpace';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$13", "symbols": []},
    {"name": "exp$ebnf$13", "symbols": ["exp$ebnf$13", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$14", "symbols": []},
    {"name": "exp$ebnf$14", "symbols": ["exp$ebnf$14", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$13", "opsTilde", "exp$ebnf$14", "nestedDoubleQuoteValue"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'nestedDoubleQuoteValue';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$15", "symbols": []},
    {"name": "exp$ebnf$15", "symbols": ["exp$ebnf$15", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$16", "symbols": []},
    {"name": "exp$ebnf$16", "symbols": ["exp$ebnf$16", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$15", "opsTilde", "exp$ebnf$16", "doubleQuoteValueWithBothAsterisk"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithBothAsterisk';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$17", "symbols": []},
    {"name": "exp$ebnf$17", "symbols": ["exp$ebnf$17", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$18", "symbols": []},
    {"name": "exp$ebnf$18", "symbols": ["exp$ebnf$18", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$17", "opsTilde", "exp$ebnf$18", "doubleQuoteValueWithRightAsterisk"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithRightAsterisk';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$19", "symbols": []},
    {"name": "exp$ebnf$19", "symbols": ["exp$ebnf$19", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$20", "symbols": []},
    {"name": "exp$ebnf$20", "symbols": ["exp$ebnf$20", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$19", "opsTilde", "exp$ebnf$20", "doubleQuoteValueWithLeftAsterisk"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithLeftAsterisk';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "opsIn$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIn", "symbols": ["opsIn$string$1"]},
    {"name": "opsIn$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIn", "symbols": ["opsIn$string$2"]},
    {"name": "inValue$ebnf$1", "symbols": []},
    {"name": "inValue$ebnf$1", "symbols": ["inValue$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue$ebnf$2$ebnf$1", "symbols": []},
    {"name": "inValue$ebnf$2$ebnf$1", "symbols": ["inValue$ebnf$2$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue$ebnf$2", "symbols": ["inValue$ebnf$2$ebnf$1"], "postprocess": id},
    {"name": "inValue$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "inValue$ebnf$3", "symbols": []},
    {"name": "inValue$ebnf$3", "symbols": ["inValue$ebnf$3", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue", "symbols": [{"literal":"("}, "inValue$ebnf$1", "fieldOrdoubleQuoteValueWithSpace", "inValue$ebnf$2", "repeatedCommaField", "inValue$ebnf$3", {"literal":")"}]},
    {"name": "fieldOrdoubleQuoteValueWithSpace", "symbols": ["field"]},
    {"name": "fieldOrdoubleQuoteValueWithSpace", "symbols": ["doubleQuoteValueWithSpace"]},
    {"name": "fieldOrdoubleQuoteValueWithSpace", "symbols": ["number"]},
    {"name": "repeatedCommaField$ebnf$1", "symbols": []},
    {"name": "repeatedCommaField$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "repeatedCommaField$ebnf$1$subexpression$1$ebnf$1", "symbols": ["repeatedCommaField$ebnf$1$subexpression$1$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "repeatedCommaField$ebnf$1$subexpression$1", "symbols": ["commaFieldOrCommaDoubleQuoteValueWithSpace", "repeatedCommaField$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "repeatedCommaField$ebnf$1", "symbols": ["repeatedCommaField$ebnf$1", "repeatedCommaField$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "repeatedCommaField", "symbols": ["repeatedCommaField$ebnf$1"]},
    {"name": "commaFieldOrCommaDoubleQuoteValueWithSpace", "symbols": ["commaField"]},
    {"name": "commaFieldOrCommaDoubleQuoteValueWithSpace", "symbols": ["commaDoubleQuoteValueWithSpace"]},
    {"name": "commaFieldOrCommaDoubleQuoteValueWithSpace", "symbols": ["commaNumber"]},
    {"name": "commaField$ebnf$1", "symbols": []},
    {"name": "commaField$ebnf$1", "symbols": ["commaField$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaField", "symbols": [{"literal":","}, "commaField$ebnf$1", "field"]},
    {"name": "commaNumber$ebnf$1", "symbols": []},
    {"name": "commaNumber$ebnf$1", "symbols": ["commaNumber$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaNumber", "symbols": [{"literal":","}, "commaNumber$ebnf$1", "number"]},
    {"name": "commaDoubleQuoteValueWithSpace$ebnf$1", "symbols": []},
    {"name": "commaDoubleQuoteValueWithSpace$ebnf$1", "symbols": ["commaDoubleQuoteValueWithSpace$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaDoubleQuoteValueWithSpace", "symbols": [{"literal":","}, "commaDoubleQuoteValueWithSpace$ebnf$1", "doubleQuoteValueWithSpace"]},
    {"name": "exp$ebnf$21", "symbols": []},
    {"name": "exp$ebnf$21", "symbols": ["exp$ebnf$21", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$22", "symbols": []},
    {"name": "exp$ebnf$22", "symbols": ["exp$ebnf$22", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$21", "opsIn", "exp$ebnf$22", "inValue"], "postprocess": 
        function expFOV(data) {
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            value: data[4]
          }
        }
        },
    {"name": "opsEuqal", "symbols": [{"literal":"="}]},
    {"name": "opsEuqal$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsEuqal", "symbols": ["opsEuqal$string$1"]},
    {"name": "opsIs$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIs", "symbols": ["opsIs$string$1"]},
    {"name": "opsIs$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIs", "symbols": ["opsIs$string$2"]},
    {"name": "exp$ebnf$23", "symbols": []},
    {"name": "exp$ebnf$23", "symbols": ["exp$ebnf$23", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$24", "symbols": []},
    {"name": "exp$ebnf$24", "symbols": ["exp$ebnf$24", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$23", "opsIs", "exp$ebnf$24", "value"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'value';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "exp$ebnf$25", "symbols": []},
    {"name": "exp$ebnf$25", "symbols": ["exp$ebnf$25", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$26", "symbols": []},
    {"name": "exp$ebnf$26", "symbols": ["exp$ebnf$26", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$25", "opsIs", "exp$ebnf$26", "doubleQuoteValueWithSpace"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithSpace';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            valueHint: valueHint,
            value: data[4]
          }
        }
        },
    {"name": "function$ebnf$1", "symbols": []},
    {"name": "function$ebnf$1", "symbols": ["function$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function$string$1", "symbols": [{"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function", "symbols": [/[a-zA-Z]/, "function$ebnf$1", "function$string$1"]}
]
  , ParserStart: "exp"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
