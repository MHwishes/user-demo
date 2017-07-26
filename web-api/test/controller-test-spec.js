require('should');
const supertest = require('supertest');
const express = require('express');
const app = require('../app');
const request = supertest(app);

describe('Test the root path', () => {
    it(' GET method should return 200', (done) => {
        request
            .get('/users')
            .expect(200)
            .expect((res) => {
                res.body.length.should.equal(3);

            }).end(done);
    });



});
