const PubSub = require("../helpers/pub_sub");

const CountrySelect = function(){
    
}

CountrySelect.prototype.bindEvents = function(){
    const countriesDropDown = document.querySelector("#countries");
    
    PubSub.subscribe("Countries:country-data", (event) => {
        const countryData = event.detail;
        this.populateCountriesDropdown(countryData, countriesDropDown);
    })

    countriesDropDown.addEventListener("change", (event) => {
        const countryId = event.target.value;
        PubSub.publish("CountrySelect:country-id", countryId);
    })

    
}

CountrySelect.prototype.populateCountriesDropdown = function(countryData, countriesDropDown){
    countryData.forEach((country, index) => {
    const countryItem = document.createElement('option');
    countryItem.value = index;
    countryItem.textContent = country.name;
    countriesDropDown.appendChild(countryItem);
    });
    
}

module.exports = CountrySelect;