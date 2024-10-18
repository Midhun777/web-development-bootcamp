// const fs = require('node:fs');

// fs.readFile('d:/ vs code/web development udemy / Node js / test.txt', 'utf8', (err, data) => {
//     if (err) {
//     console.error(err);
//     return;
// }
// console.log(data);
// });

const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});