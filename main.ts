#! /usr/bin/env node

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; // Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
         {
            name:"pin",
            message:"enter your pin",
            type:"number",
         }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!")

  let operationAns = await inquirer.prompt(
        [
             {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdrow", "check balance"]
             }
        ]
    );

    console.log(operationAns)

if(operationAns.operation === "withdrow"){
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number",
            }
        ]
    );

        myBalance -= amountAns.amount;

        console.log("you are remaining balance is :" + myBalance)

        
}else if (operationAns.operation === "check balance"){
    console.log("your balance is:" + myBalance)
}

} 

else {
    console.log("incorrect pin number")
} 


