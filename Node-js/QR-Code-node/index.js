/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import fs from 'inquirer';

// fs.readFile('./URL.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });


import fs from 'node:fs';

fs.readFile('./URL.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


import inquirer from 'inquirer';

inquirer
    .prompt([
        console.log(data)

    ])
    .then((answers) => {
        console.log(answers)

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log("idk error")
        }
    });