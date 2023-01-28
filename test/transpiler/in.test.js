const { parseJQL, transpile2SQL } = require('../../index.js')

{
  const expr = 'a in (b)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'b\')');
  });
}

{
  const expr = 'a in (   b)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'b\')');
  });
}

{
  const expr = 'a in (b   )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'b\')');
  });
}

{
  const expr = 'a in (  "b"   )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'b\')');
  });
}

{
  const expr = 'a in (field)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'field\')');
  });
}

{
  const expr = 'a in (   field)';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'field\')');
  });
}

{
  const expr = 'a in (field   )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'field\')');
  });
}

{
  const expr = 'a in (  "field"   )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'field\')');
  });
}

{
  const expr = 'a in ("abcd", "efgh")';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', \'efgh\')');
  });
}

{
  const expr = 'a in (     "abcd", "efgh"     )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', \'efgh\')');
  });
}

{
  const expr = 'a in ("abcd"     ,    "efgh")';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', \'efgh\')');
  });
}

{
  const expr = 'a in (   "abcd"     ,    "efgh"                       )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', \'efgh\')');
  });
}

{
  const expr = 'a in ("abcd", 2023, "abcd@email.com", "http://www.abcd.com")';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', 2023, \'abcd@email.com\', \'http://www.abcd.com\')');
  });
}

{
  const expr = 'a in (    "abcd"    ,   2023    ,    "abcd@email.com"   ,     "http://www.abcd.com"   )';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a in (\'abcd\', 2023, \'abcd@email.com\', \'http://www.abcd.com\')');
  });
}
