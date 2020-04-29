const fs = require('fs');
const colorData = require('./assets/colors.json');

colorData.colors.forEach(c => {
    fs.appendFile('./storage-files/colors.md', `${c.color}: ${c.code.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});