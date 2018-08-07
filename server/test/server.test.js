const request = require('supertest');
const expect = require('expect');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app = require('./../server').app;

chai.use(chaiHttp);

const token = '01234567890';
const transId = '01234567890';

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
                .send(`token=${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    done();
                });
        });
    });

    describe('GET /api/park', () => {
        it('Should return status 200 if park found', (done) => {
            chai.request(app)
                .get('/api/park')
                .send(`token=${token}`)
                .send('city=24')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    done();
                });
        });

        it('Should return status 404 if city not found', (done) => {
            chai.request(app)
                .get('/api/park')
                .send(`token=${token}`)
                .send('city=999')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        })
    });

    describe('GET /api/trip', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/trip')
                .send(`token=${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.dptrTrips.trips.should.be.an('array');
                    res.body.data.rtrnTrips.trips.should.be.an('array');
                    done();
                });
        })
    });

    describe('GET /api/seat_unmark_trans', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/seat_unmark_trans')
                .send(`token=${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/seat', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/seat')
                .send(`token=${token}`)
                .send(`transId=${transId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/seat_mark', () => {
        it('Should return status 200', (done) => {
            chai.request(app)
                .get('/api/seat_mark')
                .send('seatFloor[0]=2')
                .send('seatNo[0]=A1')
                .send('gender=M')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    res.body.data[0].should.have.property('seatFloor', '2');
                    res.body.data[0].should.have.property('seatNo', 'A1');
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


