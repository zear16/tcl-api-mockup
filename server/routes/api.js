const express = require('express');
const router = express.Router();
const parks = require('../db/park');
const cities = require('../db/city');
const trip = require('../db/trip');
const seat = require('../db/seat');

router.use((req, res, next) => {
    next();
});

router.all('/login_mobile', (req, res) => {
    var email = req.body.email;
    res.status(200).send({
        data: {
            token: '',
            timeout: '2020-12-20T00:00:00',
            email,
            name: 'Pratchaya',
            surname: 'Chailangka',
            gender: 'male',
            idCard: '1234567890123',
            phone: null,
            mobile: '0891366606',
            addr: null
        }
    });
});

router.all('/subscribe', (req, res) => {
    var emailId = req.body.emailId;
    var firebaseToken = req.body.firebaseToken;
    res.status(200).send({
        code: 0,
        msg: '',
        data: {

        }
    })
});

router.all('/trans_get', (req, res) => {
    var sessionId = req.body.sessionId;
    var transType = req.body.transType;
    var channelType = req.body.channelType;
    var referTrans = req.body.referTrans;
    var remark = req.body.remark;
    var timeout = new Date();
    res.status(200).send({
        code: 0,
        msg: '',
        data: {
            transId: '01234567890123',
            timeout: new Date(timeout.getTime() + (30*60000)).toISOString()
        }
    });
});

router.all('/city', (req, res) => {
    res.status(200).send({
        code: 0,
        msg: '',
        data: cities
    });
});

router.all('/park', (req, res) => {
    var token = req.body.token;
    var city = req.body.city;
    if (city === null) {
        return res.status(404);
    }
    if (city === '24') {
        // Bangkok
        res.status(200).send({
            code: 0,
            msg: 'OK',
            data: parks[0]
        })
    } else if (city === '1') {
        // Krabi
        res.status(200).send({
            code: 0,
            msg: 'OK',
            data: parks[1]
        })
    } else {
        return res.status(404).send();
    }
});

router.all('/trip', (req, res) => {
    var token = req.body.token;
    var departureDate = new Date().toISOString().substring(0, 10);
    var returnDate = new Date(new Date().getTime() + (1440*60000)).toISOString();
    res.status(200).send({
        code: 0,
        msg: 'OK',
        data: trip.getTripResult(departureDate, returnDate)
    });
});

router.all('/seat_unmark_trans', (req, res) => {
    var token = req.body.token;
    var transId = req.body.transId;
    res.status(200).send({
        code: 0,
        msg: 'OK',
        data: null
    });
});

router.all('/seat', (req, res) => {
    var token = req.body.token;
    var transId = req.body.transId;
    res.status(200).send({
        code: 0,
        msg: 'OK',
        data: seat
    })
});

router.all('/seat_mark', (req, res) => {
    var seatFloor = req.body.seatFloor[0];
    var seatNo = req.body.seatNo[0];
    var gender = req.body.gender[0];
    res.status(200).send({
        code: 0,
        msg: 'OK',
        data: [{
            reserveId: 1,
            seatFloor,
            seatNo
        }]
    })
});

router.all('/seat_unmark', (req, res) => {
    var reserveId = req.body.reserveId[0];
    var seatFloor = req.body.seatFloor[0];
    var seatNo = req.body.seatNo[0];
    res.status(200).send({
        code: 0,
        msg: 'OK',
        data: null
    });
});

module.exports = router;
