const oneAway = (first, second) => {
  for (i = 0; i < first.length + 1; i++) {
    if (first.length === second.length) {
      if (
        first.substring(0, i) + first.substring(i + 1) ===
        second.substring(0, i) + second.substring(i + 1)
      ) {
        return true;
      }
    }
    if (first.length > second.length) {
      if (first.substring(0, i) + first.substring(i + 1) === second) {
        return true;
      }
    } else {
      if (first === second.substring(0, i) + second.substring(i + 1)) {
        return true;
      }
    }
  }
  return false;
};

describe("one away", () => {
  test("equal", () => {
    expect(oneAway("bob", "bob")).toEqual(true);
  });
  test("one away by replacing", () => {
    expect(oneAway("bob", "bbb")).toEqual(true);
  });
  test("one away by adding", () => {
    expect(oneAway("bo", "bob")).toEqual(true);
  });
  test("one away by adding", () => {
    expect(oneAway("ob", "bob")).toEqual(true);
  });
  test("one away by adding", () => {
    expect(oneAway("bb", "bob")).toEqual(true);
  });
  test("one away by adding", () => {
    expect(oneAway("oboooo", "boboooo")).toEqual(true);
  });
  test("one away by adding", () => {
    expect(oneAway("oooooob", "oooooo")).toEqual(true);
  });

  describe("not possible", () => {
    test("2 edits away", () => {
      expect(oneAway("bob", "bobby")).toEqual(false);
    });
    test("one away by adding", () => {
      expect(oneAway("oooooob", "oooooobbbbb")).toEqual(false);
    });
    test("2 replacements away", () => {
      expect(oneAway("bobaa", "bobby")).toEqual(false);
    });
    test("not one away by adding", () => {
      expect(oneAway("obb", "bob")).toEqual(false);
    });
    test("2 edits away", () => {
      expect(oneAway("bob", "bobby")).toEqual(false);
    });
    test("2 replacements away", () => {
      expect(oneAway("aobaa", "bobby")).toEqual(false);
    });
    test("not one away by adding", () => {
      expect(oneAway("obbbbb", "bob")).toEqual(false);
    });
  });
});
