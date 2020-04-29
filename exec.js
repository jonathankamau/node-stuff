const cp = require('child_process');

cp.exec('node readStream', (err, data, stderr) => {
    if (err) {
        console.log(stderr)
        throw err;
    }
    console.log(data);
});