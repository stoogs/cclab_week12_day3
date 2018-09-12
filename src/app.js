const CountrySelect = require("./views/country_select");
const Countries = require("./models/countries");
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  

  const countrySelect = new CountrySelect();
  countrySelect.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();
  

  
});
