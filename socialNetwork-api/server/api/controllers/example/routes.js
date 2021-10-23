const express = require('express');

const controller = require('./controller');

module.exports = express
    .Router()
    .get('/',
        (req, res) => {
            controller
                .list()
                .then((examples) => {
                    res.status(200).json(examples)
                })
        })