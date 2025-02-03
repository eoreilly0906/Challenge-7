import inquirer from 'inquirer';
import { writeFileSync } from 'fs';

inquirer.prompt([
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What commands should be run for tests?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
])
.then((answers) => {
  const licenseBadge = answers.license === 'Apache 2.0' 
    ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    : 'This project is licenced by the Apache 2.0 license';

    if (answers.license === 'None') {
      licenseBadge = 'This project is not licenced';
    }
  const readme = `
# ${answers.projectTitle}

## License
${answers.license}
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;

  writeFileSync('README.md', readme.trim());
  console.log('README.md has been created! Thank you for using the README bot 9000!');
})

