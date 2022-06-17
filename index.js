const fs = require("fs")
const inquirer = require("inquirer")
const generateHTML = require("./utils/generateHTML.js")
const Intern = require("./lib/intern.js")
const Engineer = require("./lib/engineer.js")
const Manager = require("./lib/manager.js")


newTeam = []

// checking to see if the user actually input anything into the question, will run this with every question
const checkInput = function (value) {
    if (value != "") {
        return true;
    } else {
        return "Please enter some input."
    }
}

function managerQuestions ()  {
    inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Enter the managers name.",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "managerId",
        message: "What is the managers ID?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "managerOffice",
        message: "What is the managers office number?",
       
    }, 
]).then(data => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
    newTeam.push(manager)


})
}



// creating the function to write the html to the output folder
function writeToFile(fileName, data){
    fs.writeFile(fileName, generateHTML(data), function(err) {
        if (err){
            return console.log(err)
        }
    })
}

managerQuestions(); 
writeToFile("./output/index.html", data);

// creating the function to initialize the prompt
// function init() {
//     inquirer.prompt(questions).then((data) => {
//         writeToFile("./output/index.html", data)
//     });
// }

// init()