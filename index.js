#! /usr/bin/env node
//friend checker game 
//a game to check if someone is a friend based on there names
import inquirer from "inquirer";
let isFriend = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        message: "Enter your friend name",
    }
]);
if (isFriend.name === "anzila" || isFriend.name === "emaan") {
    console.log(`${isFriend.name} is your friend`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
