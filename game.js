let tableroPlayer = [

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3", "j3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4", "j4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5", "j5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6", "j6"],
]

    let snake = []
function startSnake() {
    positionXsnake = Math.floor(Math.random() * 10)
    positionYsnake = Math.floor(Math.random() * 6)
    console.log(positionXsnake,positionYsnake)

    snake = [(tableroPlayer[positionYsnake][positionXsnake])]
    document.getElementById(snake[0]).style.background = "blue"
    console.log(snake[0])
}
startSnake();

function startFood() {
    let positionXfood = Math.floor(Math.random() * 10)
    let positionYfood = Math.floor(Math.random() * 6)
    console.log(positionXfood,positionYfood)
    console.log(tableroPlayer[positionYfood][positionXfood])
    
    if ([(tableroPlayer[positionYfood][positionXfood])] != snake[0]){
        food = [(tableroPlayer[positionYfood][positionXfood])]
        document.getElementById(food[0]).style.background = "green"
        console.log("Food y snake son distintos")
    }else{
        console.log("Food y snake son iguales")
        positionXfood = Math.floor(Math.random() * 10)
        positionYfood = Math.floor(Math.random() * 6)
        food = [(tableroPlayer[positionYfood][positionXfood])]
        document.getElementById(food[0]).style.background = "green"
    }
    
}
startFood();
