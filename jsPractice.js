//just some practice questions involving various JS aspects, working on synchronous vs asynchronous next

console.log("Calculate area of traingle with sides 5, 6, 7: ")
function CalculateArea(base, height, length){
    let semiPerimeter = (base + height + length)/2;
    console.log(Math.sqrt(semiPerimeter*(semiPerimeter- base)*(semiPerimeter- height)*(semiPerimeter- length)));
}

CalculateArea(5, 6, 7);

console.log("Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar: ");

function IsLeapYear(year){
    return((year % 100 == 0) ? (year % 400 != 0) : (year % 4 == 0));
}
console.log(IsLeapYear((new Date()).getFullYear()));

console.log(" Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  ");

function IsSunday(date){
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = date.getDay();
    return (days[dayName] === 'Sunday' ? true : false);
}

function CheckForSunday(){
    let sundayDates = [];
    for(let i = 2014; i <= 2050; i++){
        let date = new Date(i + "-01-01");
        if(IsSunday(date)){
            sundayDates.push(date);
        }
        let year = date.getFullYear();
        date.setFullYear(year++);
    }
    return sundayDates;
}

console.log(CheckForSunday())

console.log("Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.");

function GuessingGame(){
    let randomInt = Math.floor(Math.random() * 11);
    let userPrompt = prompt("Please enter a number between 1 and 10 or press e to exit: ");
    while(userPrompt !== 'e'){
        let userPromptConvert = parseInt(userPrompt);
        if(userPromptConvert === randomInt){
            console.log("Good Guess, you got it!");
            randomInt = Math.floor(Math.random() * 11);
            userPrompt = prompt("Please enter a number between 1 and 10 or press e to exit: ");
        }
        else{
            console.log("Sorry, try again!");
            userPrompt = prompt("Please try again or press e to exit: ");
        }
    }
    console.log("Thanks for playing!");
}

GuessingGame();
