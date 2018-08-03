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

});


