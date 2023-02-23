// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { right } = require('inquirer/lib/utils/readline');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your project Description?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'what is your title :',
      name: 'title',
    },
  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then((answers) => {

     const Markdown = generateMarkdown(answers)

     writeToFile ("readme.md",Markdown )
    






     })
}

// Function call to initialize app
init();
