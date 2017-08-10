let shuffle = require('./shuffle');
let deck = require('./deck');

let shuffledDeck = shuffle(deck());
let gameTable = [];

function drawCardsToTabel(table, deck){
    if(table.length === 3 || table.length === 4){
        table.push(deck.pop());
    }
    if(table.length === 0){
        for(let i = 1; i <= 3; i++){
            table.push(deck.pop())
        }
    }
}

console.log(gameTable);

drawCardsToTabel(gameTable, shuffledDeck);
console.log(gameTable);
console.log(gameTable.length);

drawCardsToTabel(gameTable, shuffledDeck);
console.log(gameTable);
console.log(gameTable.length);

drawCardsToTabel(gameTable, shuffledDeck);
console.log(gameTable);
console.log(gameTable.length);