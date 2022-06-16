const Employee = require("./employee")

class Intern extends Employee {
    // creating constructor for intern since we need to grab their school
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
}


module.exports = Intern;