function winner(players){
    let playersRank = [];
    let toCheck = [];
    for(let i in players){
        playersRank.push([players[i]["userName"], players[i]["rank"]]);
        toCheck.push(players[i]["userName"]);
    }
    console.log(toCheck);
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
            } else if(winners > 1){
                [toCheck, winners] = [winners, []]
            }
        }
    }
    return winners;
}












let example = [
    {"userName": "player1", "rank": [4, 10]},
    {"userName": "player2", "rank": [1, 13, 9, 8, 4]},
    {"userName": "player3", "rank": [4, 11]}
]


console.log(winner(example)); // output ==> ["player3"]

module.exports = winner;