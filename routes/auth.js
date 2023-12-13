const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('This is from auth route');
})

module.exports = router;

