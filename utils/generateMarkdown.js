// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

import fs from "fs"

function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return '';
}
if (license === 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "APACHE") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let path = "";
  if (license === "MIT") {
    path = "utils/mit.md";
  }
  }
  if (license === "APACHE") {
    path = "utils/Apache.md";
  }
  const text = fs.readFileSync(path, "utf-8");
  return text;

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  
  return `# ${answers.projectTitle}

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
- Email: ${answers.email}`;
}

export default generateMarkdown;