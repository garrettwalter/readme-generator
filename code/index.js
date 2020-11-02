const inquirer = require('inquirer');
const fs = require('fs');

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
  ])
  .then((data) => {
    
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
    
    ##Questions
        
        For any questions please contact me at: [Email](mailto:${data.email})
        Or visit my GitHub here: [GitHub](https://github.com/${data.gitHub})
        `

    fs.writeFile("README.md", readmeTemplate, "utf8", (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    
  });

  