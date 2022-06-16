const fs = require("fs")
const inquirer = require("inquirer")
const generateHTML = require("./utils/generateHTML.js")


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


// creating the function to write the html to the output folder
function writeToFile(fileName, data){
    fs.writeFile(fileName, generateHTML(data), function(err) {
        if (err){
            return console.log(err)
        }
    })
}

// creating the function to initialize the prompt
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./output/index.html", data)
    });
}

init()