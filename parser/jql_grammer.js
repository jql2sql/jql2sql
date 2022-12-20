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
    {"name": "exp", "symbols": ["field", "exp$ebnf$1", "ops", "exp$ebnf$2", "value"], "postprocess": 
        function expFOV(data) {
          return {
            kinds: KINDS.EXP_FOV,
            field: data[0],
            ops: data[2],
            value: data[4]
          }
        }
        },
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
    {"name": "exp", "symbols": [{"literal":"("}, "exp$ebnf$5", "exp", "exp$ebnf$6", {"literal":")"}], "postprocess": 
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
    {"name": "field$ebnf$1", "symbols": []},
    {"name": "field$ebnf$1", "symbols": ["field$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "field", "symbols": [/[a-zA-Z]/, "field$ebnf$1"]},
    {"name": "ops", "symbols": ["textOps"]},
    {"name": "ops", "symbols": ["symbolOps"]},
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
    {"name": "textOps", "symbols": ["is"]},
    {"name": "textOps", "symbols": ["in"]},
    {"name": "is$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "is", "symbols": ["is$string$1"]},
    {"name": "is$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "is", "symbols": ["is$string$2"]},
    {"name": "in$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "in", "symbols": ["in$string$1"]},
    {"name": "in$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "in", "symbols": ["in$string$2"]},
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
    {"name": "decimal$string$1", "symbols": [{"literal":"0"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$1", "symbols": ["decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal", "symbols": ["decimal$string$1", "decimal$ebnf$1"]}
]
  , ParserStart: "exp"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
