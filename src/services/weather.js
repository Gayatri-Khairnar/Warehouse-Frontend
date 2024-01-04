import axios from "axios";
var weather = axios.get('https://api.weather.gov/openapi.json');
console.log(weather);