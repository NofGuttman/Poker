function drawCardsToTable(table, deck){
    if(table.length === 3 || table.length === 4){
        table.push(deck.pop());
    }
    if(table.length === 0){
        for(let i = 1; i <= 3; i++){
            table.push(deck.pop())
        }
    }
}

module.exports = drawCardsToTable;