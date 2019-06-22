module.exports = (amount, coinDenominations = []) => {
  const highToLow = require("../highToLow");
  const calculateRequiredCoins = require("../calculateRequiredCoins");

  const result = coinDenominations
    .sort(highToLow)
    .reduce(calculateRequiredCoins, { amount });

  if (result.leftovers) {
    throw new Error(
      "The given amount could not be properly broken down with the coin options."
    );
  }

  return result;
};
