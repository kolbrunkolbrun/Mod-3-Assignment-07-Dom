import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
//this means that snake grows +1 when it eats food
const EXPANSION_RATE = 5

export function update() {
    //function that means: is snake on food? if yes, it's true, if no it's false
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}   


export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    //setting the x y position of the food  the grid
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    //adding the styles to the food
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)    
}

//this function randomizes food position
function getRandomFoodPosition() {
    let newFoodPosition
    //this loop means that the food will never be on snake's posiition
    //when the food is null, or on Snake, it gets a new position
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}