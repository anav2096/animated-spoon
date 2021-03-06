const Intern = require("../lib/Intern");

test("Accepts school via constructor", () => {
  const testValue = "NYU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Gets school via getSchool()", () => {
  const testValue = "NYU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});