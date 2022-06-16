const Engineer = require("../lib/engineer.js")

describe("Engineer", () => {
    it("should set up their github", () => {
        const testGit = "ntraugh"
        const employee = new Engineer("Nate", 1, "ntraugh@yahoo.com", testGit)
        expect(employee.github).toBe(testGit)
    })
    it("should use the newPosition function to get the position", () => {
        const testPosition = "Engineer"
        const employee = new Engineer("Nate", 1, "ntraugh@yahoo.com", testPosition)
        expect(employee.newPosition()).toBe(testPosition)
    })
    it ("should use the newGithub function correctly", () => {
        const newGit = "ntraugh"
        const employee = new Engineer("Nate", 1, "ntraugh@yahoo.com", newGit)
        expect(employee.newGithub()).toBe(newGit)
    })
})