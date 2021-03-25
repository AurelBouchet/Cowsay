
let cowsay = require("cowsay");
const perso = require('./information.js');

console.log(cowsay.say({
    text : "I'm " + perso.name + "from the campus" + perso.campus + ", and I'm fed up with this cow...",
    e : "oO",
    T : "U "
}));