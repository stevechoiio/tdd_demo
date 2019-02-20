const repeatedChar = string => {
  let answer = "";
  const helper = string => {
    let i = 1;
    while (string[0] === string[i]) {
      i++;
    }
    answer += string[0] + i;

    if (string.substring(i)) {
      helper(string.substring(i));
    }
  };
  helper(string);

  return answer;
};

describe("repeated character", () => {
  test("one letter", () => {
    expect(repeatedChar("a")).toEqual("a1");
  });
  test("multiple letters", () => {
    expect(repeatedChar("aabbb")).toEqual("a2b3");
  });
  test("multiple letters with alternation", () => {
    expect(repeatedChar("aabbbaa")).toEqual("a2b3a2");
  });
});
