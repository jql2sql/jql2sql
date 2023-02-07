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

field -> [a-zA-Z] [a-zA-Z0-9_-]:*
symbolOps -> "=" | "!=" | ">" | "<" | ">=" | "<="

value -> alphabetNumberUnderbar | number | doubleQuoteValueWithSpace
alphabetNumberUnderbar -> [a-zA-Z] [a-zA-Z0-9_]:*
number -> naturalNumber | decimal
naturalNumber -> [1-9] [0-9]:*
decimal -> zeroDecimal | nonZeroDecimal
zeroDecimal -> "0." [0-9]:* [1-9]:+
nonZeroDecimal -> [1-9]:+ [0-9]:* . [0-9]:* [1-9]:+

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

opsTilde -> "~" | "!~"

doubleQuoteValueWithRightAsterisk -> "\"" [\w :./@]:+ "*\""
doubleQuoteValueWithLeftAsterisk -> "\"*" [\w :./@]:+ "\""
doubleQuoteValueWithBothAsterisk -> "\"*" [\w :./@]:+ "*\""
# doubleQuoteValueXSpace means both "aabb" "aa bb"
# "aabb" is doubleQuoteValueNoSpace
# "aa bb" is doubleQuoteValueWithSpace
# Problem is that we can't distingquish doubleQuoteValueNoSpace from doubleQuoteValueWithSpace,
# We check that value contains ' ' or not.
doubleQuoteValue -> doubleQuoteValueNoSpace | doubleQuoteValueWithSpace
doubleQuoteValueNoSpace -> "\"" [\w:./@]:+ "\""
doubleQuoteValueWithSpace -> "\"" [\w :./@]:+ "\""
noQuoteValueNoSpace -> [\w:./@]:+
nestedDoubleQuoteValue -> "\"\\\"" [\w :./@]:+  "\\\"\""


exp -> field [ ]:* opsTilde [ ]:* noQuoteValueNoSpace {%
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
%}

exp -> field [ ]:* opsTilde [ ]:* doubleQuoteValue {%
  function expFOV(data) {
    // To check that value contains ' '
    function myContain(mightBeArray, c) {
      return _myContain(mightBeArray, c);
    }

    function _myContain(mightBeArray, c) {
      if (Array.isArray(mightBeArray)) {
        for (const element of mightBeArray) {
          if (Array.isArray(element)) {
            if (_myContain(element, c))
              return true;
          }
          else {
            if (element == c)
              return true;
          }
        }
      }
      else {
        if (mightBeArray.includes(c))
          return true;
      }

      return false;
    }

    const valueHint = {};
    if (myContain(data[4], ' ')) {
      valueHint.text = 'doubleQuoteValueWithSpace';
    }
    else {
      valueHint.text = 'doubleQuoteValueNoSpace';
    }

    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      valueHint: valueHint,
      value: data[4]
    }
  }
%}

exp -> field [ ]:* opsTilde [ ]:* nestedDoubleQuoteValue {%
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
%}

exp -> field [ ]:* opsTilde [ ]:* doubleQuoteValueWithBothAsterisk {%
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
%}

exp -> field [ ]:* opsTilde [ ]:* doubleQuoteValueWithRightAsterisk {%
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
%}

exp -> field [ ]:* opsTilde [ ]:* doubleQuoteValueWithLeftAsterisk {%
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
%}

opsIn -> "not in" | "in"

inValue -> "(" [ ]:* fieldOrdoubleQuoteValueWithSpace [ ]:* :? repeatedCommaField [ ]:* ")"
fieldOrdoubleQuoteValueWithSpace -> field | doubleQuoteValueWithSpace | number
repeatedCommaField -> ( commaFieldOrCommaDoubleQuoteValueWithSpace [ ]:* ):*
commaFieldOrCommaDoubleQuoteValueWithSpace -> commaField | commaDoubleQuoteValueWithSpace | commaNumber
commaField -> "," [ ]:* field
commaNumber -> "," [ ]:* number
commaDoubleQuoteValueWithSpace -> "," [ ]:* doubleQuoteValueWithSpace

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

opsEuqal -> "=" | "!="
opsIs -> "is not" | "is"

exp -> field [ ]:* opsIs [ ]:* value {%
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
%}

exp -> field [ ]:* opsIs [ ]:* doubleQuoteValue {%
  function expFOV(data) {
    const valueHint = {};
    valueHint.text = 'doubleQuoteValue';

    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      valueHint: valueHint,
      value: data[4]
    }
  }
%}

exp -> field [ ]:* opsEuqal [ ]:* doubleQuoteValue {%
  function expFOV(data) {
    const valueHint = {};
    valueHint.text = 'doubleQuoteValue';

    return {
      kinds: KINDS.EXP_FOV,
      field: data[0],
      ops: data[2],
      valueHint: valueHint,
      value: data[4]
    }
  }
%}

function -> [a-zA-Z] [a-zA-Z0-9_]:* "()"
