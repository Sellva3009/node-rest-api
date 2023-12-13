const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('This is from user route');
})

module.exports = router;

