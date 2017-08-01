$("#shuffleDeck").click(shuffle);
$("#resetDeck").click(resetDeck);
$("#newGame").click(newGame);

let table = [];
let player1hand = [];

function newGame(){
    resetDeck();
    shuffle();
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
                player2cards += result[i]["name"] + " ";
            }
            $("#player2").html(player2cards)
        }
    });
}

$("#showDeck").click(function(){
    rank(player1hand.concat(table));
    $.ajax({
        type: "GET",
        url: "/showDeck",
        success: function(result){
            console.log(result);
        }
    })
});

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

function rank(cards){
    $.ajax({
        type: "POST",
        url: "/ranking",
        data: {cards: cards},
        success: function(result){
            console.log(result);
        }
    });
    player1hand = [];
    table = [];
}