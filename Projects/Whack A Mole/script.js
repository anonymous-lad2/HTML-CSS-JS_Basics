let currentMoleTile;
let currentPlantTile;
let gameOver = false;
let score = 0;
let startBtn = document.querySelector('.start')
let newBtn = document.querySelector('.new')

let startGame = new Audio('smb_warning.wav');
let moleSound = new Audio('smb_coin.wav');
let plantSound = new Audio('smb_mariodie.wav');
let empty = new Audio('smb_fireball.wav');


window.onload = function(){
    startBtn.classList.remove('btn');
}

startBtn.addEventListener('click' , () => {
    setGame();
    startGame.play();
    startBtn.classList.add('btn')
})

newBtn.addEventListener('click' , () => {
    setGame();
    startGame.play();
    newBtn.classList.add('btn')
})

function setGame(){
    // Set up the board of game
    
    gameOver = false;
    score = 0;
    document.querySelector('.score').innerText = score.toString();
    for(let i = 0; i < 9; i++){
        let title = document.createElement("div")
        title.id= i.toString();
        title.addEventListener('click' , selectTile);
        document.querySelector('.board').appendChild(title);
    }  

    setInterval(setMole , 1000);
    setInterval(setPlant , 2000)
}

function getRandom(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setMole(){

    if(gameOver){
        return
    }

    let mole = document.createElement("img");
    mole.src = './monty-mole.png'

    if(currentMoleTile){
        currentMoleTile.innerText = '';
    }

    let num = getRandom();

    if(currentPlantTile && currentPlantTile.id === num){
        return;
    }
    
    currentMoleTile = document.getElementById(num)
    currentMoleTile.appendChild(mole);
}

function setPlant(){

    if(gameOver){
        return
    }

    let plant = document.createElement('img')
    plant.src = './piranha-plant.png';

    if(currentPlantTile){
        currentPlantTile.innerText = '';
    }

    let num = getRandom();

    if(currentMoleTile && currentMoleTile.id === num){
        return;
    }

    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant)
}

function selectTile(){
    if(gameOver){
        return
    }

    if(this == currentPlantTile){
        gameOver = true;
        document.querySelector('.score').innerText = 'GAMEOVER:' +score.toString();
        plantSound.play();
        newBtn.classList.remove('btn');
    }

    else if(this == currentMoleTile){
        score += 10;
        document.querySelector('.score').innerText = score.toString();
        moleSound.play();
    }
    else{
        empty.play()
    }
}

// New Grame screen need to be updated  
// Game over should reflect there