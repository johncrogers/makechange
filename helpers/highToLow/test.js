const highToLow = require("./index");

describe("highToLow", () => {
  test("Returns the correct sort value.", () => {
    expect(highToLow(1, 2)).toEqual(1);
    expect(highToLow(2, 2)).toEqual(0);
    expect(highToLow(2, 1)).toEqual(-1);
  });
});
