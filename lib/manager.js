const Employee = require("./employee")

class Manager extends Employee {
    // creating constructor for manager since we need to grab their office number
    constructor(name, id, email, office) {
        super(name, id, email);
        this.title = "Manager"
        this.office = office
    }
    officeNumber () {
        return this.office
    }
}

module.exports = Manager;