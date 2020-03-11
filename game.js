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

}


let d;

document.addEventListener("keydown", direction);
function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") {
        if (snake.length == 1) {
            d = "LEFT";
            document.getElementById(snake[0]).style.background = "white"
            positionXsnake = positionXsnake - 1
            snake = [(tableroPlayer[positionYsnake][positionXsnake])]
            document.getElementById(snake[0]).style.background = "blue"
            if (snake[0] === food[0]) {
                nuevoCuerpo = [(tableroPlayer[positionYsnake][positionXsnake + 1])]
                bodySnake.push(nuevoCuerpo)
                startFood();
                for (let x = 0; x < snake.length; x++) {
                    document.getElementById(snake[x]).style.background = "blue"
                }
            }
        }
    } else if (event.keyCode == 38 && d != "DOWN") {
        d = "UP";
        document.getElementById(snake[0]).style.background = "white"
        positionYsnake = positionYsnake - 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"



    } else if (event.keyCode == 39 && d != "LEFT") {
        d = "RIGHT";
        document.getElementById(snake[0]).style.background = "white"
        positionXsnake = positionXsnake + 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"



    } else if (event.keyCode == 40 && d != "UP") {
        d = "DOWN";
        document.getElementById(snake[0]).style.background = "white"
        positionYsnake = positionYsnake + 1
        snake = [(tableroPlayer[positionYsnake][positionXsnake])]
        document.getElementById(snake[0]).style.background = "blue"
    }
}

function empujarCoordenadas() {
    nuevoCuerpo = [(tableroPlayer[positionYsnake + 1][positionXsnake])]
    snake.push(nuevoCuerpo)
}