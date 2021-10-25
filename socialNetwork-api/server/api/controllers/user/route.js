const express = require('express');

const controller = require('./controller');

module.exports = express
    .Router()
    .get('/',
        (req, res) => {
            controller
                .list()
                .then((users) => {
                    res.status(200).json(users)
                })
        })