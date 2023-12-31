"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colorName) {
//     if (colorName === "red"){
//         return "Red is a hot color.";
//     } else if (colorName === "green") {
//         return "Green is really cool!";
//     } else if (colorName === "yellow") {
//         return "Yellow is the color of the Sun.";
//     } else {
//         return "I don't know anything about that color.";
//     }
// }
//
// console.log(analyzeColor("red"));
// console.log(analyzeColor("green"));
// console.log(analyzeColor("blue"));
// **************************************************************************

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case "red":
            // console.log("Red is a hot color.");
            alert("Red is a hot color.");
            break;
        case "green":
            // console.log("Green is a really cool color!");
            alert("Green is a really cool color!");
            break;
        case "yellow":
            // console.log("Yellow is the color of the Sun.");
            alert("Yellow is the color of the Sun.");
            break;
        default:
            // console.log("I don't know anything about that color");
            alert("I don't know anything about that color");
            break;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userInput = prompt("Please enter a color.");
//
// analyzeColor(userInput);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

 let total = 100;
 let randomNum = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum, totalAmnt) {
    if (luckyNum === 1) {
        let newPrice = totalAmnt - (totalAmnt * .10);
        alert(`Your lucky number is: 1. Your total before this discount is: $${totalAmnt}, and you new total after discount is: $${newPrice}`);
        return `Your total with a 10% discount is: $${totalAmnt - (totalAmnt * .10)}`;
    } else if (luckyNum === 2) {
        let newPrice = totalAmnt - (totalAmnt * .25);
        alert(`Your lucky number is: 2. Your total before this discount is: $${totalAmnt}, and you new total after discount is: $${newPrice}`);
        return `Your total with a 10% discount is: $${totalAmnt - (totalAmnt * .25)}`;
    } else if (luckyNum === 3) {
        let newPrice = totalAmnt - (totalAmnt * .35);
        alert(`Your lucky number is: 3. Your total before this discount is: $${totalAmnt}, and you new total after discount is: $${newPrice}`);
        return `Your total with a 10% discount is: $${totalAmnt - (totalAmnt * .35)}`;
    } else if (luckyNum === 4) {
        let newPrice = totalAmnt - (totalAmnt * .50);
        alert(`Your lucky number is: 4. Your total before this discount is: $${totalAmnt}, and you new total after discount is: $${newPrice}`);
        return `Your total with a 10% discount is: $${totalAmnt - (totalAmnt * .50)}`;
    } else if (luckyNum === 5) {
        let newPrice = totalAmnt - totalAmnt;
        alert(`Your lucky number is: 5. Your total before this discount is: $${totalAmnt}, and you new total after discount is: $${newPrice}`);
        return `You get everything free... Total is: $${(totalAmnt - totalAmnt)};`
    } else {
        alert(`Your lucky number is: 0, so you don't qualify for a discount. Your total price is: $${totalAmnt}`);
        return `Sorry you get no discount, your total is: $${totalAmnt};`
    }
}

// console.log(calculateTotal(randomNum, total));
// console.log(calculateTotal(randomNum, 50));
// console.log(calculateTotal(randomNum, 25));
// console.log(randomNum);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// let userInputTotal = prompt("Please enter your bill total: ")

// calculateTotal(randomNum, userInputTotal);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


// ***** FUNCTION TO CHECK IF CONFIRMATION IS TRUE OR FALSE;
function userYesOrNo() {
    // BECAUSE THIS IS A confirmation IT WILL RETURN A BOOLEAN.
    return confirm("Would you like to enter a number?");
}

// ***** CHECK IF USER INPUT IS A NUMBER;
function checkNum(userInput) {
    if (isNaN(userInput)) {
        return alert("You did not enter a number.");
    } else {
        return !isNaN(userInput);
    }
}

// ****** CHECK IF USER INPUT IS ODD OR EVEN;
function oddOrEven(userInput) {
    if (userInput % 2 === 0) {
        alert("The number you entered is even.");
    } else {
        alert("The number you entered is odd.");
    }
}

// ****** ADD 100 TO USER INPUT;
function addOneHundred(userInput) {
    let sum = parseInt(userInput) + 100;
    return alert("Your number plus 100 is: " + sum);
}

// ****** CHECK IF USER INPUT IS POSITIVE IR NEGATIVE;
function negOrPos(userInput) {
    if (userInput < 0) {
        alert("The number you entered is Negative.");
    } else {
        alert("The number you entered is Positive.");
    }
}

// ****** RUNNING IT ALL BY CALLING ALL FUNCTIONS;
function userInteraction() {
    if (userYesOrNo()) {
        let userPrompt = prompt("Ok cool, please enter a number.");
        if (checkNum(userPrompt)) {
            oddOrEven(userPrompt)
            addOneHundred(userPrompt)
            negOrPos(userPrompt);
        } else {
            userInteraction();
        }
    } else {
        alert("OK, bye Felicia!");
    }
}

userInteraction(); //CALLING THE MAIN FUNCTION;