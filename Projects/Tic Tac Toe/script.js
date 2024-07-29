const gameInfo = document.querySelector(".game-info")
const newBtnGame = document.querySelector(".btn")
const boxes = document.querySelectorAll(".box")

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

let currentPlayer;
let gameGrid;

function initGame(){
    currentPlayer = 'X';
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box , index) => {
        box.textContent = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index + 1}`;
    })
    newBtnGame.classList.remove("active")
    gameInfo.textContent = `Current Player - ${currentPlayer}`;
}

initGame()

function checkGameOver(){
    winningPosition.forEach((position) => {

        let winner = '';
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") &&
            gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]] ){
               
                winner = gameGrid[position[0]];

                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                boxes[position[0]].classList.add('win')
                boxes[position[1]].classList.add('win')
                boxes[position[2]].classList.add('win')
        }

        if(winner !== ''){
            gameInfo.textContent = `Winner - ${winner}`
            newBtnGame.classList.add("active")
            return;
        }

        let count = 0;
        gameGrid.forEach((box) => {
            if(box != ''){
                count++;
            }
        })
        if(count === 9){
            gameInfo.textContent = `It's a Draw!`
            newBtnGame.classList.add('active')
        }

    })
}

function swapTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
    }

    else{
        currentPlayer = 'X'
    }
    gameInfo.textContent = `Current Player - ${currentPlayer}`
}

function handleCheck(index){
    if(gameGrid[index] === ""){
        boxes[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none"
        swapTurn();
        checkGameOver();
    }
}

boxes.forEach((box , index) => {
    box.addEventListener('click' , ()=> {
        handleCheck(index);
    })
})

newBtnGame.addEventListener('click' , initGame)
