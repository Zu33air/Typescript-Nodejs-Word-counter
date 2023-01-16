#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const userInput: {
  sentenceCount: string;
} = await inquirer.prompt([
  {
    name: "sentenceCount",
    type: "input",
    message: chalk.blue(`Enter your Sentence to count the total words`),
  },
]);

const words = userInput.sentenceCount.trim().split(" ");
console.log(
  chalk.green(`The word count is  :` + chalk.yellow(`${words.length}`))
);
