const fs = require('node:fs');

const content = 'Some content!';

fs.writeFile('test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("sucessfully written!");
    }
});
