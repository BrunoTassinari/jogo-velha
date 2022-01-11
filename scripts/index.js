let playerTime = 0;
let players = ['x','o']
let positions = ['','','','','','','','',''];


const divResult = document.querySelector('#finalGame');
divResult.classList.add('flex');
divResult.classList.add('colum')
const h2 = document.createElement('h2');
const btn = document.createElement('button');


document.addEventListener('DOMContentLoaded', crossDiv)


function crossDiv(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
        
    })

}


function handleClick(event) {
    if(positions[event.target.id] == '' && !isWin()) {
        event.target.classList.add(players[playerTime])
        positions[event.target.id] = players[playerTime]
        
        if(isWin()){
            setTimeout(()=>{
                gameEnd()      
            }, 500)
        } else if(isGameOver()){
            setTimeout(()=>{
                gameOver()
            }, 500)
        } else {
            attPlayer()
        }

        

        
    }

    
  
}

function attPlayer(){
    if(playerTime == 0){
        playerTime = 1
    } else {
        playerTime = 0
    }
}

function isWin(){
    let winnerPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];


    for(let i = 0; i < winnerPositions.length; i++){

        let sequenciaWin = winnerPositions[i]

        winPosition1 = sequenciaWin[0];
        winPosition2 = sequenciaWin[1];
        winPosition3 = sequenciaWin[2];

        if(positions[winPosition1] == positions[winPosition2] && positions[winPosition1] == positions[winPosition3] && positions[winPosition1] != 0){
            return true;
        }
        
    }

    return false

}


function gameEnd(){

    let winner;

    if(players[playerTime] == 'x'){
        winner = 'X';
    }

    if(players[playerTime] == 'o'){
        winner = 'O';
    }
    
    //Criando um elemento h2
    let winnerText = document.createTextNode('Vencedor: '+ winner)
    h2.appendChild(winnerText);
    h2.classList.add('title')
    divResult.appendChild(h2);

    createButton()
    document.addEventListener('DOMContentLoaded', crossDiv) 

}


function isGameOver(){
    let aux = 0;
    for(let i=0; i < positions.length; i++){
        if(positions[i] != ''){
            aux++
        }
    }

    if(aux == 9){
        return true;
    } 

    return false;
}

function gameOver(){
    let gameOverText = document.createTextNode('Velha!');
    h2.appendChild(gameOverText);
    h2.classList.add('title')
    divResult.appendChild(h2);

    createButton();

}


function createButton(){
    let buttonText = document.createTextNode('Recomecar');
    btn.appendChild(buttonText);
    btn.classList.add('button-restart')
    divResult.appendChild(btn)


    btn.addEventListener('click', ()=>location.reload());
}
