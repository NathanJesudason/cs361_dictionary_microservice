var fs = require('fs');
var express = require('express');
var app = express();
var request = require('request');
const axios = require('axios');
let path = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
var port = process.env.PORT || 3000;

app.get('/:query', function(req, res, next){
   var search = req.params.query;

/*     request((path+search), function(err, response, body){
        var data = JSON.parse(body);
        res.send(data[Object.keys(data)[0]].meanings[0].definitions[0].definition);
    }); */


        axios.get(path + search) 
        .then(response => {
        
            console.log(response.data[Object.keys(response.data)[0]].meanings[0].definitions[0].definition);
            res.send(JSON.stringify(response.data[Object.keys(response.data)[0]].meanings[0].definitions[0].definition));

        })
        .catch(error => {
            console.log(error);
        });



});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });