import { Validate, endLoop, checkOperator, evaluate } from "./functions.js";
import inquirer from "inquirer";

let loop = true;
let numbArr = [];

async function askPrompt() {
    console.log("----Welcome to my Reverse Polish Notion Calculator---- \n 1) To begin  you must enter in at least 2 numbers before an operator. \n 2) When entering in multiple numbers be sure to seperate them by a space.\n 3) Once you have your numbers then you can add an operator(s) \n 4) Be sure to seperate the operators by a space as well \n 5) Once you have entered in something hit your enter key to see calculation(s). \n 6) Lastly you can enter in q or push CMD + D to quit");

    do {
        const { value } = await inquirer.prompt({
            name: "value",
            type: "input",
            message: ">",
            validate: (answer) => {
                return Validate(answer)
            }
        })
        let charArr = value.split(" ");
        for (let i = 0; i < charArr.length; i++) {
            if (endLoop(value)) {
                loop = false;
                break;
            } else if (checkOperator(charArr[i])) {
                if (numbArr.length < 1) {
                    console.log("Please enter a number first");
                } else if (numbArr.length == 1) {
                    console.log("Only one number in the array, Add another number before adding an operation")
                } else {
                    let obj = evaluate(charArr[i], numbArr)
                    numbArr = obj.numbArr;
                    numbArr.push(obj.sum);
                }
            } else {
                numbArr.push(Number(charArr[i]))
            }
        }

        console.log("Numbers in Stack: ", numbArr)


    } while (loop);
    console.log(`The total of your equation is: ${numbArr[0]}`)
    return numbArr[0];
}

askPrompt();