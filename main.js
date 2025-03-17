const cells=document.querySelectorAll(".cell");


let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initializeGame()
function initializeGame(){
    running=true;
    cells.forEach(cell=>cell.addEventListener('click',clicedcell))

}
function clicedcell(){
    const cellIndex = this.getAttribute("cellindex");
    console.log(cellIndex)
    if(options[cellIndex] !=''){
        return
    }else{
        options[cellIndex]=currentPlayer;
        changePlayer()
        console.log(options)
    }
}
function changePlayer(){
    currentPlayer = (currentPlayer == 'X')?'O':'X';
}
function checkWinner(){
    
}