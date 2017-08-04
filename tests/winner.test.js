const winner = require('../app/winner');

test("Winner", () =>{
    expect([
        {userName: "Player1", rank: [0, 14, 13, 10, 8, 7]},
        {userName: "Player2", rank: [1, 11, 14, 6, 5]},
        {userName: "Player3", rank: [0, 12, 10, 9, 8, 7]}
    ]).toBe(["Player2"]);
});