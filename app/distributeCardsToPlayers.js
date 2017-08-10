let shuffle = require('./shuffle');
let deck = require('./deck');


function distributeCardsToPlayers(playersList){
    let shuffledDeck = shuffle(deck());
    let players = []
    for(let i in playersList){
        players.push({
            userName: playersList[i],
            hand: [shuffledDeck.pop(), shuffledDeck.pop()]
        });
    }
    return players
}

let players = distributeCardsToPlayers(["Dudi", "Rotem", "Kobi", "Beni"]);

for(let i in players){
    console.log(players[i]);
}