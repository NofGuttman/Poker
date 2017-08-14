//let playersPlaying = [];
//const player1 = {
//    userName: "Kobi",
//    money: 10000
//}
//const player2 = {
//    userName: "Rami",
//    money: 200000
//}

function sit(player, players, checkInAmount){
    for(let i in players){
        if(players[i].userName === player.userName){
            players.splice(i, 1);
            return
        }
    }
    if(checkInAmount > player.money){
        return false;
    }
    players.push({
        userName: player.userName,
        money: checkInAmount
    });
}

module.exports = sit;

//sit(player1, playersPlaying, 900);
//sit(player1, playersPlaying, 100);
//sit(player2, playersPlaying, 1000);
//
//console.log(playersPlaying);