const express = require("express");
const routes = require("./controllers");
const app = express();
const cors = require ("cors")//REMOVE BEFORE FINAL DEPLOY
const PORT = process.env.PORT || 3001;
var db = require("./models");

// Define middleware here
app.use(cors())//REMOVE BEFORE FINAL DEPLOY
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ 
  // force: true 
}).then(() => {
  var run = require('./scripts/seedDB');

  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
