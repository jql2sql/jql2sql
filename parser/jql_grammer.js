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
    {"name": "exp$ebnf$7", "symbols": []},
    {"name": "exp$ebnf$7", "symbols": ["exp$ebnf$7", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$8", "symbols": []},
    {"name": "exp$ebnf$8", "symbols": ["exp$ebnf$8", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$7", "opsAllowOnlyStringValue", "exp$ebnf$8", "field"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'field';
        
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
    {"name": "exp", "symbols": ["field", "exp$ebnf$9", "opsAllowOnlyStringValue", "exp$ebnf$10", "simpleDoubleQuoteValue"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'simpleDoubleQuoteValue';
        
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
    {"name": "exp$ebnf$12", "symbols": []},
    {"name": "exp$ebnf$12", "symbols": ["exp$ebnf$12", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$11", "opsAllowOnlyStringValue", "exp$ebnf$12", "doubleQuoteValueWithSpace"], "postprocess": 
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
    {"name": "exp", "symbols": ["field", "exp$ebnf$13", "opsAllowOnlyStringValue", "exp$ebnf$14", "doubleQuoteValueWithAsterisk"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'doubleQuoteValueWithAsterisk';
        
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
    {"name": "exp", "symbols": ["field", "exp$ebnf$15", "opsAllowOnlyStringValue", "exp$ebnf$16", "nestedDoubleQuoteValue"], "postprocess": 
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
    {"name": "exp$ebnf$17", "symbols": []},
    {"name": "exp$ebnf$17", "symbols": ["exp$ebnf$17", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp$ebnf$18", "symbols": []},
    {"name": "exp$ebnf$18", "symbols": ["exp$ebnf$18", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["field", "exp$ebnf$17", "opsIn", "exp$ebnf$18", "inValue"], "postprocess": 
        function expFOV(data) {
          const valueHint = {};
          valueHint.text = 'inValue';
        
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            value: data[4]
          }
        }
        },
    {"name": "field$ebnf$1", "symbols": []},
    {"name": "field$ebnf$1", "symbols": ["field$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "field", "symbols": [/[a-zA-Z]/, "field$ebnf$1"]},
    {"name": "opsAllowOnlyStringValue", "symbols": ["opsTextValue"]},
    {"name": "opsAllowOnlyStringValue", "symbols": ["opsIs"]},
    {"name": "opsTextValue", "symbols": [{"literal":"="}]},
    {"name": "opsTextValue$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsTextValue", "symbols": ["opsTextValue$string$1"]},
    {"name": "opsTextValue", "symbols": [{"literal":"~"}]},
    {"name": "opsTextValue$string$2", "symbols": [{"literal":"!"}, {"literal":"~"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsTextValue", "symbols": ["opsTextValue$string$2"]},
    {"name": "opsIs$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIs", "symbols": ["opsIs$string$1"]},
    {"name": "opsIs$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIs", "symbols": ["opsIs$string$2"]},
    {"name": "opsIn$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIn", "symbols": ["opsIn$string$1"]},
    {"name": "opsIn$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "opsIn", "symbols": ["opsIn$string$2"]},
    {"name": "simpleDoubleQuoteValue$ebnf$1", "symbols": [/[\w:./@]/]},
    {"name": "simpleDoubleQuoteValue$ebnf$1", "symbols": ["simpleDoubleQuoteValue$ebnf$1", /[\w:./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "simpleDoubleQuoteValue", "symbols": [{"literal":"\""}, "simpleDoubleQuoteValue$ebnf$1", {"literal":"\""}]},
    {"name": "doubleQuoteValueWithSpace$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithSpace$ebnf$1", "symbols": ["doubleQuoteValueWithSpace$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithSpace", "symbols": [{"literal":"\""}, "doubleQuoteValueWithSpace$ebnf$1", {"literal":"\""}]},
    {"name": "doubleQuoteValueWithAsterisk$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "doubleQuoteValueWithAsterisk$ebnf$1", "symbols": ["doubleQuoteValueWithAsterisk$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doubleQuoteValueWithAsterisk", "symbols": [{"literal":"\""}, /[*]/, "doubleQuoteValueWithAsterisk$ebnf$1", {"literal":"\""}]},
    {"name": "nestedDoubleQuoteValue$ebnf$1", "symbols": [/[\w :./@]/]},
    {"name": "nestedDoubleQuoteValue$ebnf$1", "symbols": ["nestedDoubleQuoteValue$ebnf$1", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nestedDoubleQuoteValue", "symbols": [{"literal":"\""}, {"literal":"\\"}, {"literal":"\""}, "nestedDoubleQuoteValue$ebnf$1", {"literal":"\\"}, {"literal":"\""}, {"literal":"\""}]},
    {"name": "fieldOrdoubleQuoteValue", "symbols": ["field"]},
    {"name": "fieldOrdoubleQuoteValue", "symbols": ["doubleQuoteValueWithSpace"]},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$1", "symbols": []},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$1", "symbols": ["commaFieldOrdoubleQuoteValue$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$2", "symbols": []},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$2", "symbols": ["commaFieldOrdoubleQuoteValue$ebnf$2", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaFieldOrdoubleQuoteValue", "symbols": [{"literal":","}, "commaFieldOrdoubleQuoteValue$ebnf$1", "commaFieldOrdoubleQuoteValue$ebnf$2"]},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$3", "symbols": []},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$3", "symbols": ["commaFieldOrdoubleQuoteValue$ebnf$3", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$4", "symbols": [/[\w :./@]/]},
    {"name": "commaFieldOrdoubleQuoteValue$ebnf$4", "symbols": ["commaFieldOrdoubleQuoteValue$ebnf$4", /[\w :./@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaFieldOrdoubleQuoteValue", "symbols": [{"literal":","}, "commaFieldOrdoubleQuoteValue$ebnf$3", {"literal":"\""}, "commaFieldOrdoubleQuoteValue$ebnf$4", {"literal":"\""}]},
    {"name": "inValue$ebnf$1", "symbols": []},
    {"name": "inValue$ebnf$1", "symbols": ["inValue$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue$ebnf$2$ebnf$1", "symbols": []},
    {"name": "inValue$ebnf$2$ebnf$1", "symbols": ["inValue$ebnf$2$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue$ebnf$2", "symbols": ["inValue$ebnf$2$ebnf$1"], "postprocess": id},
    {"name": "inValue$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "inValue$ebnf$3", "symbols": []},
    {"name": "inValue$ebnf$3", "symbols": ["inValue$ebnf$3", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "inValue", "symbols": [{"literal":"("}, "inValue$ebnf$1", "fieldOrdoubleQuoteValue", "inValue$ebnf$2", "commaField", "inValue$ebnf$3", {"literal":")"}]},
    {"name": "commaField$ebnf$1", "symbols": []},
    {"name": "commaField$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "commaField$ebnf$1$subexpression$1$ebnf$1", "symbols": ["commaField$ebnf$1$subexpression$1$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaField$ebnf$1$subexpression$1", "symbols": ["commaFieldOrdoubleQuoteValue", "commaField$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "commaField$ebnf$1", "symbols": ["commaField$ebnf$1", "commaField$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commaField", "symbols": ["commaField$ebnf$1"]},
    {"name": "symbolOps", "symbols": [{"literal":"="}]},
    {"name": "symbolOps$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$1"]},
    {"name": "symbolOps", "symbols": [{"literal":">"}]},
    {"name": "symbolOps", "symbols": [{"literal":"<"}]},
    {"name": "symbolOps$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$2"]},
    {"name": "symbolOps$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$3"]},
    {"name": "symbolOps", "symbols": [{"literal":"~"}]},
    {"name": "symbolOps$string$4", "symbols": [{"literal":"!"}, {"literal":"~"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "symbolOps", "symbols": ["symbolOps$string$4"]},
    {"name": "value", "symbols": ["alphabetNumberUnderbar"]},
    {"name": "value", "symbols": ["naturalNumber"]},
    {"name": "value", "symbols": ["function"]},
    {"name": "value", "symbols": ["decimal"]},
    {"name": "alphabetNumberUnderbar$ebnf$1", "symbols": []},
    {"name": "alphabetNumberUnderbar$ebnf$1", "symbols": ["alphabetNumberUnderbar$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "alphabetNumberUnderbar", "symbols": [/[a-zA-Z]/, "alphabetNumberUnderbar$ebnf$1"]},
    {"name": "naturalNumber$ebnf$1", "symbols": []},
    {"name": "naturalNumber$ebnf$1", "symbols": ["naturalNumber$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "naturalNumber", "symbols": [/[1-9]/, "naturalNumber$ebnf$1"]},
    {"name": "function$ebnf$1", "symbols": []},
    {"name": "function$ebnf$1", "symbols": ["function$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function$string$1", "symbols": [{"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function", "symbols": [/[a-zA-Z]/, "function$ebnf$1", "function$string$1"]},
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
    {"name": "nonZeroDecimal$ebnf$3", "symbols": [/[1-9]/]},
    {"name": "nonZeroDecimal$ebnf$3", "symbols": ["nonZeroDecimal$ebnf$3", /[1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nonZeroDecimal", "symbols": ["nonZeroDecimal$ebnf$1", /./, "nonZeroDecimal$ebnf$2", "nonZeroDecimal$ebnf$3"]}
]
  , ParserStart: "exp"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
