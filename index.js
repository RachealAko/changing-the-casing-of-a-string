var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
var capitalizedFirstLetter = firstLetter.toUpperCase();

var restOfLetter = name.slice(1,name.lenght);
var decapitalizedLetters = restOfLetter.toLowerCase();

var capitalizeName = capitalizedFirstLetter + decapitalizedLetters;
alert("Welcome to our space " + capitalizeName);
console.log("Welcome to our space " + capitalizeName);
