// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
  renderLicenseBadge,
  renderLicenseText,
} = require("./Develop/utils/generateBadges");
// TODO: Create an array of questions for user input
const questions = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  github,
  email,
}) =>
  `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}

## Questions
-   https://github.com/${github}
-   Email:${email}`;

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter your design name.",
      name: "title",
    },
    {
      type: "input",
      message: "Please give a brief description.",
      name: " description",
    },
    {
      type: "input",
      message: "How to install.",
      name: "installation",
    },
    {
      type: "input",
      message: "How to use this application.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please provide feedback.",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please report any issues.",
      name: "tests",
    },
    {
      type: "input",
      message: "Please provide a license name.",
      name: "license",
      choices: ["MIT", "BSD", "NONE", "MOZILLA"],
    },
    {
      type: "input",
      message: "Developers Github Link.",
      name: "github",
    },
    {
      type: "input",
      message: "Contact the develoers at email.",
      name: "email",
    },
  ])

  .then(
    (data) => (data.badge = renderLicenseBadge(data.license)),
    (data.licenseText = renderLicenseText(data.license)),
    fs.writeFile("README-DEMO.md", questions(data), (err) => {
      err ? console.log(err) : console.log("Great Job!");
    })
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
