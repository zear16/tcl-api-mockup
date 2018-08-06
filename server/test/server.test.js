const request = require('supertest');
const expect = require('expect');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app = require('./../server').app;

chai.use(chaiHttp);

describe('Server', () => {

    describe('GET /api/login_mobile', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/login_mobile')
                .send('email=zear16@gmail.com')
                .send('password=123')
                .set('Accept', 'application.json')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/subscribe', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/subscribe')
                .send('emailId=zear16@gmail.com')
                .send('firebaseToken=abc')
                .set('Accept', 'application.json')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/trans_get', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/trans_get')
                .send('sessionId=01234567890123')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
    });

    describe('GET /api/city', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/city')
                .send('token=01234567890')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    done();
                });
        });
    });

    describe('GET /ads', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/ads')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    done();
                });
        });
    });

});


