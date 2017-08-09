const player1 = {};
const player2 = {};
const player3 = {};
const player4 = {};
let tableCards = [];

$("#distribute-cards").click(function(){
    distributeCards([player1, player2, player3]);
});

function distributeCards(list){
    for(let i in list){
        $.ajax({
            type: "GET",
            url: "/draw/2",
            success: function(result){
                list[i].hand = result;
            }
        });
    }
    $.ajax({
        type: "GET",
        url: "/draw/5",
        success: function(result){
            tableCards = result;
        }
    });
};

function shuffle(){
    $.ajax({
        type: "GET",
        url: "/shuffle"
    });
}