const router = require('express').Router();
const apiRouter = require('./apiroute');

router.use('/api', apiRouter);

module.exports = router;