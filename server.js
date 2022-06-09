/////
/// This script has been created in the scope of researches conducted at the Geomatics Unit by Gilles-Antoine NYS and others
/// - Master thesis of Khawla Boumhidi (IAV Hassan II, Rabat, Morocco) on a Dynamizer Extension for CityJSON
/////
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const moment = require("moment");

const API_PORT = 3001;

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.get("/info", (req, res) => {
  // Simple endpoint giving basic information on the API
  res
    .status(200)
    .json({description: "A simple API to generate humidity and temperature data", functions: "/humidity, /temperature"});
});

app.get("/humidity", (req, res) => {
  // Creates a JSON Array in which objects are couple of timestamp/humidity (between 50 and 100 depending on the date)
  var current,
    data = {},
    humidity = [];

  for (var el in Array.from({ length: 30 * 24 }, (_, i) => i + 1)) {
    current = moment().subtract(1 * el, "h");
    data =
      75 +
      20 * Math.sin(current / (1000 * 60 * 60) / (Math.PI * 2)) +
      5 * (Math.random() * 2 - 1);
    humidity.push({ time: current, humidity: Number(data.toFixed(2)) });
  }

  res.status(200).json(humidity);
});

app.get("/temperature", (req, res) => {
  // Creates a JSON Array in which objects are couple of timestamp/temperature (between 7 and 23 depending on the date)
  var current,
    data = {},
    temperature = [];

  for (var el in Array.from({ length: 30 * 24 }, (_, i) => i + 1)) {
    current = moment().subtract(1 * el, "h");
    data =
      15 +
      5 *
        Math.sin(
          -(Math.PI / 2) + current / (1000 * 60 * 60 * 24 * 31) / (Math.PI * 2)
        ) +
      2 * Math.sin(current / (1000 * 60 * 60) / (Math.PI * 2)) +
      1 * (Math.random() * 2 - 1);
    temperature.push({ time: current, temperature: Number(data.toFixed(2)) });
  }

  res.status(200).json(temperature);
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
