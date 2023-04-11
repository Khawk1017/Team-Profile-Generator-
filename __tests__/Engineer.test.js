const Engineer = require("../lib/Engineer");

test("can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Ham", 1, "test@test.com", "GitHubUser");
    expect(e.getGitHub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Ham", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("getGithub() should return the value of the github property", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Ham", 1, "test@test.com", testValue);
  
    expect(e.getGitHub()).toBe(testValue);
  });
  
  