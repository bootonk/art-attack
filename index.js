require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const fetchWeather = function () {
  const api_key = process.env.WEATHER_API;
  const weather_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=V9A5C4&aqi=no`;

  return axios.get(weather_url).then((response) => {
    return response.data.current.temp_c;
  });
};

app.get("/", (req, res) => {
  fetchWeather().then((response) => {
    res.render("weather", { degrees: response });
  });
});

app.listen(PORT, () => {
  console.log(`Starting server at ${PORT}`);
});
