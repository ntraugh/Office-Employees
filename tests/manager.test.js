const Manager = require("../lib/manager.js")

describe("Manager", () => {
    it("should set up their office number", () => {
        const testOffice = "1"
        const employee = new Manager("Nate", 1, "ntraugh@yahoo.com", testOffice)
        expect(employee.office).toBe(testOffice)
    })
    it("should use the newPosition function to get the position", () => {
        const testPosition = "Manager"
        const employee = new Manager("Nate", 1, "ntraugh@yahoo.com", testPosition)
        expect(employee.newPosition()).toBe(testPosition)
    })
    // removed the school test since we don't need to test for a third component with the manager
})