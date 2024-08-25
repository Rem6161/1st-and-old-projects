//add the express dependency to the file
const express = require("express");
//add a variable to call express
const app = express();
//add the body-parser dependency to the file
const bodyParser = require("body-parser");



//add the path to the route
const authRoutes = require("./src/routes/auth_routes");

//use express to call and use the body-parser dependency
app.use(bodyParser.json());

//use express to call and use the auth_routes
app.use(authRoutes);

//analyse if the port is on 3000, then return the answer
app.listen(3000, () => {
    console.log('the app is running on the port 3000');
});
