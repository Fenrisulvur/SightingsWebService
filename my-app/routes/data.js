var express = require('express');
var router = express.Router();
const fs = require("fs");



router.get('/sighting_data', function (req, res, next) {
  // Read users.json file
  try {
    console.log("Get request received");
    let rawdata = fs.readFileSync('sightingdata.json'); //read raw file
    let parseddata = JSON.parse(rawdata); //parse into JSON
    res.json(parseddata); //send parsed JSON
  } catch (err) {
    console.log(err.message);
  }

});

router.post('/sighting_data', function (req, res, next) {
    try {
      console.log("Received data");
      var data = req.body; //Get the data from the request body
      //console.log(data.Name+" "+data.Sighting+" "+data.Description+" "+data.Country);
      let rawdata = fs.readFileSync('sightingdata.json'); //read raw file
      let parseddata = JSON.parse(rawdata); //parse into JSON
      //push new entry to the JSON "data" array
      parseddata['data'].push({"Name": data.Name, "Sighting": data.Sighting, "Description": data.Description, "Country": data.Country})

      let datastring = JSON.stringify(parseddata); //turn JSON into string
      fs.writeFileSync('sightingdata.json', datastring); //write updated data to file
    } catch (err) {
      console.log(err.message);
    }
    res.json();
});


module.exports = router;
