const express = require('express');
const router = express.Router();
const parks = require('../db/park');
const cities = require('../db/city');

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
        data: {
            dptrTrips: {
                tripDate: departureDate,
                trips: [
                    {
                        id: 1,
                        date: departureDate,
                        time: '09:00:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 2,
                        date: departureDate,
                        time: '12:00:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 3,
                        date: departureDate,
                        time: '15:00:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 4,
                        date: departureDate,
                        time: '18:00:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    }
                ]
            },
            rtrnTrips: {
                tripDate: returnDate,
                trips: [
                    {
                        id: 11,
                        date: returnDate,
                        time: '10:30:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 12,
                        date: returnDate,
                        time: '13:30:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 13,
                        date: returnDate,
                        time: '16:30:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    },
                    {
                        id: 14,
                        date: returnDate,
                        time: '19:30:00',
                        dptrPark: {
                            id: 1,
                            desc: '',
                            descEn: '',
                            terminal: '',
                            province: {
                                id: 24,
                                desc: ''
                            }
                        },
                        busStd: {
                            id: 1,
                            desc: ''
                        }
                    }
                ]
            }
        }
    })
});

module.exports = router;
