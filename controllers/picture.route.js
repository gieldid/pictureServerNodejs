const express = require("express");
const router = express.Router();
const PythonShell = require('python-shell').PythonShell;

router.get("/", async function (request, response) {
    var options = {
        mode: 'json',
        pythonOptions: ['-u'],
        scriptPath: '/home/pi/Documents/python/',
        args: []
      };
      
      PythonShell.run('cam2rgb.py', options, function (err, results) {
        if (err) 
          throw err;
          console.log('results: %j', results);
          response.json(results[0]);
        // Results is an array consisting of messages collected during execution
        
      });

});


// router.get("/", async function (request, response) {
//     var weightOnScale = await weigthScaleReader.getWeight();
//     console.log("weightonscale; " + weightOnScale);
//     if(weightOnScale === "Failed to connect to rs232 device" || !weightOnScale){
//         response.send("Failed to connect to rs232 device");
//     }else{
//         await weightModel.insertWeight(weightOnScale);
//         let weightData = await weightModel.last();
//         response.json({weight: weightData.weight});
//     }
// });


module.exports = router;