import inquirer from 'inquirer';
import { writeFileSync } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What are you calling your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install this?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['Apache 2.0', 'MIT', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are you contributing?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test this?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address?',
  },
];

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeFileSync('SAMPLEREADME.md', markdown);
      console.log('Thank you for using the README bot 9000!');
    });
}

init();

