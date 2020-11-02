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
        choices: ['MIT','Apache 2.0','Mozilla 2.0','Common Development and Distribution License'],
        name: 'license'
    }
  ])
  .then((data) => {
    
    let chosenLicense;
    if(data.license = 'MIT') {
        chosenLicense = 'mit';
    } else if(data.license = 'Apache 2.0'){
        chosenLicense = '';
    } else if(data.license = 'Mozilla 2.0'){
        chosenLicense = '';
    } else if(data.license = 'Common Development and Distribution License'){
        chosenLicense = '';
    }

    const readmeTemplate = `
#${data.title}

#Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

##Description
    
    ${data.description}

##Installation

    ${data.instructions}
    [${data.title}](${data.link})

##Usage

    ${data.usage}

##Contributing

    ${data.contribution}

##Tests

    ${data.test}
    [${data.title} Test Link](${data.testLink})

##License

    ${chosenLicense}
    
##Questions
        
    For any questions please contact me at: [Email](mailto:${data.email})
    Or visit my GitHub here: [GitHub](https://github.com/${data.gitHub})
        `

    fs.writeFile("README.md", readmeTemplate, "utf8", (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    
  });

  