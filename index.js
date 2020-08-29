const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for the project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how to install the application: "
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how the application is used: "
    },
    {
        type: "input",
        name: "license",
        message: "Enter information about the applications licensing: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe how other users may contribute to the application: "
    },
    {
        type: "input",
        name: "tests",
        message: "Describe how to use any included tests for the application. If there are none, leave this blank: ",
        default: "There are no included tests for this application. Please contact the author if you have any questions or issues."
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("File successfully created!");
        }
    })
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("newREADME.md", answers);
        })
        .catch(error => {
            console.log(error);
        });
}

init();
