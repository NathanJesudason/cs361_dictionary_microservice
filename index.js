var fs = require('fs');
var express = require('express');
var app = express();
var request = require('request');
let path = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
var port = process.env.PORT || 3000;

app.get('/:query', function(req, res, next){
   var search = req.params.query;

    request((path+search), function(err, response, body){
        var data = JSON.parse(body);
        res.status(200).send(data[0].meanings[0].definitions[0].definition);
    });


});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });