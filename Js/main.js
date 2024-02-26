var increace = document.getElementById("increas");
var decreace = document.getElementById("decrease");
// values:-
var valueOne = document.getElementById("incrementTexe");
var valueTwo = document.getElementById("incrementTexeTwo");
var valueThree = document.getElementById("incrementTexeThree");
var valueFour = document.getElementById("incrementTexeFour");
var valueFive = document.getElementById("incrementTexeFive");
var valueSix = document.getElementById("incrementTexeSix");
let Values = [valueOne,valueTwo,valueThree,valueFour,valueFive,valueSix];
// End Values.
var mount = document.getElementById("mount");
var total =document.getElementById("total");
// Add & Delete:-
var add = document.getElementById ("addButton");

let box = [];

// Set Increment Function:-
function increaceValue(number){
        var inc = Values[number-1].innerHTML++
        box.push(inc);
        console.log(box);
        getSumTotal(number)
        
}

// Set Decreas Function:-
function decreaceValue(number){
        if(Values[number-1].innerHTML>0){
                var dec = Values[number-1].innerHTML--
        }
        box.push(dec)
        console.log(box);
}


// Set total Function:-
function getSumTotal(number){
        let result = (Values[number-1].innerHTML)*(mount.innerHTML)
        mount.innerHTML = result
        total.innerHTML = "Total Amount:" +result
        console.log(result);

}