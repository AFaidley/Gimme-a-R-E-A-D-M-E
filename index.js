// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const userQuestions = [
    {
        type: 'input',
        message: 'What is the title/name of your application/project?',
        name: 'name'
     },
     {
        type: 'input',
        message: 'Please provide a short description for how your project/app functions.',
        name: 'description'
     },{
        type: 'input',
        message: 'What technology did you use? E.g Javascript, CSS, Inquirer etc.',
        name: 'technology'
     },
     {
        type: 'input',
        message: 'Please provide instructions on how to install your project/app.',
        name: 'installation'
     },
     {
        type: 'input',
        message: 'Please provide information on how to use your project/app.',
        name: 'usage'
     },
     {
        type: 'input',
        message: 'Please add any credit you would like to give. E.g Google links, tutorials, documentation etc.',
        name: 'credit'
     },
     {
        type: 'input',
        message: 'Please provide instructions on how to test your project/app.',
        name: 'test'
     },
     {
        type: 'list',
        message: 'Which of the following licenses would you like to use for your project/app?',
        name: 'license',
        choices: ['MIT','Apache-2.0','ISC','Unlicense']
     },
     {
        type: 'input',
        message: 'Please add your email address.',
        name: 'contact'
     },
     {
        type: 'input',
        message: 'Please provide your Github username.',
        name: 'github'
     },
];

// TODO: Create a function to write README file
function writeToFile(README.md, data) {
   fs.writeFile(`README.md`, `${generateMarkdown(data)}`, (err) =>
   err ? console.error(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
function init() {
   inquirer
   .prompt(userQuestions)
   .then((data) => {
     console.log(data);
     writeToFile('README', data);
   })
}

// Function call to initialize app
init();
