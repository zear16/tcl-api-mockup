const express = require('express');
const router = express.Router();

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

module.exports = router;
