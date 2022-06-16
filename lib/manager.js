const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.title = "Manager"
        this.office = office
    }
}

module.exports = Manager;