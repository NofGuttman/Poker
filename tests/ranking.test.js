const ranking = require('../app/ranking');

test("Ranking", () =>{
    expect(ranking([{"value":1,"shape":"Diamonds","name":"1D"},{"value":5,"shape":"Hearts","name":"5H"},{"value":9,"shape":"Hearts","name":"9H"},{"value":10,"shape":"Hearts","name":"10H"},{"value":11,"shape":"Spades","name":"JS"},{"value":4,"shape":"Hearts","name":"4H"},{"value":8,"shape":"Clubs","name":"8C"}]))
        .toEqual([0, 14, 11, 10, 9, 8]);
});