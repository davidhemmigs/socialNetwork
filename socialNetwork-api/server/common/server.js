const express = require('express');
const coockieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('../routes');

const app = express();

const corsOptions = {
    // colocar opciones de cors como
    // origin
};

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ limit: '50mb' }));

app.use(coockieParser());

app.use(cors(corsOptions));

app.use('/', router);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;