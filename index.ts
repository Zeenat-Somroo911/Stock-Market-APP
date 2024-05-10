#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const developerName = "ZEENAT SOMROO";

async function stockMarket() {
    console.log(chalk.green.bold(`\n Welcome to The  Stock Market by ${developerName}. 

    Before proceeding with your investment, please take a moment to review the rules:
    
    - Invest a minimum of $50000 
    - Invest in one market at a time to ensure focused and effective management.
    - There is a possibility of gaining or losing a random percentage of your investment.\n
    If you agree to these rules, you can proceed further with your investment.\n`));

    let options = await inquirer.prompt([{
        name: "named",
        type: "list",
        message:"Please Select",
        choices: ["Proceed", "Exit"]
    }]);

    if (options.named == "Proceed") {
        console.log(chalk.red.bold(`\n Which Stock Market You Like To Invest Your Money:\n`));

        let stockList = await inquirer.prompt([{
            name: "listed",
            type: "list",
            message: "Please Select",
            choices: ["Google", "MRF", "Microsoft Corporation", "NYSE", "AAPL","TSLA","JNJ","BABA","XOM"],
        }]);

        let stockName = stockList.listed;

        let investor = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: `Insert Your Investment for ${stockName}:`
        }]);

        if (investor.amount >= 50000) {
            let autoPercent = Math.floor(Math.random() * 15000 + 1);
               

            if (autoPercent >= 10000) {
                investor.amount += autoPercent;
                console.log(chalk.green.bold(`\n Congratulations! You've earned a profit of $${autoPercent}.\n Your updated investment amount is $${investor.amount}.\n \n Thank you for investing with us, and we look forward to your future investments in our stock market`));
            } else {
                investor.amount -= autoPercent;
                console.log(chalk.italic.bold(`\n Unfortunately, you've incurred a loss of $${autoPercent}.\n Your remaining investment amount is $${investor.amount}.\n \n We appreciate your participation and hope to see you investing again soon.`));
            }
        } else {
            console.log(chalk.red.italic(`\n Your Investment is too low, Please Invest $50000 or above.`));
        }
    } else if (options.named == "Exit") {
        console.log(chalk.blue.italic.bold(`\n Thank you for your time! We appreciate your interest in investing with us.\n We look forward to your future investments. Until then, have a wonderful journey! `));
    }
}

stockMarket();
