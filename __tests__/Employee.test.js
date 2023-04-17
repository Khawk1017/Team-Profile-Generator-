const Employee = require("../lib/Employee");

test("Can instantiate Employee arguments", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguements", () => {
    const name = "Kameron";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguements", () => {
    const testValue = 100;
    const e = new Employee("Ham", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguements", () => {
    const testValue = "test@test.com";
    const e = new Employee("Ham", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Kameron";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId()", () => {
    const testValue = 13;
    const e = new Employee("Ham", testValue);
    expect(e.getId()).toBe(testValue);
});

test("can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Ham", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

