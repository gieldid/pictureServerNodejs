const express = require("express");
const router = express.Router();
const {spawn} = require('child_process');

router.get("/", async function (request, response) {

    var dataToSend;
     // spawn new child process to call the python script
    const python = spawn('python', ['../python/cam2rgb.py']);

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
       });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        response.json(dataToSend)
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