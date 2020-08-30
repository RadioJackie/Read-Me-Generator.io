const inquirer = require("inquirer");
const fs = require("fs");
const utilities = require("./utilities/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: "RadioJackie"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        default: "ReadME Generator"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description for the project: ",
        default: "For this project we were supposed to create a command-line application that generates a README.md from a user's input. When you type in the command node index.js it will prompt you through a series of questions."
    },
    {
        type: "input",
        name: "license",
        message: "Enter information about the applications licensing: ",
        default: "Information here"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how to install the application: ",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe how to use any included tests for the application. If there are none, leave this blank: ",
        default: "npm run test"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how the application is used: ",
        default: "Type node index.js then answer the questions to make the ReadME."
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe how other users may contribute to the application: ",
        default: "There was only one contributer."
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { return console.log(err); }
        else {
            console.log("File successfully created!");
        }
    })
}

function init() {
    inquirer.prompt(questions).then(answers => {
            writeToFile("newREADME.md", utilities(answers));
    })
}

init();
