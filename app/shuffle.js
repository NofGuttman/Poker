module.exports = function(list){
    for(i in list){
        let rand = Math.floor(Math.random() * list.length);
        [list[i], list[rand]] = [list[rand], list[i]]
    }
    return list;
}