var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function (req, res, next) {
    res.json("Hello world");
});

router.post('/hello', function (req, res, next) {
    console.log("Received data "+typeof req.body);
    var data = req.body;
    console.log(data);

    res.json(`Data sent: `+data.Data+" | Server response:" +(data.Data == "Traps are gay" ? 'Agreed' : 'Disagreed') );
});
module.exports = router;
