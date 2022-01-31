var app = require('../../app');

const supertest = require('supertest');

describe('takes three integers and returns string with divisors from divCount', () => {

    it("GET /divcount?a=2&b=4&k=2", async () => {
        await supertest(app).get("/divcount?a=2&b=4&k=2")
        .expect(200)
        .then((response) => {
            expect(response.text).toEqual("There are 2 integers divisible by 2, between 2 and 4.")
        });
    })

    it("GET /divcount?a=2&b=2&k=3", async () => {
        await supertest(app).get('/divcount?a=2&b=2&k=3')
        .expect(200)
        .then(response => {
            expect(response.text).toEqual("There are no integers divisible by 3, between 2 and 2.")
        })
    })

    it("GET /divcount?a=4&b=5&k=4", async () => {
        await supertest(app).get('/divcount?a=4&b=5&k=4')
        .expect(200)
        .then(response => {
            expect(response.text).toEqual("There is 1 integer divisible by 4, between 4 and 5.")
        })
    })

})

