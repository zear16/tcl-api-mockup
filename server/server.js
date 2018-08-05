const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const keyPath = process.env.KEY_PATH || 'server/cert';

var privateKey = fs.readFileSync(`./${keyPath}/server.key`);
var certificate = fs.readFileSync(`./${keyPath}/server.crt`);
var credentials = {key: privateKey, cert: certificate};

var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// Config middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.all('/api/login_mobile', (req, res) => {
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

//app.listen(port, () => {
//    console.log(`Started up at port ${port}`);
//});
httpServer.listen(port, () => {
    console.log(`Started up HTTP at port ${port}`);
});
httpsServer.listen(port + 443, () => {
    console.log(`Started up HTTPS at port ${port + 443}`);
});

module.exports = {
    app
};
