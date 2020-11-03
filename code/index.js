const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your work?',
    },
    {
        type: 'input',
        message: 'Write a description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions (you will put a link to your work next):',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Link to your work (will be printed below instructions):',
        name: 'link',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'add some contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'add test instructions (a link for testing can be entered in next question):',
        name: 'test',
    },
    {
        type: 'input',
        message: 'add test link (will be added below test instructions):',
        name: 'testLink',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What type of license would you like?',
        choices: ['MIT','ISC'],
        name: 'license'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
    },
  ])
  .then((data) => {
    
    let chosenLicense;
    if(data.license = 'MIT') {
        chosenLicense = `Copyright <YEAR> <${data.name}>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        `;
    } else if(data.license = 'ISC'){
        chosenLicense = `Copyright <YEAR> <${data.name}>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.
        
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE 
OR PERFORMANCE OF THIS SOFTWARE.`;
    }

    const readmeTemplate = `
# ${data.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Description
    
${data.description}

## Installation

${data.instructions}
[${data.title}](${data.link})

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}
[${data.title} Test Link](${data.testLink})

## License

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
    
${chosenLicense}
    
## Questions
        
For any questions please contact me at: [Email](mailto:${data.email})
Or visit my GitHub here: [GitHub](https://github.com/${data.gitHub})
        `

    fs.writeFile("README.md", readmeTemplate, "utf8", (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}); 