const { numUniqueEmails } = require("./011-unique-email-address");

describe("Unique Email Addresses", () => {
  test("01", () => {
    expect(
      numUniqueEmails([
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com",
      ])
    ).toEqual(2);
  });

  test("02", () => {
    expect(
      numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
    ).toEqual(3);
  });
});
