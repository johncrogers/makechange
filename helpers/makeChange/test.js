const makeChange = require("./index");

describe("makeChange", () => {
  test("Returns the correct results.", () => {
    const coinDenominations = [25, 10, 5, 1];

    expect(makeChange(4.5, coinDenominations)).toEqual({
      "1": 0,
      "5": 0,
      "10": 0,
      "25": 18,
      amount: 4.5,
      leftovers: 0
    });

    expect(makeChange(0.22, coinDenominations)).toEqual({
      "1": 2,
      "5": 0,
      "10": 2,
      "25": 0,
      amount: 0.22,
      leftovers: 0
    });

    expect(makeChange(0.03, coinDenominations)).toEqual({
      "1": 3,
      "5": 0,
      "10": 0,
      "25": 0,
      amount: 0.03,
      leftovers: 0
    });
  });

  test("Returns correct results with unordered coins.", () => {
    const coinDenominations = [25, 6, 10, 5, 1];

    expect(makeChange(0.16, coinDenominations)).toEqual({
      "1": 0,
      "5": 0,
      "6": 1,
      "10": 1,
      "25": 0,
      amount: 0.16,
      leftovers: 0
    });
  });
});
