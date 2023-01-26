const express = require("express");
const scheduledFunctions = require('./scheduledFunctions/cron');
const app = express();
app.set("port", process.env.PORT || 3000);

// ADD CALL to execute your function(s)
scheduledFunctions.initScheduledJobs();

app.listen(app.get("port"), () => {
  console.log("Serveur up ");
});