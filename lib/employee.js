// need to create Employee class to use on the rest of the positions

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }
    newName() {
        return this.name;
    }
    newId() {
        return this.id;
    }
    newEmail() {
        return this.email;
    }
    newPosition() {
        return this.title;
    }
}


module.exports = Employee; 