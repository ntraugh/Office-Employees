// bringing in our employee document
const Employee = require("./employee")

class Engineer extends Employee {
    // creating constructor for engineer since we need to grab their github
    constructor(name, id, email, github) {
        super(name, id, email); 
        this.title = "Engineer";
        this.github = github;
    }
}


module.exports = Engineer;