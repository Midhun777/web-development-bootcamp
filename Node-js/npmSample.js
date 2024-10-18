// var generateName = require('sillyname');
// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(sillyName);

// import heroName from "superhero";
// var superName = heroName();
// console.log("I`m " + superName);



// const fs = require('node:fs');

// const content = sillyName;

// fs.writeFile('test.txt', content, err => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("sucessfully written!");
//     }
// });

import superheroes from "superheroes";

const name = superheroes.randomSuperhero();
console.log(name)