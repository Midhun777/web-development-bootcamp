import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
    .prompt([{
        message: "Type your URL",
        name: "URL"
    }])
    .then((answers) => {
        const url = answers.URL;
        console.log(url);

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log("Data sucessfully imported from text file and generated qr-code.")
        }
    });