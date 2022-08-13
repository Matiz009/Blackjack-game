let firstCard = Math.floor(Math.random() * 13) + 1;

let secondCard = Math.floor(Math.random() * 13) + 1;

let cards = [firstCard, secondCard];

let sum = getRandom(firstCard) + getRandom(secondCard);

let hasBlackJack = false;

let isAlive = false;

let message = " ";

let btn = document.getElementById("btn");

let btn_2 = document.getElementById("btn-2");

let btn_3 = document.getElementById("btn-3");

btn.addEventListener("click", buttonClicked);
btn_2.addEventListener("click", addNewCard);
btn_3.addEventListener("click", function() {
    location.reload();
});

message_el = document.getElementById("message-el");

sum_el = document.getElementById("sum-el");

cards_el = document.getElementById("cards-el");

let player_el = document.getElementById("player");
let player = {
    name: "John",
    chips: 120,
};
player_el.textContent = player.name + ": $" + player.chips;

function buttonClicked() {
    isAlive = true;
    if (!hasBlackJack) {
        if (sum <= 20) {
            message = "Do you want to draw a new card? 🙂";
            console.log(message);
            message_el.textContent = message;
            sum_el.textContent = "Sum: " + sum;
            cards_el.textContent = "Cards: " + cards;
        } else if (sum === 21) {
            message = "Woo hoo! You've got Blackjack! 🥳";
            console.log(message);
            hasBlackJack = true;
            message_el.textContent = message;
            sum_el.textContent = "Sum: " + sum;
            cards_el.textContent = "Cards: " + cards;
        } else {
            message = "You're out of the game! 😭";
            console.log(message);
            isAlive = false;
            message_el.textContent = message;
            sum_el.textContent = "Sum: " + sum;
            cards_el.textContent = "Cards: " + cards;
        }
    }
}

function addNewCard() {
    if (isAlive && !hasBlackJack) {
        newCard = Math.floor(Math.random() * 13) + 1;
        cards.push(getRandom(newCard));
        sum += newCard;
        buttonClicked();
    }
}

function getRandom(number) {
    if (number === 1) {
        number = 11;
        return number;
    } else if (number > 10) {
        number = 10;
        return number;
    } else {
        number = number;
        return number;
    }
}