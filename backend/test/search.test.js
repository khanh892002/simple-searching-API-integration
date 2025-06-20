const request = require('supertest');
const app = require('../app');

test("Return normal result, no errors: check if the result has status 200, has an array containing element and each element contains title, link and snippet.", async () => {
    const response = await request(app).get('/search?q=hanoi');
    const results = response.body.organic_results;
 
    expect(response.status).toBe(200);
    if (results.length > 0) {
        expect(results[0]).toHaveProperty('title');
        expect(results[0]).toHaveProperty('link');
        expect(results[0]).toHaveProperty('snippet');
    }
});

test("Empty input, return error status 400 with error element.", async () => {
    const result = await request(app).get('/search?q=');
    
    expect(result.status).toBe(400);
    expect(result).toHaveProperty('error');
});

/*test("return no result", async () => {
    const result = await testingSearch(`"3.141592653589793238462643383279502884197169399375107"`);
    // search for PI with a wrong digit
    // console.log(result.data); print out:
    // [
    // {
    //  position: 1,
    //  title: 'Approximations de π',
    //  link: 'http://mathzone.blog.free.fr/public/Premiere_S/Algorithmique/Pi_Archimede.pdf',
    //  redirect_link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://mathzone.blog.free.fr/public/Premiere_S/Algorithmique/Pi_Archimede.pdf&ved=2ahUKEwiE45KHoemNAxXjALkGHZeTDisQFnoECBwQAQ',
    //  displayed_link: 'http://mathzone.blog.free.fr › Pi_Archimede',
    //  snippet: '99 —> 3.141592653589793238462643383279502884197169399375107 erreur commise : 7E-51. 100 —> 3.141592653589793238462643383279502884197169399375106 erreur ...',
    //  snippet_highlighted_words: [ '3.141592653589793238462643383279502884197169399375107' ],
    //  rich_snippet: { top: [Object] },
    //  source: 'jean-luc giacomoni'
    // }
    // ]
    // Which is a suprise to me since I tried on google search bar and got a No result
    
    expect(result.status).toBe(200);
    expect(result.data.length).toBe(0);
});*/