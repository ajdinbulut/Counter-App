var counter = function () {
    document.getElementById('number').innerHTML = store.number;
}
var events = function () {
    document.getElementById('incr').addEventListener('click', function () {
        increase();
        counter();
    })
    document.getElementById('decr').addEventListener('click', function () {
        decrease();
        counter();
    })
    document.getElementById('clr').addEventListener('click', function () {
        clear();
        counter();
    })
    document.getElementById('sub').addEventListener('click', function () {
        value();
    })
}
var store = {
    number: 0
}
var increase = function () {
    store.number++
}
var decrease = function () {
    store.number--
}
var clear = function () {
    store.number = 0;
}
var init = function () {
    events();
    counter();
}
var value = function () {
    var newNum = document.getElementById('num');
    number = number + newNum;
}
init();
