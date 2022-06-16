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
    })
      
})









