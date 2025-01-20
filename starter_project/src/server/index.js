// starter_project/src/server/index.js
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env

const fetch = require("node-fetch").default;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Simple GET route
app.get("/", function (req, res) {
 res.send(
  "This is the server API page, you may access its services via the client app."
 );
});

// POST route for MeaningCloud
app.post("/api", async function (req, res) {
 try {
  const userUrl = req.body.url; // The URL sent by the client
  const apiKey = process.env.API_KEY;
  console.log("Using API key:", apiKey); // For debugging only

  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

  // Construct the request URL for MeaningCloud
  // We are specifying the 'url' param and language='en' as example
  const apiUrl = `${baseURL}?key=${apiKey}&url=${userUrl}&lang=en`;

  // Make POST request to the MeaningCloud API
  const response = await fetch(apiUrl, { method: "POST" });
  const data = await response.json();

  console.log("MeaningCloud API response:", data);
  // Send the entire response (or a subset) back to the client
  res.send(data);
 } catch (error) {
  console.error("Error in /api POST route:", error);
  res.status(500).send({ error: "Something went wrong on the server." });
 }
});

// Designates what port the app will listen to
app.listen(8000, function () {
 console.log("Example app listening on port 8000!");
});
