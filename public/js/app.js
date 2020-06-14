const fetch = require('node-fetch');

const url = 'http://api.weatherstack.com/current?access_key=d8a59a2ddf42a084b86733e73c8f43a3&query=New%20York';
fetch(url).then((respone) => {
    respone.json().then((data) => {
        console.log(data)
    });
})