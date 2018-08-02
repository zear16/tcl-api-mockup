const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const port = process.env.PORT || 3000;

// Config middleware

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.all('/api/login_mobile', (req, res) => {
    //console.log(req.body.email);
    //console.log(req.body.password);
    res.status(200).send({});
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
};
