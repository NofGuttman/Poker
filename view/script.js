$("#shuffleDeck").click(shuffle);
$("#resetDeck").click(resetDeck);
$("#newGame").click(newGame);

let table = [];
let player1hand = []

function newGame(){
    resetDeck();
    shuffle();
    $.ajax({
        type: "GET",
        url: "/draw/5",
        dataType: "json",
        success: function(result){
            let tableCards = "";
            for(let i in result){
                table.push(result[i]);
                tableCards += result[i]["name"] + " ";
            }
            console.log(table);
            $("#table").html(tableCards)
        }
    });

    $.ajax({
        type: "GET",
        url: "/draw/2",
        dataType: "json",
        success: function(result){
            let player1cards = "";
            for(let i in result){
                player1hand.push(result[i]);
                player1cards += result[i]["name"] + " ";
            }
            console.log(player1hand);
            $("#player1").html(player1cards);
        }
    });
    
    $.ajax({
        type: "GET",
        url: "/draw/2",
        dataType: "json",
        success: function(result){
            let player2cards = "";
            for(let i in result){
                console.log(result[i]);
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
        dataType: "json",
        url: "/ranking",
        data: {cards: cards},
        success: function(result){
            console.log(result);
        }
    });
}