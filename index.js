import inquirer from 'inquirer';
import { writeFileSync } from 'fs';

inquirer.prompt([
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
    choices: ['Apache 2.0', 'None'],
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
])
.then((answers) => {
  function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    return '';
  }

  const licenseBadge = renderLicenseBadge(answers.license);
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

  writeFileSync('SAMPLEREADME.md', readme.trim());
  console.log('Thank you for using the README bot 9000!');
})


function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
