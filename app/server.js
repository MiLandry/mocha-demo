var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.get("/randomCountry", function (req, res) {
    res.send('foo');
})

console.log('go here');
console.log('http://localhost:3000/rgbToHex?red=111&green=33&blue=44');
console.log('or here');
console.log('http://localhost:3000/randomCountry');


app.listen(3000);