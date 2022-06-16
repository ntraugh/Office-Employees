const Intern = require("../lib/intern.js")

describe("Intern", () => {
    it("should set up their school", () => {
        const testSchool = "UNC Charlotte"
        const employee = new Intern("Nate", 1, "ntraugh@yahoo.com", testSchool)
        expect(employee.school).toBe(testSchool)
    })
    it("should use the newPosition function to get the position", () => {
        const testPosition = "Intern"
        const employee = new Intern("Nate", 1, "ntraugh@yahoo.com", testPosition)
        expect(employee.newPosition()).toBe(testPosition)
    })
    it ("should use the newSchool function correctly", () => {
        const newSchool = "ntraugh"
        const employee = new Intern("Nate", 1, "ntraugh@yahoo.com", newSchool)
        expect(employee.newSchool()).toBe(newSchool) 
    })
})