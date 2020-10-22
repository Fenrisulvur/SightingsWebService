var express = require('express');
var router = express.Router();

router.get('/sighting_data', function (req, res, next) {
    res.json({
      "data":[
        {"Name": "Test", "Sighting": "UFO", "Description": "TEST DESCRIPTION", "Country": "Romania"},
        {"Name": "Test2", "Sighting": "Creature", "Description": "Coochie", "Country": "Germany"},
      ]
    });
});

router.post('/sighting_data', function (req, res, next) {
    console.log("Received data "+typeof req.body);
    var data = req.body;
    console.log(data.Name+" "+data.Sighting+" "+data.Description+" "+data.Country);

    res.json();
});


module.exports = router;
