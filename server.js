//  dependencies, packages and port for functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node we are creating a express server 
var app = express();
var PORT = process.env.PORT || 3000;

// bodyParser makes it possible for our server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 

app.use(express.static("./app/public"));

require("./app/routing/appRoutes")(app);
require("./app/routing/htmlRoutes")(app);






app.listen(port, () => console.log("listening on port %s", port));