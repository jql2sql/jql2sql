const { parseJQL, transpile2SQL } = require('../../index.js')

{
  const expr = 'a = b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a = b');
  });
}

{
  const expr = 'a != b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a != b');
  });
}

{
  const expr = 'a > b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a > b');
  });
}

{
  const expr = 'a < b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a < b');
  });
}

{
  const expr = 'a >= b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a >= b');
  });
}

{
  const expr = 'a <= b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a <= b');
  });
}

{
  const expr = 'a = b and c = d';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a = b and c = d');
  });
}

{
  const expr = 'a=b     or      c     =     d';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a = b or c = d');
  });
}

{
  const expr = '(a=b)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('(a = b)');
  });
}

{
  const expr = '(((a=b)))';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('(((a = b)))');
  });
}

{
  const expr = '(((a=b))and(c=d))';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('(((a = b)) and (c = d))');
  });
}

{
  const expr = '(a=b and c=d)or(e=f)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('(a = b and c = d) or (e = f)');
  });
}
