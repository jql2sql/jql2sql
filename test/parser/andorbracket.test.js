const { parseJQL, KINDS, clearAST } = require('../../index.js')

{
  const expr = 'a = b and c = d';

  it(expr, () => {
    let exp = parseJQL(expr);
    let expLt = clearAST(exp.expLt);
    let expRt = clearAST(exp.expRt);

    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_LTRT);
    expect(exp.cleaned.andOr).toBe('and');
    expect(expLt.kinds).toBe(KINDS.AST_FOV);
    expect(expLt.cleaned.field).toBe('a');
    expect(expLt.cleaned.value).toBe('b');
    expect(expRt.kinds).toBe(KINDS.AST_FOV);
    expect(expRt.cleaned.field).toBe('c');
    expect(expRt.cleaned.value).toBe('d');
  });
}

{
  const expr = 'a=b     or      c     =     d';

  it(expr, () => {
    let exp = parseJQL(expr);
    let expLt = clearAST(exp.expLt);
    let expRt = clearAST(exp.expRt);

    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_LTRT);
    expect(exp.cleaned.andOr).toBe('or');
    expect(expLt.kinds).toBe(KINDS.AST_FOV);
    expect(expLt.cleaned.field).toBe('a');
    expect(expLt.cleaned.value).toBe('b');
    expect(expRt.kinds).toBe(KINDS.AST_FOV);
    expect(expRt.cleaned.field).toBe('c');
    expect(expRt.cleaned.value).toBe('d');
  });
}

{
  const expr = '(a=b)';

  it(expr, () => {
    let exp = parseJQL(expr);
    let innerExp = clearAST(exp.exp);

    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_BRACKET);
    expect(innerExp.kinds).toBe(KINDS.AST_FOV);
    expect(innerExp.cleaned.field).toBe('a');
    expect(innerExp.cleaned.operator).toBe('=');
    expect(innerExp.cleaned.value).toBe('b');
  });
}

{
  const expr = '(((a=b)))';

  it(expr, () => {
    let exp = parseJQL(expr);
    let inner1Exp = clearAST(exp.exp);
    let inner2Exp = clearAST(inner1Exp.exp);
    let inner3Exp = clearAST(inner2Exp.exp);

    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_BRACKET);
    expect(inner1Exp.kinds).toBe(KINDS.AST_BRACKET);
    expect(inner2Exp.kinds).toBe(KINDS.AST_BRACKET);
    expect(inner3Exp.cleaned.field).toBe('a');
    expect(inner3Exp.cleaned.operator).toBe('=');
    expect(inner3Exp.cleaned.value).toBe('b');
  });
}

{
  const expr = '(((a=b))and(c=d))';

  it(expr, () => {
    let exp = parseJQL(expr);
    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_BRACKET);
    const inner1Exp = clearAST(exp.exp);
    expect(inner1Exp.kinds).toBe(KINDS.AST_LTRT);
    const exlLt = clearAST(inner1Exp.expLt);
    expect(exlLt.kinds).toBe(KINDS.AST_BRACKET);
    const innnerExp2 = clearAST(exlLt.exp);
    expect(innnerExp2.kinds).toBe(KINDS.AST_BRACKET);
    const innnerExp3 = clearAST(innnerExp2.exp);
    expect(innnerExp3.kinds).toBe(KINDS.AST_FOV);
    expect(innnerExp3.cleaned.field).toBe('a');
    expect(innnerExp3.cleaned.operator).toBe('=');
    expect(innnerExp3.cleaned.value).toBe('b');

    const exlRt = clearAST(inner1Exp.expRt);
    expect(exlRt.kinds).toBe(KINDS.AST_BRACKET);
    const innnerExp4 = clearAST(exlRt.exp);
    expect(innnerExp4.kinds).toBe(KINDS.AST_FOV);
    expect(innnerExp4.cleaned.field).toBe('c');
    expect(innnerExp4.cleaned.operator).toBe('=');
    expect(innnerExp4.cleaned.value).toBe('d');
  });
}

{
  const expr = '(a=b and c=d)or(e=f)';

  it(expr, () => {
    let exp = parseJQL(expr);
    exp = clearAST(exp);

    expect(exp.kinds).toBe(KINDS.AST_LTRT);
    expect(exp.cleaned.andOr).toBe('or');
    const expLt = clearAST(exp.expLt);
    expect(expLt.kinds).toBe(KINDS.AST_BRACKET);
    const innnerExpLt = clearAST(expLt.exp);
    expect(innnerExpLt.kinds).toBe(KINDS.AST_LTRT);
    expect(innnerExpLt.cleaned.andOr).toBe('and');
    const expLt2 = clearAST(innnerExpLt.expLt);
    expect(expLt2.kinds).toBe(KINDS.AST_FOV);
    expect(expLt2.cleaned.field).toBe('a');
    expect(expLt2.cleaned.operator).toBe('=');
    expect(expLt2.cleaned.value).toBe('b');
    const expRt2 = clearAST(innnerExpLt.expRt);
    expect(expRt2.kinds).toBe(KINDS.AST_FOV);
    expect(expRt2.cleaned.field).toBe('c');
    expect(expRt2.cleaned.operator).toBe('=');
    expect(expRt2.cleaned.value).toBe('d');

    const expRt = clearAST(exp.expRt);
    expect(expRt.kinds).toBe(KINDS.AST_BRACKET);
    const innnerExpRt = clearAST(expRt.exp);
    expect(innnerExpRt.kinds).toBe(KINDS.AST_FOV);
    expect(innnerExpRt.cleaned.field).toBe('e');
    expect(innnerExpRt.cleaned.operator).toBe('=');
    expect(innnerExpRt.cleaned.value).toBe('f');
  });
}

{
  const expr = '(a=b';

  it(expr, () => {
    let exp = parseJQL(expr);
    expect(exp).toBe(null);
  });
}

{
  const expr = ')a=b';

  it(expr, () => {
    let exception = null;

    try {
      parseJQL(expr);
    }
    catch (e) {
      exception = e;
    }

    expect(exception).not.toBeNull();
  });    
}

{
  const expr = ')a=b)';

  it(expr, () => {
    let exception = null;

    try {
      parseJQL(expr);
    }
    catch (e) {
      exception = e;
    }

    expect(exception).not.toBeNull();
  });
}

{
  const expr = '(a=b(';

  it(expr, () => {
    const exp = parseJQL(expr);
    expect(exp).toBe(null);
  });
}
