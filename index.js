const fs = require("fs")
const inquirer = require("inquirer")


// checking to see if the user actually input anything into the question, will run this with every question
const checkInput = function (value) {
    if (value != "") {
        return true;
    } else {
        return "Please enter some input."
    }
}

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employees name?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "Email",
        message: "What is the employees email?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "id",
        message: "What is the employees ID?",
        validate: checkInput
    }, 
    {
        type: "list",
        name: "position",
        message: "What is the employees position?",
        choices: [
            "Manager", 
            "Engineer",
            "Intern"
        ]
    }, 
]

// creating the function to initialize the prompt
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
    });
}

init()