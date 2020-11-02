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
    
    ##Installation

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

  