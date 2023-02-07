const { parseJQL, transpile2SQL } = require('../../index.js')

{
  const expr = 'size ~ "M" and name ~ "Curry Ramen"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    
    expect(where).toBe('size LIKE \'M\' and (name LIKE \'Curry\' or name LIKE \'Ramen\')');
  });
}

{
  const expr = 'size ~ "M" and name ~ "Curry Ramen JinRamen"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    
    expect(where).toBe('size LIKE \'M\' and (name LIKE \'Curry\' or name LIKE \'Ramen\' or name LIKE \'JinRamen\')');
  });
}

{
  const expr = 'size ~ "M XL" and name ~ "Curry Ramen JinRamen"';

  it(expr, () => {
    const ast = parseJQL(expr);
    const where = transpile2SQL(ast, []);
    
    expect(where).toBe('(size LIKE \'M\' or size LIKE \'XL\') and (name LIKE \'Curry\' or name LIKE \'Ramen\' or name LIKE \'JinRamen\')');
  });
}
