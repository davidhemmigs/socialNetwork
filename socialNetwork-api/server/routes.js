const router = require('express').Router();

const exampleRouter = require('./api/controllers/example/routes');
const userRouter = require('./api/controllers/user/route');

router.use('/example', exampleRouter);
router.use('/user', userRouter);


module.exports = router