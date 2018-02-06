$(document).ready(function(){

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var cities = ["kabul", "Tirane", "Algiers", "Andorra la Vella", "Luanda", "saint johns", "buenos aires", "yerevan", "canberra", "vienna", "baku", "nassau", "manamo", "bridgetown", "minsk", "brussels",  "belmopan", "porto novo", "thimphu", "la paz", "sarajevo", "gaborone", "brussels" ];

// to get a random number between 0 and number of cities (arrays)
var randomCity = Math.floor(Math.random() * cities.length);

console.log(randomCity);

// logs the randomly generated city
correctAnser = cities[randomCity];

console.log(correctAnswer);



});
