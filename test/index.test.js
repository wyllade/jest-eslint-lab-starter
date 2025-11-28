const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require("../index");

describe("capitalizeWords", () => {
  test("capitalizes each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("handles extra spaces", () => {
    expect(capitalizeWords("  hello   world  ")).toBe("Hello World");
  });

  test("returns empty string for non-string input", () => {
    expect(capitalizeWords(123)).toBe("");
  });
});

describe("filterActiveUsers", () => {
  test("returns only active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true },
    ]);
  });

  test("returns empty array for invalid input", () => {
    expect(filterActiveUsers(null)).toEqual([]);
  });
});

describe("logAction", () => {
  test("returns message with username and action", () => {
    const result = logAction("login", "Alice");
    expect(result).toMatch(/User Alice performed login at/);
  });
});
