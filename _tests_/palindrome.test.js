const palindrome = string => {
  let filteredString = [...string].filter(a => /[a-z]/.test(a));
  let reversed = [...filteredString].reverse().join("");
  return filteredString.join("") === reversed;
};

describe("palindrome", () => {
  test("when it has odd letters", () => {
    const result = palindrome("aba");
    expect(result).toEqual(true);
  });
  test("when it has even letters", () => {
    const result = palindrome("abba");
    expect(result).toEqual(true);
  });
  test("when it has lots of spaces", () => {
    const result = palindrome("ne v    er eve n");
    expect(result).toEqual(true);
  });
});
