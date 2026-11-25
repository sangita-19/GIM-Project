let gameNum = 11;
let userNum = prompt("Guess the Game Number:");
while(userNum != gameNum){
    userNum = prompt("You entered wrong number! Guess again :");
}
console.log("Congratulations! You guess the right number.");
