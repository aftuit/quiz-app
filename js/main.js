
// INDEX
console.log('ishladi:');


var number = 5;

function counter() {
    document.getElementById('counter').style.transform = 'scale(10)'
    number--;
    if (number == 0) {
        k=0;
        document.getElementById('container-fluid').style.display = 'none';
        document.getElementById('row').style.display = 'block'
    }
    if (number < 4 && number > 0) {
        document.getElementById('counter').innerHTML = number;
    }

}


var deadline = 0;
var test__number = 1;
document.getElementById('test__number').innerHTML = test__number;
function upperTestNumber() {
    test__number++;
    document.getElementById('test__number').innerHTML = test__number;
    if (test__number == 16) {
        document.getElementById('total-time').innerHTML = 10*k.toFixed(1) + ' sekund';
        k=0;
        document.getElementById('row').style.display = 'none';
        document.getElementById('container_result').style.display = 'flex';

    }
}

var NUMBERS = {
    NUMBER_1: 0,
    NUMBER_2: 0,
    ar: '',
    id: 0,
    answers: [],
    cards: [],
    trueSum: 0,
    wrongSum: 0

}

var eachTestTimer = 3;

function positionNumbers() {
    NUMBERS.NUMBER_1 = parseInt(Math.random() * 10);
    document.getElementById('number-1').innerHTML = NUMBERS.NUMBER_1;

    NUMBERS.NUMBER_2 = parseInt(Math.random() * 10);
    document.getElementById('number-2').innerHTML = NUMBERS.NUMBER_2;

    NUMBERS.ar = Math.random() * 2;
    NUMBERS.ar = parseInt(NUMBERS.ar);
    (NUMBERS.ar == 1) ? NUMBERS.ar = "+" : NUMBERS.ar = "-";
    document.getElementById('arr').innerHTML = NUMBERS.ar;
}

positionNumbers();


function appearNumber() {
    NUMBERS.answers[0] = (eval(`${NUMBERS.NUMBER_1}  ${NUMBERS.ar}  ${NUMBERS.NUMBER_2}`));
    NUMBERS.answers[1] = 0;
    NUMBERS.answers[2] = 1;
    NUMBERS.answers[3] = 2;

    NUMBERS.id = parseInt(Math.random() * 3);

    document.getElementById('A' + NUMBERS.id).value = NUMBERS.answers[0].toFixed(0);

    NUMBERS.answers.map((value, index) => {
        if (index !== NUMBERS.id) {
            value = Math.random() * 10;
            let k = document.getElementById('A' + `${index}`);
            k.value = value.toFixed(0);
        }
    }
    )
}
appearNumber();




let result = '';
let i = 0;

function trueAnswer(id) {
    let istrue = false;
    if (document.getElementById(id).value == NUMBERS.answers[0]) {
        istrue = true;
    }

    if (istrue) {
        result = "<div class='drawnCard trueAnswer'> </div>";
        NUMBERS.trueSum++;
        document.getElementById('trueAnswer').innerHTML = NUMBERS.trueSum;

    } else {
        result = "<div class='drawnCard falseAnswer'> </div>";
        NUMBERS.wrongSum++
        document.getElementById('wrongAnswer').innerHTML = NUMBERS.wrongSum;
    }


    upperTestNumber();
    positionNumbers();
    appearNumber();

    document.getElementById('result').innerHTML += result;
    return istrue;

}

var k=0; 
function myFunction() {

    setInterval(function(){
        if(40*(k) <= 100){
            document.getElementById('progress-bar').style.width = 40*(k) + '%'
            k+=0.001;
        }    else {
            document.getElementById('total-time').innerHTML = 10*k.toFixed(1) + ' sekund';
            document.getElementById('row').style.display = 'none';
            document.getElementById('container_result').style.display = 'flex';
          
        }
    }, 10)
 }
 myFunction()








