$("#shuffleDeck").click(shuffle);
$("#resetDeck").click(resetDeck);
$("#newGame").click(newGame);

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
                console.log(result[i]);
                tableCards += result[i]["name"] + " ";
            }
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
                console.log(result[i]);
                player1cards += result[i]["name"] + " ";
            }
            $("#player1").html(player1cards)
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