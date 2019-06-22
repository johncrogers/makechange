module.exports = (amount, coinOptions = []) => {
  const highToLow = require("../highToLow");
  const calculateRequiredCoins = require("../calculateRequiredCoins");

  const result = coinOptions
    .sort(highToLow)
    .reduce(calculateRequiredCoins, { amount });

  if (result.leftovers) {
    throw new Error(
      "The given amount could not be properly broken down with the coin options."
    );
  }

  return result;
};
