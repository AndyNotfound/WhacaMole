const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;
let currentTime = 60;
let timerId = null;
let hitPosition;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
};

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition){
            result++
            score.innerText = result;
            hitPosition = null;
        }
    })
})

function moveMole (){
    timerId = setInterval(randomSquare, 500);
}

moveMole ();

function countDown (){
    currentTime--
    time.textContent = currentTime;

    if (currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over!');
    }
}

let countDownTimerId = setInterval(countDown, 1000);