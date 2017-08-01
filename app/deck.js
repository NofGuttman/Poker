let shapes = ["Spades", "Hearts", "Diamonds", "Clubs"];

function cardName(value){
    if(value === 11) return "J";
    if(value === 12) return "Q";
    if(value === 13) return "K";
    return value
}

module.exports = function returnCards() {
    let list = [];
    for(shape in shapes) {
        for(let i = 1; i <= 13; i++){
            list.push({
                value: i,
                shape: shapes[shape],
                name: cardName(i) + shapes[shape][0]
            });
        }
    }
    return list;
}
