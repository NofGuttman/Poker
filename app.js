var express = require('express');
var app = express();

var shuffle = require('./app/shuffle');
var cards = require('./app/deck');

var deck = {
    shuffled: false,
    cards: cards(),
    cardsLeft: 52
};

app.get('/', function(req, res){
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/getDeck', function(req, res){
    //To do: get deck
    res.send('You are using a new deck now')
});

app.get('/resetDeck', function(req, res){
    deck.shuffled = false;
    deck.cards = cards();
    deck.cardsLeft = 52;
    res.send('Deck restarted successfully.');
});

app.get('/showDeck', function(req, res){
    res.send(deck)
});

app.get('/draw', function(req, res){
    res.send(deck.cards.pop());
    deck.cardsLeft = deck.cards.length;
})

app.get('/draw/:number', function(req, res){
    let numToDraw = req.params.number
    let drawed = [];
    for(let i = 0; i < numToDraw; i++){
        if(deck.cards.length !== 0){
            drawed.push(deck.cards.pop())
        } else {
            res.send(drawed);
        }
    }
    deck.cardsLeft = deck.cards.length;
    res.send(drawed);
})

app.get('/cardsLeft', function(req, res){
    res.send(deck.cardsLeft.toString())
})

app.get('/shuffle', function(req, res){
    deck.cards = shuffle(deck.cards)
    deck.shuffled = true;
    res.send('Deck shuffled successfully');
})

app.listen(3000, function(){
    console.log('App is now running at PORT 3000')
});