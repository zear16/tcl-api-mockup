const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');

describe('GET /api/login_mobile', () => {
    it('Should return status 200', (done) => {
        request(app)
            .get('/api/login_mobile?email=zear16@gmail.com&password=123')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                done();
            });
    });
});
