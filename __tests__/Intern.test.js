const Intern = require("../lib/Intern");


test("getRole should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Ham", 1, "test@test.com", "School");
    expect(e.getRole()).toBe(testValue);
});

test("can get school name via getSchool()", () => {
    const testValue = "School of coding";
    const intern = new Intern("Ham", 1, "test@test.com", testValue);
    expect(intern.getSchool()).toBe(testValue);
});

test("can getRole() should return Intern that is not equal to Employee", () => {
    const intern = new Intern("Ham", 1, "test@test.com", "School of coding");
    expect(intern.getRole()).not.toBe("Employee");
});

test("can get name via getName()", () => {
    const testValue = "Ham";
    const intern = new Intern(testValue, 1, "test@test.com", "School of coding");
    expect(intern.getName()).toBe(testValue);

});

test("can get ID via getId()", () => {
    const testValue = 1;
    const intern = new Intern("Ham", testValue, "test@test.com", "School of Coding");
    expect(intern.getId()).toBe(testValue);
});