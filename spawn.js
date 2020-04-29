const cp = require('child_process');

const questionApp = cp.spawn('node', ['readlineQuestions.js']);

questionApp.stdin.write('JK \n');
questionApp.stdin.write('None \n');
questionApp.stdin.write('No \n');

questionApp.stdout.on('data', data => {
    console.log(`from the question app: ${data}`);
});

questionApp.stdout.on('close', () => {
    console.log(`questionApp process exited`)
});