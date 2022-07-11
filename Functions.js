const Validate = (answr) => {

    let answrArr = answr.split(" ");
    let accessArray = [];

    if (answr == '' || answr == " ") {
        console.log("Spaces are not allowed")
        accessArray.push(false)
    }

    for (let i = 0; i < answrArr.length; i++) {

        let tempArr = answrArr[i].split("");

        for (let j = 0; j < tempArr.length; j++) {

            if (tempArr[j] == ".") {

                if (tempArr.indexOf(".") === tempArr.length - 1) {
                    console.log("Cannot enter in just a .");
                    accessArray.push(false);
                }
            } else if (notValidNumber(tempArr[j])) {
                console.log("Letters or Special Characters are not allowed with the exception of q")
                accessArray.push(false);

            } else if (checkOperator(tempArr[j])) {

                if (tempArr.length > 1) {
                    console.log("You entered in an operator next to a number")
                    accessArray.push(false);
                }
            }
        }
    }

    if (accessArray.length != 0) {

        console.log("There are errors. Please fix, scroll up for more details")
    }

    return accessArray.length === 0 ? true : false;
}

const endLoop = (value) => {
    let eofRegex = /EOF/i;
    let qRegex = /q/i
    return value.match(qRegex) || value.match(eofRegex) ? true : false;
}

const notValidNumber = (value) => {
    let alpha = /[A-PR-Z\s]/i;
    let symbols = `!@#$%^&()_=[]{}\|;:'"<>?.,`

    return value.match(alpha) || symbols.includes(value) ? true : false;
}

const checkOperator = (value) => {
    let operator = "+-/*";

    return operator.includes(value) ? true : false;
}

const evaluate = (operator, numbArr) => {
    let sum = 0;
    let val1 = numbArr.pop();
    let val2 = numbArr.pop();


    switch (operator) {
        case "+":
            sum = val1 + val2;
            break;
        case "-":
            sum = val2 - val1;
            break;
        case "*":
            sum = val1 * val2;
            break;
        case "/":
            sum = val2 / val1;
            break;
        default:
            console.log("invalid operator")
            break;
    }

    return { numbArr, sum };
}

export { Validate, endLoop, notValidNumber, checkOperator, evaluate }