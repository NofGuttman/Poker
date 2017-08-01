//To do: add highest cards except for the rank

let example = [{"value":6,"shape":"Diamonds","name":"9D"},{"value":7,"shape":"Clubs","name":"2C"},{"value":8,"shape":"Hearts","name":"8H"},{"value":11,"shape":"Spades","name":"7S"},{"value":11,"shape":"Hearts","name":"10H"},{"value":10,"shape":"Hearts","name":"6H"},{"value":12,"shape":"Diamonds","name":"QD"}]

//=================================================is=Straight=Flush============================================

function isStraightFlush(cards){
    let shapesList = {
        "Spades": [],
        "Hearts": [],
        "Clubs": [],
        "Diamonds": []
    }

    for(let i in cards){
        shapesList[cards[i]["shape"]].push(cards[i]["value"]);
        if (cards[i]["value"] === 1) {
            shapesList[cards[i]["shape"]].push(14)
        }
    }
    
    let higherValue = 0;
    
    for(let list in shapesList){
        for(let item in shapesList[list]){
            let x = shapesList[list][item]
            let cnt = 1;
            while(true){
                if(shapesList[list].includes(x + 1)){
                    x += 1;
                    cnt += 1
                } else {
                    cnt = 1;
                    break;
                }
                if(cnt === 5){
                    if(x > higherValue){
                        higherValue = x;
                        break;
                    }
                }
            }
        }
    }
    
    if(higherValue !== 0){
        return [8, higherValue];
    } else {
        return false;
    }
}

//=================================================is=Four=of=a=Kind====================================

function isFourOfaKind(cards){
    let listOfValues = {};
    let numList = [];
    let result = [7];
    for(let i = 1; i <= 13; i++){
        listOfValues[i] = 0;
        for(let j in cards){
            if(cards[j]["value"] == i){
                listOfValues[i] += 1;
            }
        }
        listOfValues[14] = listOfValues[1];
    }
    for(let i = 14; i > 1; i--){
        if(listOfValues[i] === 4){
            result.push(i);
            break;
        }
    }
    for(let i in cards){
        numList.push(cards[i]["value"]);
    }
    if(numList.includes(1)){
        numList.push(14);
    }
    let sortedNumList = numList.sort(function(a, b){return a-b});
    if(result.length == 2){
        while(sortedNumList){
            let number = sortedNumList.pop();
            if(number !== result[1]){
                result.push(number);
                return result;
            }
        }
    }
    return false;
}

//================================================is=Full=House==========================================

function isFullHouse(cards){
    let listOfValues = [];
    let timeOfValues = {};
    let higher = 0;
    let lower = 0;
    for(let i in cards){
        listOfValues.push(cards[i]["value"]);
    }
    for(let i = 1; i <= 13; i++){
        timeOfValues[i] = 0
        for(let j in listOfValues){
            if(i === listOfValues[j]){
                timeOfValues[i] += 1;
            }
        }
    }
    for(let i in timeOfValues){
        if(timeOfValues[i] === 3){
            if(i == 1){
                i = 14
            }
            if(i > higher){
                higher = +i;
            }
        }
    }
    for(let i in timeOfValues){
        if(timeOfValues[i] >= 2){
            if(i == 1){
                i = 14
            }
            if(i != higher && i > lower){
                lower = +i;
            }
        }
    }    
    if(higher !== 0 && lower !== 0){
        return [6, higher, lower]
    } else {
        return false
    }
}

//===================================================is=Flush===============================================

function isFlush(cards){
    let shapesList = {
        "Spades": [],
        "Hearts": [],
        "Clubs": [],
        "Diamonds": []
    }
    let result = [5];
    
    for(let i in cards){
        shapesList[cards[i]["shape"]].push(cards[i]["value"]);
    }
    
    for(let i in shapesList){
        if(shapesList[i].length >= 5){
            if(shapesList[i].includes(1)){
                shapesList[i].push(14);
            }
            let sortedList = shapesList[i].sort(function(a, b){return a-b});
            for(let j = 0; j < 5; j++){
                result.push(sortedList.pop())
            }
            return result;
        }
    }
    return false;
}

//===================================================is=Straight============================================

function isStraight(cards){
    let numList = []
    for(let i in cards){
        numList.push(cards[i]["value"]);
    }
    if(numList.includes(1)){
        numList.push(14);
    }
    let cnt = 1;
    for(let i in numList){
        let num = numList[i]
        while(true){
            if(numList.includes(num + 1)){
                cnt += 1;
                num += 1;
            } else {
                if(cnt >= 5){
                    return [4, num]
                } else {
                    cnt = 1;
                    break;
                }
            }
        }
    }
    return false
}

//==================================================is=Three=Of=a=Kind========================================

