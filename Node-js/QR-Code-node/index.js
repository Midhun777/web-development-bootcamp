import fs from 'node:fs';
import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';

let url;

fs.readFile('./URL.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    url = data;
});

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

const qr_svg = qr.image("midhun777.vercel.app", { type: 'png' });
qr_svg.pipe(createWriteStream('i_love_qr.png'));

const svg_string = qr.imageSync('I love QR!', { type: 'png' });

console.log('QR code generated and saved as i_love_qr.png');

