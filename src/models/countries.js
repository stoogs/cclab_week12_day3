const Request = require("../helpers/request");
const PubSub = require("../helpers/pub_sub");

const Countries = function(){
    this.countries = null;
}

Countries.prototype.bindEvents = function(){
    PubSub.subscribe("CountrySelect:country-id", (event) => {
        const countryId = event.detail;
        const countryDetails = this.countries[countryId];
        console.log(countryDetails);

    }) 
}

Countries.prototype.getData = function(){
    const request = new Request("https://restcountries.eu/rest/v2/all");
    
    request.get((data) => {
        this.countries = data;
        PubSub.publish("Countries:country-data", this.countries);
        // console.log(this.countries);   
    });


}

module.exports = Countries;