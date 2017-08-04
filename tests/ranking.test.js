const ranking = require('../app/ranking');

test("Ranking - Nothing", () =>{
    expect(ranking([{"value":1,"shape":"Diamonds","name":"1D"},{"value":5,"shape":"Hearts","name":"5H"},{"value":9,"shape":"Hearts","name":"9H"},{"value":10,"shape":"Hearts","name":"10H"},{"value":11,"shape":"Spades","name":"JS"},{"value":4,"shape":"Hearts","name":"4H"},{"value":8,"shape":"Clubs","name":"8C"}]))
        .toEqual([0, 14, 11, 10, 9, 8]);
});

test("Ranking - Pair", () =>{
    expect(ranking([{"value":7,"shape":"Diamonds","name":"7D"},{"value":3,"shape":"Clubs","name":"3C"},{"value":1,"shape":"Clubs","name":"1C"},{"value":11,"shape":"Spades","name":"JS"},{"value":2,"shape":"Hearts","name":"2H"},{"value":4,"shape":"Hearts","name":"4H"},{"value":2,"shape":"Clubs","name":"2C"}]))
        .toEqual([1, 2, 14, 11, 7]);
});

test("Ranking - Two Pairs", () =>{
    expect(ranking([{"value":11,"shape":"Hearts","name":"JH"},{"value":7,"shape":"Clubs","name":"7C"},{"value":6,"shape":"Spades","name":"6S"},{"value":4,"shape":"Hearts","name":"4H"},{"value":11,"shape":"Clubs","name":"JC"},{"value":4,"shape":"Spades","name":"4S"},{"value":2,"shape":"Hearts","name":"2H"}]))
        .toEqual([2, 11, 4, 7]);
});

test("Ranking - Threesome", () =>{
    expect(ranking([{"value":4,"shape":"Hearts","name":"4H"},{"value":12,"shape":"Clubs","name":"QC"},{"value":13,"shape":"Hearts","name":"KH"},{"value":5,"shape":"Clubs","name":"5C"},{"value":13,"shape":"Diamonds","name":"KD"},{"value":13,"shape":"Clubs","name":"KC"},{"value":9,"shape":"Spades","name":"9S"}]))
        .toEqual([3, 13, 12, 9]);
});

test("Ranking - Straight", () =>{
    expect(ranking([{"value":7,"shape":"Spades","name":"7S"},{"value":10,"shape":"Spades","name":"10S"},{"value":12,"shape":"Spades","name":"QS"},{"value":6,"shape":"Diamonds","name":"6D"},{"value":9,"shape":"Clubs","name":"9C"},{"value":8,"shape":"Clubs","name":"8C"},{"value":13,"shape":"Clubs","name":"KC"}]))
        .toEqual([4, 10]);
});

test("Ranking - Flush", () =>{
    expect(ranking([{"value":1,"shape":"Diamonds","name":"1D"},{"value":11,"shape":"Diamonds","name":"JD"},{"value":10,"shape":"Diamonds","name":"10D"},{"value":10,"shape":"Clubs","name":"10C"},{"value":7,"shape":"Diamonds","name":"7D"},{"value":13,"shape":"Clubs","name":"KC"},{"value":3,"shape":"Diamonds","name":"3D"}]))
        .toEqual([5, 14, 11, 10, 7, 3]);
});

test("Ranking - Full House", () =>{
    expect(ranking([{"value":12,"shape":"Hearts","name":"QH"},{"value":8,"shape":"Spades","name":"8S"},{"value":12,"shape":"Hearts","name":"QH"},{"value":4,"shape":"Diamonds","name":"4D"},{"value":8,"shape":"Clubs","name":"8C"},{"value":12,"shape":"Spades","name":"QS"},{"value":13,"shape":"Diamonds","name":"KD"}]))
        .toEqual([6, 12, 8]);
});

test("Ranking - Foursome", () =>{
    expect(ranking([{"value":11,"shape":"Clubs","name":"JC"},{"value":3,"shape":"Clubs","name":"3C"},{"value":3,"shape":"Diamonds","name":"3D"},{"value":3,"shape":"Spades","name":"3S"},{"value":9,"shape":"Spades","name":"9S"},{"value":11,"shape":"Spades","name":"JS"},{"value":3,"shape":"Hearts","name":"3H"}]))
        .toEqual([7, 3, 11]);
});

test("Ranking - Straight Flush", () =>{
    expect(ranking([{"value":13,"shape":"Clubs","name":"KC"},{"value":12,"shape":"Clubs","name":"QC"},{"value":11,"shape":"Clubs","name":"JC"},{"value":10,"shape":"Clubs","name":"10C"},{"value":9,"shape":"Clubs","name":"9C"},{"value":8,"shape":"Clubs","name":"8C"},{"value":7,"shape":"Clubs","name":"7C"}]))
        .toEqual([8, 13]);
});

test("Ranking", () =>{
    expect(ranking([{"value":1,"shape":"Clubs","name":"1C"},{"value":7,"shape":"Diamonds","name":"7D"},{"value":3,"shape":"Spades","name":"3S"},{"value":5,"shape":"Hearts","name":"5H"},{"value":5,"shape":"Clubs","name":"5C"},{"value":4,"shape":"Diamonds","name":"4D"},{"value":2,"shape":"Clubs","name":"2C"}]))
        .toEqual([4, 5]);
});

test("Ranking", () =>{
    expect(ranking([{"value":4,"shape":"Clubs","name":"4C"},{"value":3,"shape":"Diamonds","name":"3D"},{"value":11,"shape":"Clubs","name":"JC"},{"value":11,"shape":"Hearts","name":"JH"},{"value":12,"shape":"Clubs","name":"QC"},{"value":10,"shape":"Spades","name":"10S"},{"value":7,"shape":"Hearts","name":"7H"}]))
        .toEqual([1, 11, 12, 10, 7]);
});

//test("Ranking", () =>{
//    expect(ranking())
//        .toEqual();
//});

//test("Ranking", () =>{
//    expect(ranking())
//        .toEqual();
//});

//test("Ranking", () =>{
//    expect(ranking())
//        .toEqual();
//});