const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");
// const admin = require("firebase-admin");
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// ROUTES
app.get("/", (req, res) => {
  return res.status(200).send({data: "Hello World!"});
});

exports.app = functions.https.onRequest(app);
