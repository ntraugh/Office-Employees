// bringing in employee class to test
const Employee = require("../lib/employee.js")

describe("Employee", () => {

    it("should create an employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
    it("should set the employee's name correctly", () => { 
        // testing to see if the employee name is the expected name
        const name = "Nate"
        const employee = new Employee (name);
        expect(employee.name).toBe(name)
    });
    it("should set the employee's email correctly", () => {
        const newEmail = "ntraugh@yahoo.com"
        const employee = new Employee ("Nate", 1, newEmail)
        expect(employee.email).toBe(newEmail)
    })
    it("should set the employees ID correctly", () => {
        const testId = 5
        const employee = new Employee("Nate", testId)
        expect(employee.id).toBe(testId)
    })
    it("should be able to get the name from the newName function", () => {
        const newName = "Nate"
        const employee = new Employee(newName)
        expect(employee.newName()).toBe(newName)
    })
    it ("should be able to get the ID from the newId function", () => { 
        const id = "5"
        const employee = new Employee("Nate", id)
        expect(employee.newId().toBe(id))
    })
    it("should be able to get the email from the newEmail function", () => {
        const email = "ntraugh@yahoo.com"
        const employee = new Employee("Nate", 1, email)
        expect(employee.newEmail().toBe(email))
    })
    it("should be able to get position from the newPosition function", () => {
        const position = "Employee"
        const employee = new Employee("Nate", 1, "ntraugh@yahoo.com")
        expect(employee.newPosition().toBe(position))
    })
})









