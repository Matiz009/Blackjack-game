let firstCard = Math.floor(Math.random() * 10) + 1;
let secondCard = Math.floor(Math.random() * 10) + 1;
let newCard = Math.floor(Math.random() * 10) + 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";

let btn = document.getElementById("btn");

let btn_2 = document.getElementById("btn-2");

btn.addEventListener("click", buttonClicked);
btn_2.addEventListener("click", function() {
    sum += newCard;
    buttonClicked();
    console.log("Draw a new card!");
    alert("Draw a new card!");
});

message_el = document.getElementById("message-el");

sum_el = document.getElementById("sum-el");

cards_el = document.getElementById("cards-el");

function buttonClicked() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
        console.log(message);
        message_el.textContent = message;
        sum_el.textContent = "Sum: " + sum;
        cards_el.textContent = "Cards: " + cards[0] + " & " + cards[1];
    } else if (sum === 21) {
        message = "Woo hoo! You've got Blackjack! 🥳";
        console.log(message);
        hasBlackJack = true;
        message_el.textContent = message;
        sum_el.textContent = "Sum: " + sum;
        cards_el.textContent = "Cards: " + cards[0] + " & " + cards[1];
    } else {
        message = "You're out of the game! 😭";
        console.log(message);
        isAlive = false;
        message_el.textContent = message;
        sum_el.textContent = "Sum: " + sum;
        cards_el.textContent = "Cards: " + cards[0] + " & " + cards[1];
    }
}