let drawCardsToTable = require('./drawCardsToTable');
let distributeCardsToPlayers = require('./distributeCardsToPlayers');
let deck = require('./deck');
let shuffle = require('./shuffle');
let ranking = require('./ranking');
let winner = require('./winner');

let shuffledDeck = shuffle(deck());
let players = [
    {userName: "Player1", money: 2000},
    {userName: "Player2", money: 3200},
    {userName: "Player3", money: 12000}
]
let gameTable = [];

//console.log(players);
//console.log(gameTable);

distributeCardsToPlayers(players, shuffledDeck);

//console.log(players);
//console.log(gameTable);

drawCardsToTable(gameTable, shuffledDeck);

//console.log(gameTable);

drawCardsToTable(gameTable, shuffledDeck);

//console.log(gameTable);

drawCardsToTable(gameTable, shuffledDeck);

//console.log(gameTable);

//console.log(ranking(players[1].hand.concat(gameTable)));

for(let i in players){
    players[i].rank = ranking(players[i].hand.concat(gameTable))
}

console.log(gameTable)
console.log(players)
console.log(winner(players))