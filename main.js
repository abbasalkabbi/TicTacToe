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
    let win_cells=null;
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
            win_cells=i;
            break;
        }
    }
    if(roundWon){
        
        text.textContent=`${currentPlayer}' Win`
        running=false;
        switch(win_cells) {
            case 0:  update_css('cell_1')
            break;
            case 1:  update_css('cell_1')
            break;
            case 2:  update_css('cell_1')
            break;
            case 3:  update_css('cell_2')
            break;
            case 4:  update_css('cell_2')
            break;
            case 5:  update_css('cell_2')
            break;
            case 6:  update_css('cell_3')
            break;
            case 7:  update_css('cell_4')
            break;
        
        }
        
    }else if(!options.includes("")){
        console.log("Draw")
        text.textContent=`Draw`
        running=false

    }else{
        changePlayer()
    }
}
function update_css(css){
    console.log(css)
    cells[cellWin[0]].className+= ` cell-win ${css}`
    cells[cellWin[1]].className+=` cell-win ${css}`
    cells[cellWin[2]].className+=` cell-win ${css}`
}
function restart(){

    location.reload();
}