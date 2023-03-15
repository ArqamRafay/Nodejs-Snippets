let express = require('express'),
    router = express.Router();


router.use('/cache', require('./cache.route'));
router.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.',
    });
});

module.exports = router;