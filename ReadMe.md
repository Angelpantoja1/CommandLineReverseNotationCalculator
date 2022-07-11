# Interview Homework

# Welcome to my interview homework. I was tasked to  build and test a Command Line Reverse Polish Notation Calculator.

### What is a CLRPN Calculator?

For those that don’t know about this special calculator ill give you a quick example on how it works. On a traditional calculator if you wanted to add 1 and 2 together you would input that equation into a traditional calculator like so: `1 + 2`  and you would get `3` . Now let’s see how to do this in a reverse polish notation calculator. That would be entered like so: `1 2 +` and you would still get `3`. Seems simple right? Now what if we get something like this: 

`1 2 3 4 5 6 7 8 9 10 + - + * * / + * -` 

What is our result? Let’s see how to build out this Calculator to find out! Also I forgot to mention this calculator is going to be built directly into our command line.

## First let me talk about what this application consists of.

****Inquirer.js - version 9.0.0****

Used to prompt the user of a question or questions and get the user input from the command line. 

Jest - version 28.1.2

Javascript testing framework. Used to handle all of my test for my functions.

Babel - Version 7.18.6

Javascript compiler, used to compile my ES6 code into ES5 to be read by Node.

## First if you are coming from my GitHub and want to see how to run the application ill show you how to run it.

Assuming you already cloned the repo and are familiar with VSCode.

1) 

The very first thing we need to do is get all of our `node_modules` to be able to run the application. To do this open your terminal and run this command `npm install`  or `npm i`  for short. This is going to go through our package.json and read all the dependencies and dev dependencies.

![Screen Shot 2022-07-10 at 1.20.01 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.20.01_PM.png)

2)

 Open / look your folder structure to confirm if the `node_modules` folder is there. If not you might need to run the command again.

![Screen Shot 2022-07-10 at 1.23.43 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.23.43_PM.png)

3)

 Now that we have confirmed we have our `node_modules` folder we can begin running the application by opening the terminal again and running this command: `npm start`. This was configured in the `package.json` file under “scripts”. You will also see `npm test` which will run the test I have set up. Feel free to check those out on the `functions.test.js` file to see the ins and outs of how each function should work.

![Screen Shot 2022-07-10 at 1.25.56 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.25.56_PM.png)

![Screen Shot 2022-07-10 at 1.26.07 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.26.07_PM.png)

![Screen Shot 2022-07-10 at 1.26.25 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.26.25_PM.png)

4) 

Once you run the `npm start` command in the terminal then you will see your first prompt. This prompt will let you know what are able to do. You can enter in any amount of numbers and as many as the four operators ( + -  / * ) as you need. 

![Screen Shot 2022-07-10 at 1.33.18 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_1.33.18_PM.png)

<aside>
💡 If you use any letters or special characters the application will prompt you with an error with the exception of q or Q. Q or q will quit the application.

</aside>

<aside>
💡 If you are unsure how many operators you need its easy to remember. Take a look at how many numbers you have and you need one less than the amount of numbers. Example if you have 2 numbers you need 1 operator. If you have 5 numbers you need 4 operators to complete the equation.

</aside>

You can now start doing calculations! 

# Building out the Calculator

## Requirements

NodeJs

