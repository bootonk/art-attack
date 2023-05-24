require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");

const fetchWeather = function (callback) {
  const api_key = process.env.WEATHER_API;
  const weather_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=V9A5C4&aqi=no`;

  axios.get(weather_url).then((response) => {
    return console.log(response);
  });
};

fetchWeather();

app.get("/", (req, res) => {
  res.render("weather");
});

app.listen(PORT, () => {
  console.log(`Starting server at ${PORT}`);
});
