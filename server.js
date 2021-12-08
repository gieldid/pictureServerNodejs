const express = require("express"); 
const dotenv = require("dotenv");
const app = express();
dotenv.config();



app.listen(process.env.SERVER_PORT, function () {
console.log("Server listening at: " + process.env.SERVER_PORT)});
//setup the server
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/getColor", require("./controllers/picture.route"));

