const inquirer = require('inquirer');
const fs = require('fs');
// usage information, contribution guidelines, test instructions
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

    ##Contributing

    ##Tests

    ##License
    
    ##Questions
        
        For any questions please contact me at: [Email](mailto:${data.email})
        Or visit my GitHub here: [GitHub](https://github.com/${data.gitHub})
        `

    fs.writeFile("README.md", readmeTemplate, "utf8", (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    
  });

  