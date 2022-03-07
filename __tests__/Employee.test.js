const Employee = require("../lib/Employee");

test("Creates new employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Accepts name from constructor", () => {
  const name = "Dwight";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Accepts id from constructor", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Accepts email from constructor", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Gets name from getName()", () => {
  const testValue = "Dwight";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Gets id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email from getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Dwight", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
