require('should');
const supertest = require('supertest');
const express = require('express');
const app = require('../app');
const request = supertest(app);

describe('Test the root path', () => {
    beforeEach("the base data", () => {

    });

    it(' GET  should return 200', (done) => {
        request
            .get('/users')
            .expect(200)
            .end(done);
    });

    it('POST user', (done) => {
        request
            .post('/users')
            .send({
                "name": "9999999999999999999",
                age: 4
            })
            .expect(201)
            .end(done)
    });

    it('PUT send users from mysql', (done) => {
        request
            .put('/users/1')
            .send({
                "id": 5,
                "name": "test",
                "age": 6
            })
            .expect(204)
            .end(done)
    });

    it('DELETE users from mysql', (done) => {
        request
            .delete('/users/1')
            .expect(204)
            .end(done)
    })


});
