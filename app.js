console.log("Guess a number b/w 1 to 10");
//now variable create
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want: " });
    //PROVIDE CODE
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct");
        break;
    }
    else {
        console.log("Sorry you guess wrong number try again ");
    }
}
