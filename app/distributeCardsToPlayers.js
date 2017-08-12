function distributeCardsToPlayers(NamesList, players, deck){
    for(let i in NamesList){
        players.push({
            userName: NamesList[i],
            hand: [deck.pop(), deck.pop()]
        });
    }
}

module.exports = distributeCardsToPlayers;