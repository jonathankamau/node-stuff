const collectAnswers = require('./lib/collectAnswers');

const questions = [
    "What is you name? ",
    "Are you married or not? ",
    "Are you employed or not? "
];


const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => 
    console.log(`question answered: ${answer}`)
);

answerEvents.on('complete',answers => {
    console.log('Thank you for your answers. ');
    console.log(answers);
    process.exit(); 
});

answerEvents.on('complete', () => process.exit());

// const ask = (i=0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// };

// ask();

// const answers = [];
// process.stdin.on('data', data => {
//     answers.push(data.toString().trim());

//     if (answers.length < questions.length) {
//         ask(answers.length);
//     }
//     else {
//         process.exit();
//     };
    
// });

// process.on('exit', () => {
//     const [name, status, employment] = answers;
//     console.log(`

//     Thank you for your answers

//     ${name} you are ${employment} and ${status}

//     `);
// });