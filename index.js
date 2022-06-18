const fs = require("fs")
const inquirer = require("inquirer")
const generateHTML = require("./utils/generateHTML.js")
const Intern = require("./lib/intern.js")
const Engineer = require("./lib/engineer.js")
const Manager = require("./lib/manager.js")
// bringing in the makeTeam function from our generateHTML file
const makeTeam = require("./utils/generateHTML.js")
// had to bring in path and use writeFileSync in order to get the output onto the new index.html
const path = require("path")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const newPath = path.join(OUTPUT_DIR, "index.html")



newTeam = []

// checking to see if the user actually input anything into the question, will run this with every question
const checkInput = function (value) {
    if (value != "") {
        return true;
    } else {
        return "Please enter some input."
    }
}

// creating the question that the user comes back to after they selected the worker
function rerunQuestion () {
    inquirer.prompt([{
        type: "list",
        message: "Add another employee to the office?",
        name: "addEmployee",
        choices: [
            "Engineer",
            "Intern",
            "My team is complete"
        ]
        // creating a switch case to determine which input the user selected and running that block of code
    }]).then(function(input){
        switch(input.addEmployee){
            case "Engineer": 
            // need to create an engineer questions prompt, as well as intern
                engineerQuestions()
                break;
            case "Intern":
                internQuestions()
                break;
            default:
                // if they choose the option that they are done we want to print the html file
                createNewHTML();

        }
    })

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
    rerunQuestion(); 
    // console.log(newTeam)

    })
}

function engineerQuestions ()  {
    inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineers name.",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineers ID?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "engineerUser",
        message: "What is the engineer GitHub username??",
       
    }, 


    ]).then(data => {
    const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerUser)
    newTeam.push(engineer)
    rerunQuestion(); 
    // console.log(newTeam)

    })
}

function internQuestions ()  {
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "Enter the interns name.",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "internEmail",
        message: "What is the interns email?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "internId",
        message: "What is the interns ID?",
        validate: checkInput
    }, 
    {
        type: "input",
        name: "internSchool",
        message: "What is the interns school?",
       
    }, 


    ]).then(data => {
    const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
    newTeam.push(intern)
    rerunQuestion(); 
    // console.log(newTeam)

    })
}




// creating the function to write the html to the output folder
function createNewHTML (){
    fs.writeFileSync(newPath, makeTeam(newTeam), "utf-8")
}

managerQuestions(); 

