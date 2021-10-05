//SNAKE CODE

import { getInputDirection } from "./input.js"

//how many times the snake moves per second
export const SNAKE_SPEED = 5

//Array of X Y positions that essentially draw the snake
const snakeBody = [ { x: 11, y: 11 } ]
//the snake expansion
let newSegments = 0

export function update() {
    //this adds the new segments to the snake when it eats food
    addSegments()

    const inputDirection = getInputDirection()
    //this moves the second piece always to where the first piece used to be in the last step
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    //update the head (1st piece) based on where we move
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}   


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        //setting the x y position of the snakein the grid
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        //adding the styles to the snake
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

//this loops through each segment of snake to see if it's on the food
//we are comparing the position to the segment position to see if they're equal
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        //this checks if the snake head is on any part of the snake
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

//if these two positions are exactly the same, the onSnake function will return true
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
    
}

//we are taking the last element of the snake and duplicating it to the end of the snake
function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody [snakeBody.length -1] })
    }

    //this means that the snake doesn't endlessly add elements, just 1 element
    newSegments = 0
}