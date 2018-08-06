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

router.all('/city', (req, res) => {
    res.status(200).send({
        code: 0,
        msg: '',
        data: [
            {
                id: 1,
                desc: "กระบี่"
            },
            {
                id: 24,
                desc: "กรุงเทพมหานคร"
            }
        ]
    });
});

const parks = [
    [
        {
            id: 1223,
            desc: 'กรุงเทพ(หมอชิตใหม่2)',
            descEn: '',
            terminal: '',
            province: {
                id: 24,
                desc: 'กรุงเทพมหานคร'
            }
        },
        {
            id: 1223,
            desc: 'กรุงเทพ(สายใต้ใหม่)',
            descEn: '',
            terminal: '',
            province: {
                id: 24,
                desc: 'กรุงเทพมหานคร'
            }
        },
        {
            id: 1736,
            desc: 'สายใต้(บรมฯ)',
            descEn: '',
            terminal: '',
            province: {
                id: 24,
                desc: 'กรุงเทพมหานคร'
            }
        },
        {
            id: 1223,
            desc: 'กรุงเทพ(เอกมัย)',
            descEn: '',
            terminal: '',
            province: {
                id: 24,
                desc: 'กรุงเทพมหานคร'
            }
        },
        {
            id: 1187,
            desc: 'สุวรรณภูมิ(สนามบิน)021344099',
            descEn: '',
            terminal: '',
            province: {
                id: 24,
                desc: 'กรุงเทพมหานคร'
            }
        }
    ],
    [
        {
            id: 1076,
            desc: 'ชัยบุรี077-270703',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 1175,
            desc: 'จุดจอด อ.ลำทับ',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 701,
            desc: 'สถานีขนส่งผู้โดยสาร จ.กระบี่',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 925,
            desc: 'จุดจอด อ.เขาพนม',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 845,
            desc: 'จุดจอด อ.เหนือคลอง',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 1502,
            desc: 'ท่าเรือเกาะลันตา(บ้านหัวหิน)',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 846,
            desc: 'จุดจอด อ.คลองท่อม',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 1171,
            desc: 'จุดจอด อ.ปลายพระยา',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        },
        {
            id: 807,
            desc: 'จุดจอด อ.อ่าวลึก',
            descEn: '',
            terminal: '',
            province: {
                id: 1,
                desc: 'กระบี่'
            }
        }
    ]
]

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

module.exports = router;
