function distributeCardsToPlayers(players, deck){
    for(let i in players){
        players[i].hand = [deck.pop(), deck.pop()];
    }
}

module.exports = distributeCardsToPlayers;