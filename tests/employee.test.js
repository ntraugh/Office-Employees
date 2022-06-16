// bringing in employee class to test
const Employee = require("../lib/employee.js")

describe("Employee", () => {

    it("should create an employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
      
})









