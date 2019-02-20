const palindrome = string => {
  let reversed = [...string].reverse().join("");
  console.log(reversed);
  return string === reversed;
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
});