function isThreeOfaKind(cards){
    let result = [3];
    let listOfValues = {};
    for(let i = 1; i <= 13; i++){
        listOfValues[i] = 0;
        for(let j in cards){
            if(cards[j]["value"] == i){
                listOfValues[i] += 1;
            }
        }
        listOfValues[14] = listOfValues[1];
    }
    for(let i = 14; i > 1; i--){
        if(listOfValues[i] === 3){
            result.push(i);
            break;
        }
    }
    if(result.length == 2){
        let numList = [];
        for(let i in cards){
            numList.push(cards[i]["value"]);
        }
        if(numList.includes(1)){
            numList.push(14);
        }
        let sortedNumList = numList.sort(function(a, b){return a-b});
        while(sortedNumList){
            let number = sortedNumList.pop();
            if(number !== result[1]){
                result.push(number);
            }
            if(result.length === 4){
                return result;
            }
        }
    return false;
    }
}

//==================================================is=Two=Pairs===============================================

function isTwoPairs(cards){
    let listOfValues = {};
    let result = [2];
    for(let i = 1; i <= 13; i++){
        listOfValues[i] = 0;
        for(let j in cards){
            if(cards[j]["value"] == i){
                listOfValues[i] += 1;
            }
        }
        listOfValues[14] = listOfValues[1];
    }
    for(let i = 14; i > 1; i--){
        if(listOfValues[i] === 2){
            result.push(i)
        }
    }
    if(result.length === 3){
        let numList = [];
        for(let i in cards){
            numList.push(cards[i]["value"]);
        }
        if(numList.includes(1)){
            numList.push(14);
        }
        let sortedNumList = numList.sort(function(a, b){return a-b});
        while(sortedNumList){
            let number = sortedNumList.pop();
            if(number !== result[1] && number !== result[2]){
                result.push(number);
            }
            if(result.length === 4){
                return result;
            }
        }
    }
    return false;
}

//===================================================is=One=Pair================================================

function isOnePair(cards){
    let result = [1];
    let listOfValues = {};
    for(let i = 1; i <= 13; i++){
        listOfValues[i] = 0;
        for(let j in cards){
            if(cards[j]["value"] == i){
                listOfValues[i] += 1;
            }
        }
        listOfValues[14] = listOfValues[1];
    }
    for(let i = 14; i > 1; i--){
        if(listOfValues[i] === 2){
            result.push(i);
            break;
        }
    }
    if(result.length === 2){
        let numList = [];
        for(let i in cards){
            numList.push(cards[i]["value"]);
        }
        if(numList.includes(1)){
            numList.push(14);
        }
        let sortedNumList = numList.sort(function(a, b){return a-b});
        while(sortedNumList){
            let number = sortedNumList.pop();
            if(number !== result[1] && number !== result[2]){
                result.push(number);
            }
            if(result.length === 5){
                return result;
            }
        }
    }
    return false;
}

//==============================================is=Nothing==========================================================

function isNothing(cards){
    let numList = [];
    let result = [0];
    for(let i in cards){
        numList.push(cards[i]["value"]);
    }
    if(numList.includes(1)){
        numList.push(14);
    }
    let sortedNumList = numList.sort(function(a, b){return a-b});
    for(let i = 0; i < 5; i++){
        result.push(sortedNumList.pop());
    }
    return result;
}

//==================================================================================================================

function showMeWhatYouGot(cards){
    
    for(let i in cards){ cards[i]["value"] = +cards[i]["value"] } // Normalize numbers from string to int ( "12" ==> 12 )
    
    if(isStraightFlush(cards)) return isStraightFlush(cards);   // [8, highest card]
    if(isFourOfaKind(cards)) return isFourOfaKind(cards);       // [7, Foursome, highest card]
    if(isFullHouse(cards)) return isFullHouse(cards);           // [6, Threesome, Pair]
    if(isFlush(cards)) return isFlush(cards);                   // [5, highest cards...]
    if(isStraight(cards)) return isStraight(cards);             // [4, highest card]
    if(isThreeOfaKind(cards)) return isThreeOfaKind(cards);     // [3, Threesome, highest cards...]
    if(isTwoPairs(cards)) return isTwoPairs(cards);             // [2, Higher pair, Lower pair, Highest card]
    if(isOnePair(cards)) return isOnePair(cards);               // [1, Pair, highest cards...] BUG IN HERE! please fix.
    return isNothing(cards);                                    // [0, highest cards...]
}

//==================================================================================================================

module.exports = showMeWhatYouGot;

//console.log(isStraightFlush(example));
//console.log(isFourOfaKind(example));
//console.log(isFullHouse(example));
//console.log(isFlush(example));
//console.log(isStraight(example));
//console.log(isThreeOfaKind(example));
//console.log(isTwoPairs(example));
//console.log(isOnePair(example));
//console.log(isNothing(example));

