/*
  Using the programming language of your choice, please create a program to solve the
  problem below. In addition, please provide instructions to run the application.
  You’re tasked with creating a program for making change. Your program should take as
  an input the amount of change to make (e.g. 4.50), and it should output the number of
  each coin to dispense so that the fewest possible coins are dispensed. The available
  coins for you to use are quarters (.25), dimes (.10), nickels (.05), and pennies (.01).
  Optional:
  Extend this program so that it will work for any coin denominations (e.g. 6 cent coins).
*/

const { makeChange } = require("./helpers");
const { coinDenominations } = require("./config.json");
const userInput = parseFloat(process.argv[2]);

console.log(makeChange(userInput, coinDenominations));
