
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const katarina =  new Thief("Katarina",2508,112,27)
const Ryze = new Mage(60,"Ryze",570,55,21)
const Garen = new Warrior(27,"atk","Garen",616,57,32)

console.log(katarina.atack(Garen))
console.log(Ryze.heal(Garen))
console.log(Garen.chancePosition())
console.log(katarina.atack(Garen))
console.log(Ryze.atack(katarina))
console.log(Garen.atack(katarina))
