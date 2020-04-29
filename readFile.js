const fs = require('fs');

fs.readFile('./assets/Readme.md', 'UTF-8', (err, text) => {
    console.log('file contents read');
    console.log(text);
});

fs.readFile('./assets/openSource.jpg', (err, img) => {

    if (err) {
        console.log(`an error has occurred ${err.message}`)
    }
    console.log('file contents read');
    console.log(img);
});

