const router = require('express').Router();

const exampleRouter = require('./api/controllers/example/routes');

router.use('/example', exampleRouter);

module.exports = router