const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res
        .status(200)
        .send({
            code: 0,
            msg: 'OK',
            data: [
                {
                    imgUrl: 'http://home.transport.co.th/cache/com_smileportal/images/ 2561-08-01  14.05.12_69afa6c64e14b7549201c90009cfb133.png',
                    caption: 'กิจกรรมเดินวิ่งการกุศล Digital Run 2018',
                    targetUrl: 'http://home.transport.co.th/index.php/th/2014-12-16-06-59-00/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/item/%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B8%E0%B8%A8%E0%B8%A5.html'
                },
                {
                    imgUrl: 'http://home.transport.co.th/cache/com_smileportal/images/126377_9d59c3c0bcaf2fc6682722c1afaabbf3.jpg',
                    caption: 'บขส. ร่วมส่งกำลังใจไปถ้ำหลวง ขอให้น้องๆ ทีมฟุตบอลหมูป่า และเจ้าหน้าที่ทุกท่านปลอดภัย',
                    targetUrl: 'http://home.transport.co.th/index.php/th/2014-12-16-06-59-00/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/item/%E0%B8%9A%E0%B8%82%E0%B8%AA-%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%83%E0%B8%88%E0%B9%84%E0%B8%9B%E0%B8%96%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-%E0%B8%82%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%86-%E0%B8%97%E0%B8%B5%E0%B8%A1%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%9B%E0%B9%88%E0%B8%B2-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%A0%E0%B8%B1%E0%B8%A2.html'
                },
                {
                    imgUrl: 'http://home.transport.co.th/cache/com_smileportal/images/  a5-01_63692ebf57ee553eb788f01c68e9672b.jpg',
                    caption: 'บขส.ได้เพิ่มแผนอำนวยความสะดวกให้แก่ลูกค้า มาสายใต้ก็ไปเชียงใหม่ได้นะครับ',
                    targetUrl: 'http://home.transport.co.th/index.php/th/2014-12-16-06-59-00/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/item/%E0%B8%9A%E0%B8%82%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%A2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%A7%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2.html'
                }
            ]
        });
});

module.exports = router;