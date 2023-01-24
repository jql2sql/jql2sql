@{%
const KINDS = {
  EXP_FOV : 0,
  EXP_LTRT : 1,
  EXP_BRACKET : 2
};
%}

exp -> "(" [ ]:* exp [ ]:* ")" {%
  function expBracket(data) {
    return {
      kinds: KINDS.EXP_BRACKET,
      bracketLt: data[0],
      exp: data[2],
      bracketRt: data[4]
    }
  }
%}

andOr -> and | or
and -> "and" | "AND"
or -> "or" | "OR"

exp -> exp [ ]:* andOr [ ]:* exp {%
  function exp2(data) {
    return {
      kinds: KINDS.EXP_LTRT,
      expLt: data[0],
      andOr: data[2],
      expRt: data[4]
    }
  }
%}

exp -> field [ ]:* symbolOps [ ]:* value {%
  function expFOV(data) {
    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      value: data[4]
    }
  }
%}

exp -> field [ ]:* opsAllowOnlyStringValue [ ]:* stringValue {%
  function expFOV(data) {
    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      value: data[4]
    }
  }
%}

exp -> field [ ]:* opsIn [ ]:* inValue {%
  function expFOV(data) {
    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      value: data[4]
    }
  }
%}

field -> [a-zA-Z] [a-zA-Z0-9_]:*

opsAllowOnlyStringValue -> opsTextValue | opsIs
opsTextValue -> "=" | "!=" | "~" | "!~"
opsIs -> "is not" | "is"
opsIn -> "not in" | "in"

stringValue -> doubleQuoteValue | field
doubleQuoteValue -> "\"" [\w :./@]:+ "\""

fieldOrdoubleQuoteValue -> field | doubleQuoteValue
commaFieldOrdoubleQuoteValue -> "," [ ]:* [a-zA-Z0-9_]:* | "," [ ]:* "\"" [\w :./@]:+ "\""
inValue -> "(" [ ]:* fieldOrdoubleQuoteValue [ ]:* :? commaField [ ]:* ")"
commaField -> ( commaFieldOrdoubleQuoteValue [ ]:* ):*

# ops -> textOps | symbolOps
symbolOps -> "=" | "!=" | ">" | "<" | ">=" | "<=" | "~" | "!~"


value -> alphabetNumberUnderbar | naturalNumber | function  | decimal
alphabetNumberUnderbar -> [a-zA-Z] [a-zA-Z0-9_]:*
naturalNumber -> [1-9] [0-9]:*
function -> [a-zA-Z] [a-zA-Z0-9_]:* "()"

decimal -> zeroDecimal | nonZeroDecimal
zeroDecimal -> "0." [0-9]:* [1-9]:+
nonZeroDecimal -> [1-9]:+ . [0-9]:* [1-9]:+
