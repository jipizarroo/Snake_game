let tableroPlayer = [ //this is the board game

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3", "j3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4", "j4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5", "j5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6", "j6"],
]

let snake = []
let bodySnake = [];
let score = 0;

function startSnake() {
    positionXsnake = Math.floor(Math.random() * 10)
    positionYsnake = Math.floor(Math.random() * 6)

    snake = [(tableroPlayer[positionYsnake][positionXsnake])]
    document.getElementById(snake[0]).style.background = "blue"

}
startSnake(); //this is the function that spawns the head of the snake into the board

function startFood() {
    let positionXfood = Math.floor(Math.random() * 10)
    let positionYfood = Math.floor(Math.random() * 6)
    if ([(tableroPlayer[positionYfood][positionXfood])] != snake[0]) {
        food = [(tableroPlayer[positionYfood][positionXfood])]
        document.getElementById(food[0]).style.background = "green"
    } else {
        positionXfood = Math.floor(Math.random() * 10)
        positionYfood = Math.floor(Math.random() * 6)
        food = [(tableroPlayer[positionYfood][positionXfood])]
        document.getElementById(food[0]).style.background = "green"
    }
}
startFood(); //this is the function that spawns the food, it also tells that the food cant be spawned in the same coordinates has the head is.



function snakeEats() {
    if (snake[0] === food[0]) {     //When the head of the snake hits the food, it will increase the score of the game.
        score++;
        startFood();
    }
}   
let d;

document.addEventListener("keydown", direction);
function direction(event) {
    if ((event.keyCode == 37 || event.keyCode == 65) && d != "RIGHT") {
        if (snake.length > 0) {
            d = "LEFT";
            document.getElementById(snake[0]).style.background = "white" //when moving, the background of the head of the snake will turn white.
            for(let i = 0; i < bodySnake.length - 1; i++){                  // it will check if there is some lenght in the bodySnake (witch is sapareted from the head), then for each position it will turn the background white.
                document.getElementById(bodySnake[i]).style.background = "white"  
            }
            positionBodySnake = [(tableroPlayer[positionYsnake][positionXsnake])] //when moving it will save the position of the head as the position in the body.
            bodySnake.unshift(positionBodySnake);  // this will push the saved position as the first in the bodysnake array.
            bodySnake.splice(score + 1, 1000); // 
            positionXsnake = positionXsnake - 1 //this gives the new X coordinate to move one to the left.
            snake = [(tableroPlayer[positionYsnake][positionXsnake])] //this gives the new coordinate to the head of the snake.
            document.getElementById(snake[0]).style.background = "blue"
            for(let i = 0; i < bodySnake.length- 1 ; i++){
                document.getElementById(bodySnake[i]).style.background = "red" 
                
            }      
        }

    } else if ((event.keyCode == 38 || event.keyCode == 87) && d != "DOWN") {
        d = "UP";
        document.getElementById(snake[0]).style.background = "white"
        for(let i = 0; i < bodySnake.length - 1; i++){
            document.getElementById(bodySnake[i]).style.background = "white"  
        }
        positionBodySnake = [(tableroPlayer[positionYsnake][positionXsnake])]
        bodySnake.unshift(positionBodySnake); 
        bodySnake.splice(score + 1, 1000);
        positionYsnake = positionYsnake - 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"
        for(let i = 0; i < bodySnake.length- 1 ; i++){
            document.getElementById(bodySnake[i]).style.background = "red" 
            
        }

    } else if ((event.keyCode == 39 || event.keyCode == 68) && d != "LEFT") {
        d = "RIGHT";
        document.getElementById(snake[0]).style.background = "white"
        for(let i = 0; i < bodySnake.length - 1; i++){
            document.getElementById(bodySnake[i]).style.background = "white"  
        }
        positionBodySnake = [(tableroPlayer[positionYsnake][positionXsnake])]
        bodySnake.unshift(positionBodySnake); 
        bodySnake.splice(score + 1, 1000);
        positionXsnake = positionXsnake + 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"
        for(let i = 0; i < bodySnake.length- 1 ; i++){
            document.getElementById(bodySnake[i]).style.background = "red" 
            
        }
    } else if ((event.keyCode == 40 || event.keyCode == 83)&& d != "UP") {
        d = "DOWN";
        document.getElementById(snake[0]).style.background = "white"
        for(let i = 0; i < bodySnake.length - 1; i++){
            document.getElementById(bodySnake[i]).style.background = "white"  
        }
        positionBodySnake = [(tableroPlayer[positionYsnake][positionXsnake])]
        bodySnake.unshift(positionBodySnake); 
        bodySnake.splice(score + 1, 1000);
        positionYsnake = positionYsnake + 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"
        for(let i = 0; i < bodySnake.length- 1 ; i++){
            document.getElementById(bodySnake[i]).style.background = "red" 
            
        }
    }
    snakeEats();

}

function empujarCoordenadas() {
    nuevoCuerpo = [(tableroPlayer[positionYsnake + 1][positionXsnake])]
    snake.push(nuevoCuerpo)
}