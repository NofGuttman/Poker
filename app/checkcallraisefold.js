let playersInThisRound = [
    {userName: "Player1", goodToGo: false, money: 1000, bidOn: 0},
    {userName: "Player2", goodToGo: false, money: 2000, bidOn: 0},
    {userName: "Player3", goodToGo: false, money: 3000, bidOn: 0}
];

function bid(playerName, action, players, bidValue){
    let relevantPlayer = {};
    for(let i in players){
        if(players[i].userName == playerName){
            relevantPlayer = players[i];
        }
    }
    switch(action){
        case "CHECK":
            relevantPlayer.goodToGo = true;
            break;
        case "FOLD":
            
            break;
        case "RAISE":
            
            break;
        case "CALL":
            relevantPlayer.goodToGo = true;
            break;
    }
}

bid("Player3", "CHECK", playersInThisRound, 100);

console.log(playersInThisRound);