[Node.js](https://nodejs.org/en/)

# Setup

To begin building out the calculator first we need to create and open an empty folder into your code editor of choice. I’ll be using VSCode. 

On Mac

On windows

Make your way to the desktop and you can right click and select “new folder” then give it a name. 

Make you way over to your desktop and you can also right click and select “new” then “folder” you can now give the folder a name.

Now that we have our folder let’s go ahead and open this folder into VSCode. To do this you can simply drag the folder over the VSCode Icon or open VSCode and click open and select the newly made folder.

## Initializing the Project

To get started we first need to initialize the project and we can do this by opening the terminal by looking at the top left corner, click `terminal` and then click `new terminal`. Now what we want to do is type `npm init -y` and hit enter / return to run the command.

<aside>
💡 The -y flag tells VSCode that we to use the default package.json

</aside>

This here is what that process looks like.

Enter Command

The File the got created 

The contents that got created 

![Screen Shot 2022-07-10 at 2.04.40 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_2.04.40_PM.png)

![Screen Shot 2022-07-10 at 2.04.53 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_2.04.53_PM.png)

![Screen Shot 2022-07-10 at 2.05.05 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_2.05.05_PM.png)

## Installations

Now that we have our project initialized lets proceed with installing all the necessary dependencies. We will need:

Inquirer  - `npm install inquirer`

[inquirer](https://www.npmjs.com/package/inquirer)

Babel - `npm install --save-dev babel-jest`

 `npm install @babel/preset-env --save-dev`

[Babel · The compiler for next generation JavaScript](https://babeljs.io/setup)

Jest - `npm install --save-dev jest`

[Jest](https://jestjs.io/)

<aside>
💡 If you are wondering what these are used for take a look at the projects consist of section.

</aside>

To get these items added we need to run the npm commands in the terminal like how we did the `npm init command` but one at a time.

Once all the commands are ran we should see these files be made.

If your project looks like mine we are ready to start coding!

![Screen Shot 2022-07-10 at 2.34.42 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_2.34.42_PM.png)

## Index.js

You may be wondering what this is, this is going to be the name of the first file we need to make in our project.

<aside>
💡 Create new files by clicking the paper icon with the plus under the folder name

</aside>

Once you click that button go ahead and name the file index.js. This is where our primary function will reside. 

![Screen Shot 2022-07-10 at 2.45.57 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_2.45.57_PM.png)

Now that we have our file set up we can proceed with some of the code.

To begin we need to import inquirer from our dependencies to be able to use the command line prompt and get user input.

we can do this by adding this line of code at the top of `index.js` file.

```jsx
import inquirer from "inquirer";
```

<aside>
💡 In case you don’t recall or haven’t work in javascript, javascript read top down.

</aside>

Now that we have inquirer in our file we can begin making out first function. We will call it `askPrompt`. Like So:

```jsx
const askPrompt = () => {
	//We can also add out prompt. This is the first thing we want our users to see.
	//We get our prompts to show up by adding what are know as console logs.
	console.log("----Welcome to my Reverse Polish Notion Calculator---- \n 1) To begin  you must enter in at least 2 numbers before an operator. \n 2) When entering in multiple numbers be sure to seperate them by a space.\n 3) Once you have your numbers then you can add an operator(s) \n 4) Be sure to seperate the operators by a space as well \n 5) Once you have entered in something hit your enter key to see calculation(s). \n 6) Lastly you can enter in q or push CMD + D to quit");
	
}
```

Now that we have out function and prompt set up lets take a look at setting up inquirer to get user input.

<aside>
💡 We arent going to talk about everything  inquirer has to offer just the pieces we need. If you want to dive deeper feel free to click the link about inquirer at the top of this page.

</aside>

Here is what our code will look like:

```jsx
//inquirer is an asynchronus method so we need to use the await key word.
//Prompt is the built in fucntion we will be using to keep track of the user inputs.
await inquirer.prompt({
	//these fields here are properties. Name refers to the name of what you want your user response to be called. Could be anything in this case we are using value.
	name: "value",
	//There are many different types in but the one we want is input to allow the user to type in a response to our prompt.
  type: "input",
	//The message what you want the prompt to say, in this case we will just use a greater than sign signifiying an input is waiting.
  message: ">",
	//Lastly we have validate which will help validate our input to whatever we have set up. As you can see we are using a validate function which we will be setting up shortly. Lets leave it commented out for now.
  //validate: (answer) => {
	  //return Validate(answer)
	//}
})
```

We are close to writing our first test.  All we need to do now is call our function to run. We will add this code towards the bottom of our file.

```jsx
askPrompt();
```

If you file looks like this we try running our project.

We can do that by typing `node .` in the terminal. Or go to the `package.json` file and make a change to the `scripts` section. Lets update the scripts to look like this

```jsx
"scripts":{
	"start": "node .",
	"test": "jest"
}
```

![Screen Shot 2022-07-10 at 3.44.58 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_3.44.58_PM.png)

<aside>
💡 If you are wondering why we added “test” this is to use jest later on to test our functions.

</aside>

With your preferred method lets’ run our application and see what happens. I will be using `npm start` moving forward.

WE GOT AN ERROR! 

![Screen Shot 2022-07-10 at 4.04.18 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_4.04.18_PM.png)

To Fix we need to set our “type” to “module” in our package.json Like so:

```jsx
"type":"module",
```

![Screen Shot 2022-07-10 at 4.08.30 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_4.08.30_PM.png)

With that all fixed we can now see that we have our prompt showing up in the terminal.

![Screen Shot 2022-07-10 at 4.09.55 PM.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Screen_Shot_2022-07-10_at_4.09.55_PM.png)

<aside>
💡 there is no validation at the moment so feel free to type anything in! Then to submit push your enter on window or return key on mac.

</aside>

To finish up the index page im going to include an image and a snippet of code to talk through.

Heads up it might be a lot.

![DoWhileLoop.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/DoWhileLoop.png)

```jsx
//We are using a do while loop here because with a do while loop it will run the code in the do block first then check the condition. We wont the prompt to continuously loop until the user is done with there equations.
do {
				//Here we are using object destructuring to get our value (remember how we know its value is because we declared it in name) from the prompt if the input is valid.
        const { value } = await inquirer.prompt({
            name: "value",
            type: "input",
            message: ">",
            validate: (answer) => {
								//Here we are calling our validate function to ensure we have a valid input. 
								//valid inputs: any numbers, any of the 4 operations, and q or Q
                return Validate(answer)
            }
        })
				//These if statements here are determining what to do with the validated items.
				
							//Here we are spliting the input because the user could enter in mutiple items at once and we want to check everything.
				let charArr = value.split(" ");
						//This for loop is to go through each item and determine what to do
					  for (let i = 0; i < charArr.length; i++) {
						//The first thing we want to check for is a q or Q is this is inputted at any time we want our application to end.
            if (endLoop(value)) {
                loop = false;
                break;

						//In this else if we are checking to see if one of the inputs is an operation.
            } else if (checkOperator(charArr[i])) {
								//we have an operation we need to check if they also entered in any numbers. If not throw and error.
                if (numbArr.length < 1) {
                    console.log("Please enter a number first");

								//We also need to check for if the user only entered in a single number and an operation. The operation only work where are two numbers.
                } else if (numbArr.length == 1) {
                    console.log("Only one number in the array, Add another number before adding an operation")
                } else {

										//lastly if the check above are good then we can do the equation and we do that by using our evaluate function.
                    let obj = evaluate(charArr[i], numbArr)
                    numbArr = obj.numbArr;
                    numbArr.push(obj.sum);
                }
            } else {

								//if the input doesnt reach the other conditions is it safe to assume the input is a number so we can add it to our number array ( numbArr ).
                numbArr.push(Number(charArr[i]))
            }
        }

        console.log("Numbers in Stack: ",numbArr)

    } while (loop);
```

![DoWhileLoop.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/DoWhileLoop%201.png)

<aside>
💡 In order for these functions that we are using to work, we have to import them. But before we can do that lets create another file that will hold all of our helper functions.

</aside>

## Creating Functions.js File

We are going to be making a function helper file. This file is going to hold all the functions that help make our code on the `index.js` file a little more cleaner to read. 

It also made testing our functions a bit easier because they are all together.

To start follow the same steps as we did when we created the `index.js` file. Name the file `Functions.js`

All of these functions are being used on the `index.js`

### Validate Function

This function is handling all of validation. Check for invalid numbers, if we have any empty spaces, if operations are in an invalid format. Lets’ take a look.

```jsx
const Validate = (answr) => {
		//To start we know the user can enter in more than one item in the string.
		// First thing we do is split the string by all the spaces so we can get the values and store them in our asnwrArr variable.
    let answrArr = answr.split(" ");
    let accessArray = [];
		// The very first check we want to do is a for spaces or empty input.
		//Make sure to throw the right errors
    if (answr == '' || answr == " ") {
        console.log("Spaces are not allowed")
        accessArray.push(false)
    }
		
		//Now we want to loop through all the items in the answrArr.
    for (let i = 0; i < answrArr.length; i++) {
				
				//we do this here because why if the user accidentially enters something like this: /4 
				//Have a single for loop the checks we have in place would not catch that so just in case we split value in the answrArr.
        let tempArr = answrArr[i].split("");
				
				//Now we want to loop through tempArr to determine what to do with each item.
        for (let j = 0; j < tempArr.length; j++) {
						
						//One of the things we need to be careful for is our decimals. The user can input decimals so we want to make sure that it is not treated as an error.
            if (tempArr[j] == ".") {
								
								//So if we find a decimal we check to see if that is the only value by checking the length of the array. If the decimal is the only value in the array we throw a error.
                if (tempArr.indexOf(".") === tempArr.length - 1) {
                    console.log("Cannot enter in just a .");
                    accessArray.push(false);
                }

						//Now if we get passed the decimal check the next thing we want to check for is if the input value is invalid. Remember only numbers, operations, and the letter q or Q. If our function returns true we throw and error. 
            } else if (notValidNumber(tempArr[j])) {
                console.log("Letters or Special Characters are not allowed with the exception of q or Q")
                accessArray.push(false);

						//Lastly we need to check if there is an operator in the input value as well. 
            } else if (checkOperator(tempArr[j])) {
								//If there is we need to check to see if the operation has another value directly next to it. This is the example given above. If the user enters in /4 this is the incorrect format.
                if (tempArr.length > 1) {
                    console.log("You entered in an operator next to a number")
                    accessArray.push(false);
                }
            }
        }
    }

		//finally once the loop is done checking every item in the input value if any of those checks fails im sure you noticed piece of code like this: accessArr.push(false);
		//This was keeping track if any of the test failed. if any of the test something is not valid.
    if (accessArray.length != 0) {

        console.log("There are errors. Please fix, scroll up for more details")
    }
		//Here we are checking the access array to determine if everything is valid thus giving us access and returing the input the user entered.
    return accessArray.length === 0 ? true : false;
}
```

![ValidateFunction.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/ValidateFunction.png)

### EndLoop Function

This function is one of the simpler ones, in this function we are just checking for a q or Q and eof to determine if the user wants to quit using regular expressions.

```jsx
const endLoop = (value) => {
		//In this function we are using regular expressions to check against the value. In this expressions im specifically checking for EOF and Q but the i flag at the end means to make the check case Insensitive.
		//If either of these match then the function will return true and stop our do while loop.
    let eofRegex = /EOF/i;
    let qRegex = /q/i
    return value.match(qRegex) || value.match(eofRegex) ? true : false;
}
```

 

![endLoop.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/endLoop.png)

### notValidNumber Function

In this function we are checking for the alphabet as well as special characters using regular expressions with the exception of q.

```jsx
const notValidNumber = (value) => {
		//In this regular expression we are checking for everything withen the brackets. Ass you can see it goes from A-PR-Z excluding q. Also has the i flag.
    let alpha = /[A-PR-Z\s]/i;
    let symbols = `!@#$%^&()_=[]{}\|;:'"<>?.,`

    return value.match(alpha) || symbols.includes(value) ? true : false;
}
```

![notValidNumber.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/notValidNumber.png)

### checkOperator Function

In this function we are checking for one of the 4 operators. 

```jsx
const checkOperator = (value) => {
		//This time we are using a good ol fashion includes to check if the value passed includes one of the operator. If it does contain one then we get a true. 
    let operator = "+-/*";

    return operator.includes(value) ? true : false;
}
```

![checkOperator.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/checkOperator.png)

### evaluate

In this function we handling all of our equations.

```jsx
const evaluate = (operator, numbArr) => {
		//Here we have 3 variables, the first holding the total of the equation, and the other two using pop method to pop off the last value from the array.
    let sum = 0;
    let val1 = numbArr.pop();
    let val2 = numbArr.pop();

		//Here we are using a switch to check the operator being passed in. 
		//Addition and Multiplcation the order persay doesnt matter.
		//For Division and Subtraction we need to switch the order because as we mentioned pop removes the last value in the array and based on how the calculator should handle this is strange at first. Here is an example

	//given [ 1 2 3 + + ]
	//traditional calculator: 1 + 2 = 3 then 3 + 3 = 6
	//reverse polish calculator: 3 + 2 = 5 then 5 + 1 = 6;

	// as you can see reverse polish calculator handles the operations in reverse order hence the name.

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
		// we then have to return the numbArr in case there are any more values left. as well as the sum because the sum gets added to the array.
    return { numbArr, sum };
}
```

![evaluate.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/evaluate.png)

### Tying everything together

### Exports

Now that we have all the functions set up we can now tie everything together. In order for the functions on the `Function.js` file to be read we need to export them from `Function.js` and import them on `index.js`;

You can add this code to the end of your `Functions.js` file to export the functions

```jsx
export { Validate, endLoop, notValidNumber, checkOperator, evaluate }
```

<aside>
💡 Because there are more than one item we need to export them in curly brackets. If there was only one we can use export default and no curly brackets.

</aside>

### Imports

Now the functions are exported so we can finally import them! Add this code to the top of your `index.js` file

```jsx
import { Validate, endLoop, checkOperator, evaluate } from "./functions.js";
```

Lastly we need to add two variables so things don’t break. 

Right under your imports add these variables.

```jsx
let loop = true;
let numbArr = [];
```

You have successfully built our Command Line Reverse Polish Notation Calculator!

Here is what your ending file should look like:

Index.js

![index.js.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/index.js.png)

Functions.Js

![Functions.js.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Functions.js.png)

This next portion will talk about to how to set up the testing environment

## Setting up the Testing Environment

If you don’t have `Jest` and `Babel`installed  please scroll to the top and install them.

 To begin find the file you want to test in this case its the `Functions.js` file.

We will want to create a new file with a similar name but this time we need to include test in the name. Like so:  `Functions.test.js` or `Functions.spec.js`.

Lets create that file now. Follow the steps we took to create the `index.js` file but make sure to name the file correctly.

Now that we have created the file lets understand how to run some simple test.

Jest testing function are made of up 3 pieces. `describe`, `test` and `expect`.

- `describe` - Is used to describe all the tests within a block;
- `test` - Is used to describe the individual test itself ;
- `expect` - This executes the test, and determines if test passes or fails.

### Examples

```jsx
//here is the syntax first 
describe("Describe the tests within this block", () =>{
	test("Describes the individual test", () =>{
		expect(what you want to test)
	})
})

describe("Equations", () =>{
	test("2 plus 2 should be 4", () =>{
		expect( 2 + 2 ).toBe(4)
	})
})//This test will pass

describe("Equations", () =>{
	test("2 plus 2 should be 4", () =>{
		expect( 2 + 2 ).toBe(5)
	})
})//This test will NOT pass

```

Throughout my testing I used a bunch of different matchers.

Some matchers that were used

- `toBe()` - used to compare primitive types ( number, string, boolean )
- `toEqual()` - used to compare reference type ( arrays, objects )
- `toBeTruthy()` - used to test for true statements
- `toBeFalsy()` - used to test for false statements

Now that we know a little bit about jest and how some of its test work we can start setting some up for our application.

BUT first we need to talk about babel and set that up.

The reason we need babel is because node doesnt understand some of the es6 functions and ways of importing, so we can use babel to compile it down to es5 so node can work.

We need to set up a configuration file. That file is called `.babelrc` 

let’s create that now.

Once thats created go ahead and add this code. This is the babel presets that tells babel how to compile.

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

Now that we have this set up we can use out imports like normal.

<aside>
💡 without babel we would not be able to import out functions we need to test.

</aside>

Here is the import for the functions, import them on the `Functions.test.js` file

```jsx
import { Validate, endLoop, notValidNumber, checkOperator, evaluate } from "./functions";
```

Here ill add the code for all the test I have included.

```jsx
describe("Testing Validate Funciton", () => {

    test("Should be true if a string with a single number is entered", () => {
        expect(Validate("2")).toBeTruthy();
        expect(Validate("100")).not.toBeFalsy()
    })

    test("Should be true if a string consisting of numbers seperated by spaces is entered", () => {
        expect(Validate("1 2 3 4 5 6 7 8 9")).toBeTruthy();
    })

    test("Should be true if a string consisting of numbers and one of the four operation are entered", () => {
        expect(Validate(" 1 2 3 + ")).toBeTruthy();
    })

    test("Should be true if you enter any amount of numbers or any amount of the four operators", () => {
        expect(Validate(" 1 2 + 3 *")).toBeTruthy();
        expect(Validate(" 1 2 4 5 6 + + + + +")).toBeTruthy();
    })

    test("Should be true if any of the four operators are entered", () => {
        expect(Validate("+")).toBeTruthy()
        expect(Validate("-")).toBeTruthy()
        expect(Validate("*")).toBeTruthy()
        expect(Validate("/")).toBeTruthy()
    })

    test("Should be true if any decimals are entered", () => {
        expect(Validate("1.1 1.1")).toBeTruthy();
    })

    test("Should be false if a space is entered", () => {
        expect(Validate(" ")).toBeFalsy();
        expect(Validate("")).toBeFalsy();
    })

    test("Should be false if a . is entered", () => {
        expect(Validate(".")).toBeFalsy();
    })

    test("Should be false if any letters are entered expect q or Q", () => {
        expect(Validate("Hello World")).toBeFalsy();
        expect(Validate("A")).toBeFalsy();
        expect(Validate("B")).toBeFalsy();
        expect(Validate("C")).toBeFalsy();
        expect(Validate("D")).toBeFalsy();
        expect(Validate("E")).toBeFalsy();
        expect(Validate("F")).toBeFalsy();
        expect(Validate("G")).toBeFalsy();
        expect(Validate("H")).toBeFalsy();
        expect(Validate("I")).toBeFalsy();
        expect(Validate("J")).toBeFalsy();
        expect(Validate("K")).toBeFalsy();
        expect(Validate("L")).toBeFalsy();
        expect(Validate("M")).toBeFalsy();
        expect(Validate("O")).toBeFalsy();
        expect(Validate("P")).toBeFalsy();
        expect(Validate("r")).toBeFalsy();
        expect(Validate("s")).toBeFalsy();
        expect(Validate("t")).toBeFalsy();
        expect(Validate("u")).toBeFalsy();
        expect(Validate("v")).toBeFalsy();
        expect(Validate("w")).toBeFalsy();
        expect(Validate("x")).toBeFalsy();
        expect(Validate("y")).toBeFalsy();
        expect(Validate("z")).toBeFalsy();
    })

    test("Should be false if any special charaters are entered expect for the operators", () => {
        expect(Validate("!")).toBeFalsy();
        expect(Validate("@")).toBeFalsy();
        expect(Validate("#")).toBeFalsy();
        expect(Validate("$")).toBeFalsy();
        expect(Validate("%")).toBeFalsy();
        expect(Validate("^")).toBeFalsy();
        expect(Validate("&")).toBeFalsy();
        expect(Validate("(")).toBeFalsy();
        expect(Validate(")")).toBeFalsy();
        expect(Validate("_")).toBeFalsy();
        expect(Validate("=")).toBeFalsy();
        expect(Validate("{")).toBeFalsy();
        expect(Validate("}")).toBeFalsy();
        expect(Validate("[")).toBeFalsy();
        expect(Validate("]")).toBeFalsy();
        expect(Validate("|")).toBeFalsy();
        expect(Validate(":")).toBeFalsy();
        expect(Validate(";")).toBeFalsy();
        expect(Validate(`"`)).toBeFalsy();
        expect(Validate("'")).toBeFalsy();
        expect(Validate("<")).toBeFalsy();
        expect(Validate(">")).toBeFalsy();
        expect(Validate(",")).toBeFalsy();
        expect(Validate(".")).toBeFalsy();
        expect(Validate("?")).toBeFalsy();
    })

    test("Should be false if you enter a number and operator without any spaces", () => {
        expect(Validate("/4")).toBeFalsy();
    })

    test("only numbers, operators, q || Q  are true", () => {
        expect(Validate(" 1 2 3 4 5 6 7 8 9 10 - + / * q")).toBeTruthy();
    })

    test("anything other than numbers, operators, q || Q  are false", () => {
        expect(Validate("! @ # $ 12")).toBeFalsy()
    })

})

describe("Testing End Loop Function", () => {
    test("Should Return True if 'q' is passed in", () => {
        expect(endLoop("q")).toBeTruthy();
    })
    test("Should Return True if 'Q' is passed in", () => {
        expect(endLoop("Q")).toBeTruthy();
    })
    test("Should Return True if 'eof' is passed in", () => {
        expect(endLoop("eof")).toBeTruthy();
    })
    test("Should Return True if 'EOF' is passed in", () => {
        expect(endLoop("EOF")).toBeTruthy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('w')).toBeFalsy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('1')).toBeFalsy();
    })
    test("Should Return false if anything but q || eof is passed in", () => {
        expect(endLoop('!')).toBeFalsy();
    })
})

describe("Testing notValidNumber Function", () => {

    test("Should return false if a single number is entered not multiple numbers", () => {
        expect(notValidNumber("1")).toBeFalsy();
    })
    test("Should return true if a special character is entered", () => {
        expect(notValidNumber("!")).toBeTruthy();
    })
    test("Should return true if a letter is entered except q ", () => {
        expect(notValidNumber("w")).toBeTruthy();
    })
    test("Should return false if q is entered", () => {
        expect(notValidNumber("q")).toBeFalsy();
    })
    test("Should return false if decimal number is entered", () => {
        expect(notValidNumber("1.1")).toBeFalsy();
    })
    test("Should return true if . is entered", () => {
        expect(notValidNumber(".")).toBeTruthy();
    })
})

describe("Testing checkOperator Function", () => {

    test("Should return true if single operation (+) is ented", () => {
        expect(checkOperator("+")).toBeTruthy();
    })
    test("Should return true if single operation (-) is ented", () => {
        expect(checkOperator("-")).toBeTruthy();
    })
    test("Should return true if single operation (/) is ented", () => {
        expect(checkOperator("/")).toBeTruthy();
    })
    test("Should return true if single operation (*) is ented", () => {
        expect(checkOperator("*")).toBeTruthy();
    })
    test("Should return false if a letter of the alphabet is entered", () => {
        expect(checkOperator("a")).toBeFalsy();
    })
    test("Should return false if a number is entered", () => {
        expect(checkOperator("a")).toBeFalsy();
    })
    test("Should return false if a special character is entered", () => {
        expect(checkOperator("$")).toBeFalsy();
    })
})

describe("Testing evaluate Function", () => {

    test("Should return an empty array when there are only two numbers in the number array as well as the sum of adding the two numbers together", () => {
        expect(evaluate("+", [1, 1])).toEqual(
            expect.objectContaining({
                numbArr: expect.arrayContaining([]),
                sum: expect.any(Number)
            })
        )
    })

    test("Should return an array with at least one number if there 3 numbers in the number array as well as the solution to the operation being passed", () => {
        expect(evaluate("*", [1, 2, 4])).toEqual(
            expect.objectContaining(
                {
                    numbArr: expect.arrayContaining([expect.any(Number)]),
                    sum: expect.any(Number)
                }
            )
        )
    })

    test("The length of the array should be 1 if only 3 numbers are in the number array", () => {
        expect(evaluate("*", [1, 2, 4]).numbArr.length).toBe(1)
    })

    test("Should return an array with 2 numbers if there are 4 numbers in the number array as well as the solution to the operation being passed", () => {
        expect(evaluate("*", [1, 2, 4, 4])).toEqual(
            expect.objectContaining(
                {
                    numbArr: expect.arrayContaining([expect.any(Number)]),
                    sum: expect.any(Number)
                }
            )
        )
    })
    test("The length of the array should be 2 if 4 numbers are in the number array", () => {
        expect(evaluate("*", [1, 2, 4, 4]).numbArr.length).toBe(2)
    })
})
```

![Functions.Test.js.png](Interview%20Homework%20cc1f78f363ea45b6a47f2592fe6d4ebf/Functions.Test.js.png)