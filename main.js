const cells=document.querySelectorAll(".cell");
const text=document.querySelector('.footer span');

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;
let cellWin=[];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
initializeGame()
function initializeGame(){
    running=true;
    cells.forEach(cell=>cell.addEventListener('click',clicedcell))

}
function clicedcell(){
    const cellIndex = this.getAttribute("cellindex");
    if(options[cellIndex] !=''){
        return
    }else if(running){
        updateCell(this, cellIndex)
        checkWinner()
        
    }
}

function changePlayer(){
    currentPlayer = (currentPlayer == 'X')?'O':'X';
    text.textContent=`${currentPlayer}'S Turn`
}
function updateCell(cell,index){
    options[index]=currentPlayer;
    cell.textContent = currentPlayer;
    console.log(options)
}
function checkWinner(){
    let roundWon = false;
    
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            cellWin=condition;
            break;
        }
    }
    if(roundWon){
        update_css()
        text.textContent=`${currentPlayer}' Win`
        running=false;
        setTimeout(restart,3000)
    }else if(!options.includes("")){
        console.log("Draw")
        text.textContent=`Draw`
        setTimeout(restart(),3000)
        running=false

    }else{
        changePlayer()
    }
}
function update_css(){
    cells[cellWin[0]].className+=' cell-win'
    cells[cellWin[1]].className+=' cell-win'
    cells[cellWin[2]].className+=' cell-win'
}
function restart(){

    location.reload();
}