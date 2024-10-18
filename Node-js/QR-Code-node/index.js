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

let url;

import fs from 'node:fs';

fs.readFile('./URL.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    url = data;
});


import inquirer from 'inquirer';

inquirer
    .prompt([
        console.log(url)
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log("Data Sucessfully Imported From Text File.")
        }
    });

// var qr = require('qr-image');

// import qr from 'qr-image';

// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

import qr from 'qr-image';
import { createWriteStream } from 'fs';

// Generate QR code and write it to a file
const qr_svg = qr.image("midhun777.vercel.app", { type: 'png' });
qr_svg.pipe(createWriteStream('i_love_qr.png'));

// Generate QR code and return it as an SVG string
const svg_string = qr.imageSync('I love QR!', { type: 'png' });

console.log('QR code generated and saved as i_love_qr.png');

