const calculateRequiredCoins = require("./index");

describe("calculateRequiredCoins", () => {
  test("Calculates the correct number of required coins.", () => {
    expect(calculateRequiredCoins({ amount: 1.1 }, 25)).toEqual({
      amount: 1.1,
      leftovers: 10,
      "25": 4
    });

    expect(calculateRequiredCoins({ amount: 1 }, 25)).toEqual({
      amount: 1,
      leftovers: 0,
      "25": 4
    });

    expect(calculateRequiredCoins({ amount: 0.22 }, 25)).toEqual({
      "25": 0,
      amount: 0.22,
      leftovers: 22
    });
  });

  test("Calculates leftovers as pennies.", () => {
    expect(calculateRequiredCoins({ amount: 1.1 }, 25).leftovers).toEqual(10);
  });
});
