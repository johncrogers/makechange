module.exports = (change, currentCoin) => {
  if (typeof change.leftovers !== "number") {
    change.leftovers = Math.trunc(change.amount * 100);
  }

  let requiredCoins = Math.trunc(change.leftovers / currentCoin);

  if (requiredCoins > 0) {
    change[currentCoin] = requiredCoins;
    change.leftovers -= currentCoin * requiredCoins;
  } else {
    change[currentCoin] = 0;
  }

  return change;
};
