let shuffle = require('./shuffle');
let deck = require('./deck');

let shuffledDeck = shuffle(deck());
let players = [];

function distributeCardsToPlayers(NamesList, players, deck){
    for(let i in NamesList){
        players.push({
            userName: NamesList[i],
            hand: [shuffledDeck.pop(), shuffledDeck.pop()]
        });
    }
}

distributeCardsToPlayers(["Dudi", "Rotem", "Kobi", "Beni"],  players, shuffledDeck);

for(let i in players){
    console.log(players[i]);
}
console.log(shuffledDeck.length)