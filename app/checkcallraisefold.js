let playersInThisRound = [
    {userName: "Player1", goodToGo: false, money: 10000, call: 0, selfBid: 0},
    {userName: "Player2", goodToGo: false, money: 20000, call: 0, selfBid: 0},
    {userName: "Player3", goodToGo: false, money: 30000, call: 0, selfBid: 0}
];

const player1 = {userName: "Player1"}

function bid(action, player, players, bidValue){
    let relevantPlayer
    for(let i in players){
        if(players[i].userName === player.userName){
            relevantPlayer = players[i];
        }
    }
    switch(action){
        case "CHECK":
            relevantPlayer.goodToGo = true;
            break;
        
        case "CALL":
            relevantPlayer.money -= relevantPlayer.call;
            [relevantPlayer.selfBid, relevantPlayer.call] = [relevantPlayer.call, 0];
            relevantPlayer.goodToGo = true;
            break;
        
        case "RAISE":
            for(let i in players){
                if(players[i] === relevantPlayer){
                    continue;
                }
                players[i].goodToGo = false;
                players[i].call += bidValue;
            }
            relevantPlayer.goodToGo = true;
            [relevantPlayer.selfBid, relevantPlayer.call] = [relevantPlayer.call + bidValue, 0];
            relevantPlayer.money -= relevantPlayer.selfBid;
            break;
        
        case "FOLD":
            break;
    }
}

bid("RAISE", player1, playersInThisRound, 100);
            
console.log(playersInThisRound);