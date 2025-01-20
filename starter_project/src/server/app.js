// src/server/app.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
 res.send(
  "This is the server API page, you may access its services via the client app."
 );
});

app.post("/api", async (req, res) => {
 try {
  const userUrl = req.body.url;
  const apiKey = process.env.API_KEY;
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
  const apiUrl = `${baseURL}?key=${apiKey}&url=${userUrl}&lang=en`;

  const response = await fetch(apiUrl, { method: "POST" });
  const data = await response.json();
  res.send(data);
 } catch (error) {
  console.error("Error in /api POST route:", error);
  res.status(500).send({ error: "Something went wrong on the server." });
 }
});

module.exports = app; // Export the express 'app' (not listening yet)
