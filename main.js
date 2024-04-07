#! /usr/bin/env node
import inquirer from "inquirer";
const num = Math.floor(Math.random() * 6 + 1);
const result = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess any Number from 1 to 6",
    },]);
if (result.userGuessNumber === num) {
    console.log("You Guess a Right Number.");
}
else {
    console.log("You Guess a Wrong Number.");
}
console.log(num);
