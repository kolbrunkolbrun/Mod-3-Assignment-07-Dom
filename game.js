//GAME CODE
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//Game loop function
//Constantly updates snake's position
function main(currentTime) {
    //if you lose the game the page refreshes
    if (gameOver) {
        if (confirm('Oops! Now you are dead.')) {
            window.location = '/'
        }
        return
    }
    
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
   
    lastRenderTime = currentTime

    update()
    draw()
    
} 

window.requestAnimationFrame(main)

//calling the function
function update() {
    updateSnake()
    updateFood()
    checkDeath()

}

//calling the function
function draw() {
    //removes last parts of snake as it moves - this clears the html to nothing in each step
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}