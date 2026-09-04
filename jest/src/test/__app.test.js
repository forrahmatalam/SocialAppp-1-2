const request =require('supertest');

const app = require('../app');

desribe('GET/',()=>{
    it('should return 200 OK',async()=>{
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(res.body).toEqual({message: 'Hello World'});
    })
})