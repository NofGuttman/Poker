function winner(players){
    let playersRank = [];
    let toCheck = [];
    for(let i in players){
        playersRank.push([players[i]["userName"], players[i]["rank"]]);
        toCheck.push(players[i]["userName"]);
    }
    for(let place = 0; place < 7; place++){
        for(let rate = 14; rate > 0; rate--){
            let winners = [];
            for(let player in playersRank){
                if(toCheck.includes(playersRank[player][0])){
                    let rank = playersRank[player][1];
                    if(rank[place] == rate){
                        winners.push(playersRank[player][0])
                    }
                }
            }
            if(winners.length == 1){
                return winners;
            } else if(winners.length > 1){
                [toCheck, winners] = [winners, []]
            }
        }
    }
    return toCheck;
}












let example = [
    {"userName": "player1", "rank": [4, 10]},
    {"userName": "player2", "rank": [2, 13, 9, 8, 4]},
    {"userName": "player3", "rank": [4, 10]}
]


console.log(winner(example)); // output ==> ["player3"]

module.exports = winner;