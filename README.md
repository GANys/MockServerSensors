# Mock server for Sensors data

This mock server allows mocking sensors data (temperature [7 - 23°C] and humidity [50 - 100%]) depending on season and day hours.
30-days time series are produced hourly. It might be updated in future for more variable and parameters.

Server runs on port 3001 by default.

Routes are :
```
/info
/temperature
/humidity
```

Once installed on local machine, API is reachable at http://localhost:3001/humidity .

## Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Setup the project :

```
npm install
```

Compiles and minifies for production :

```
npm run build
```

Run a local host :

```
npm start
```

By default, the application is deployed on ```localhost:3000``` .

## Built With

* [ExpressJS](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js
* [Node.js](https://nodejs.org/en/) - An open-source, cross-platform, JavaScript runtime environment
* [Moment.jS](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript

## Authors

* **Gilles-Antoine Nys** - *Development* - [Twitter](https://twitter.com/ga_nys)

## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE) file for details.
