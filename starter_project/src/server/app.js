/* =========================================
 * src/server/server.js
 * ========================================= */
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the compiled dist folder in production
app.use(express.static("dist"));

// Global object (optional) to store the final trip data
let projectData = {};

// Retrieve API credentials from .env
const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;
const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
const PIXABAY_KEY = process.env.PIXABAY_KEY;

/* 
   Simple test endpoint (GET)
   - For verifying server is running
*/
app.get("/test", (req, res) => {
 res.send({ message: "Test endpoint is working!" });
});

/* 
   Main endpoint: POST /addTrip
   Expects { city, date } from client.
*/
app.post("/addTrip", async (req, res) => {
 try {
  const { city, date } = req.body;

  if (!city || !date) {
   return res.status(400).json({ error: "Please provide city and date." });
  }

  // 1) Geonames: get lat/lon/country
  const geoRes = await fetch(
   `http://api.geonames.org/searchJSON?maxRows=1&q=${encodeURIComponent(
    city
   )}&username=${GEONAMES_USERNAME}`
  );
  const geoData = await geoRes.json();
  if (!geoData.geonames || geoData.geonames.length === 0) {
   return res.status(404).json({ error: "Location not found in Geonames API" });
  }

  const { lat, lng, countryName } = geoData.geonames[0];

  // 2) Calculate countdown
  const today = new Date();
  const departureDate = new Date(date);
  const diffTime = departureDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 3) Weatherbit: if trip is within 7 days, use current endpoint; else forecast
  let weatherURL = "";
  if (diffDays <= 7 && diffDays >= 0) {
   weatherURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${WEATHERBIT_KEY}`;
  } else {
   weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${WEATHERBIT_KEY}`;
  }

  const weatherRes = await fetch(weatherURL);
  const weatherData = await weatherRes.json();

  let weatherDescription = "";
  let tempHigh = "";
  let tempLow = "";

  // If forecast => weatherData.data is an array
  // If current => weatherData.data is an array of length 1
  if (weatherData && weatherData.data && weatherData.data.length > 0) {
   // We'll just use the first day's data as an example
   const dayWeather = weatherData.data[0];
   weatherDescription = dayWeather.weather.description;
   tempHigh = dayWeather.high_temp || dayWeather.temp;
   tempLow = dayWeather.low_temp || dayWeather.temp;
  }

  // 4) Pixabay: image for city fallback to country
  const pixCityURL = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(
   city
  )}+travel&image_type=photo`;
  let pixabayRes = await fetch(pixCityURL);
  let pixabayData = await pixabayRes.json();

  let imageURL = "";
  if (pixabayData.hits && pixabayData.hits.length > 0) {
   imageURL = pixabayData.hits[0].webformatURL;
  } else {
   // fallback to country
   const pixCountryURL = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(
    countryName
   )}+travel&image_type=photo`;
   pixabayRes = await fetch(pixCountryURL);
   pixabayData = await pixabayRes.json();
   if (pixabayData.hits && pixabayData.hits.length > 0) {
    imageURL = pixabayData.hits[0].webformatURL;
   } else {
    // fallback image if nothing found
    imageURL = "https://via.placeholder.com/600x400?text=No+Image+Found";
   }
  }

  // Combine data
  projectData = {
   city,
   country: countryName,
   departureDate: date,
   countdown: diffDays,
   weather: {
    description: weatherDescription,
    high: tempHigh,
    low: tempLow
   },
   image: imageURL
  };

  // Return the combined data
  return res.status(200).json(projectData);
 } catch (error) {
  console.error("Error in POST /addTrip:", error);
  return res.status(500).json({ error: "Server error" });
 }
});


// Export for testing if needed
module.exports = app;
