const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const cors = require("cors");
// add app to use cors
app.use(cors({ origin: true }));

// Link Database
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://romix-api.firebaseio.com",
});
const db = admin.firestore();

// ROUTES---------------------------------------

// GET
app.get("/test-data", (req, res) => {
  return res.status(200).send({ data: "Hello World!" });
});

// POST
app.post("/test-data", (req, res) => {
  (async () => {
    try {
      await db.collection("test-data").doc("UID").set({
        title: req.body.title,
        description: req.body.description,
        feeling: req.body.feeling,
      });
      return res.status(200).send("Your Response has been saved");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

exports.app = functions.https.onRequest(app);
