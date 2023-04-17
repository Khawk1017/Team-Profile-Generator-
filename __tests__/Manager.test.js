const Manager = require("../lib/Manager");

test("can get officeNumber via getOffice()", () => {
    const testValue = 101;
    const manager = new Manager("Ham", 1, "test@test.com", 101);
    expect(manager.getOffice()).toBe(testValue);
});

test("getRole should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager("Ham", 1, 101, "test@test.com");
    expect(manager.getRole()).toBe(testValue);
});

test("get name via getName()", () => {
    const testValue = "Ham";
    const manager = new Manager(testValue, 1, 101, "test@test.com");
    expect(manager.getName()).toBe(testValue);
});

test("can set officeNumber via constructor argument", () => {
    const testValue = 101;
    const manager = new Manager("Ham", 1, "test@test.com", 101);
    expect(manager.officeNumber).toBe(testValue);
  });
  
  test("can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const manager = new Manager("Ham", 1, "test@test.com", 101);
    expect(manager.getEmail()).toBe(testValue);
  });
  
  test("throws an error when no name is provided", () => {
    const cb = () => new Manager("", 1, 101, "test@test.com");
    expect(cb).toThrow(new Error("Please provide a valid name"));
  });
  