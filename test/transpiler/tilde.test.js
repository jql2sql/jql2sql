const { parseJQL, transpile2SQL } = require('../../index.js')

{
  const expr = 'a ~ b';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'b\'');
  });
}

{
  const expr = 'a ~     "TEXT"  ';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'TEXT\'');
  });
}

{
  const expr = 'a ~   "TEXT1 TEXT2"  ';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('(a LIKE \'TEXT1\' and a LIKE \'TEXT2\')');
  });
}

{
  const expr = 'a ~   "\\"TEXT1 TEXT2\\""  ';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'%TEXT1 TEXT2%\'');
  });
}

{
  const expr = 'a ~ "*b"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'%b\'');
  });
}

{
  const expr = 'a ~ "b*"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'b%\'');
  });
}

{
  const expr = 'a ~ "*b*"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    expect(where).toBe('a LIKE \'%b%\'');
  });
}
