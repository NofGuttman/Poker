const winner = require('../app/winner');

test("Winner", () =>{
    expect([
        {userName: "Player1", rank: [0, 14, 13, 10, 8, 7]},
        {userName: "Player2", rank: [1, 11, 14, 6, 5]},
        {userName: "Player3", rank: [0, 12, 10, 9, 8, 7]}
    ]).toBe(["Player2"]);
});

test("Winner", () =>{
    expect([
        {userName: "Player1", rank: [2, 13, 11, 8]},
        {userName: "Player2", rank: [1, 11, 14, 6, 5]},
        {userName: "Player3", rank: [0, 12, 10, 9, 8, 7]}
    ]).toBe(["Player1"]);
});

test("Winner", () =>{
    expect([
        {userName: "Player1", rank: [4, 10]},
        {userName: "Player2", rank: [1, 11, 14, 6, 5]},
        {userName: "Player3", rank: [4, 13]}
    ]).toBe(["Player3"]);
});

test("Winner", () =>{
    expect([
        {userName: "Player1", rank: [1, 14, 13, 10, 8, 7]},
        {userName: "Player2", rank: [1, 14, 13, 10, 8, 7]},
        {userName: "Player3", rank: [0, 12, 10, 9, 8, 7]}
    ]).toBe(["Player1", "Player2"]);
});