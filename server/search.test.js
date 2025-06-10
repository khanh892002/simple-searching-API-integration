import { search } from './search';
test("return normal result, no errors", async () => {
    const results = await search('hanoi');
    
    expect(results.status).toBe(200);
    expect(Array.isArray(results.data)).toBe(true);
    expect(results.data.length > 0).toBe(true);
    expect(results.data[0]).toHaveProperty('title');
    expect(results.data[0]).toHaveProperty('link');
    expect(results.data[0]).toHaveProperty('snippet');
});

test("return no result", async () => {
    const result = await search(`"3.141592653589793238462643383279502884197169399375107"`);
    // search for PI with a wrong digit
    expect(results.status).toBe(200);
    expect(result.data.length).toBe(0);
});

test