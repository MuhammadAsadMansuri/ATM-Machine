#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; 
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Please Enter Your Pin Code",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Congratulations !! You Have Entered Correct Pin Code !!!");

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]
)

if (operationAns.operation === "withdraw") {

let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]
)

if (amountAns.amount > myBalance) {
    console.log("Sorry! Insufficient Balance");
    }

    else {
        myBalance -= amountAns.amount;
        console.log("Congratulations !! Please Take Your Cash")
        console.log("Remaining Balance is: " + myBalance);

    } 
}

 else if (operationAns.operation === "check balance")
    {
    console.log("Your Balance is: " + myBalance);
}
}
else { 
    console.log("Oops!! You  Have Entered Wrong Pin Code")
}