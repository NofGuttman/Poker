$("#shuffleDeck").click(shuffle);
$("#resetDeck").click(resetDeck);
$("#newGame").click(newGame);
$("#showRank").click(showRank);

let table = [];
let player1hand = [];
let player2hand = [];

function newGame(){
    player1hand = [];
    player2hand = [];
    table = [];
    resetDeck();
    shuffle();
    $("#player1rank").html("");
    $("#player2rank").html("");
    $.ajax({
        type: "GET",
        url: "/draw/5",
        success: function(result){
            let tableCards = "";
            for(let i in result){
                table.push(result[i]);
                tableCards += result[i]["name"] + " ";
            }
            $("#table").html(tableCards)
        }
    });

    $.ajax({
        type: "GET",
        url: "/draw/2",
        success: function(result){
            let player1cards = "";
            for(let i in result){
                player1hand.push(result[i]);
                player1cards += result[i]["name"] + " ";
            }
            $("#player1").html(player1cards);
        }
    });
    
    $.ajax({
        type: "GET",
        url: "/draw/2",
        success: function(result){
            let player2cards = "";
            for(let i in result){
                player2hand.push(result[i]);
                player2cards += result[i]["name"] + " ";
            }
            $("#player2").html(player2cards)
        }
    });
}

$("#showDeck").click(function(){
    $.ajax({
        type: "GET",
        url: "/showDeck",
        success: function(result){
            console.log(result);
        }
    })
});

function showRank(){
    rank("player1rank",player1hand.concat(table));
    rank("player2rank",player2hand.concat(table));
}

function shuffle(){
    $.ajax({
        type: "GET",
        url: "/shuffle",
        success: function(result){
            console.log(result);
        }
    });
};


function resetDeck(){
    $.ajax({
        type: "GET",
        url: "/resetDeck",
        success: function(result){
            console.log(result);
        }
    })
}

function rank(player, cards){
    $.ajax({
        type: "POST",
        url: "/ranking",
        data: {cards: cards},
        success: function(result){
            $("#" + player).html(result.join(", "));
            console.log(result);
        }
    });
}