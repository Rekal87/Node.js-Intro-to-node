//jshint esversion:6

// init superhero dependancy library package
const superheroes = require("superheroes");
const supervillains = require("supervillains");

// store a random superheroname in a variable
var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("Super: " + mySuperHeroName);
console.log("Villain: " + mySuperVillainName);