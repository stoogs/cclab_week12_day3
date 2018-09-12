Request = function(url){
    this.url = url;
}

Request.prototype.get = function(onComplete){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        if (xhr.status !== 200) {
            return;
        }
        const jsonString = xhr.responseText;
        const data = JSON.parse(jsonString);
        onComplete(data);
    })

    //Sets a GET request to the respective URL
    xhr.open("GET", this.url);
    //Get JSON formatted data back
    xhr.setRequestHeader("Accept", "application/json");
    //Sends the request
    xhr.send();
}

module.exports = Request;