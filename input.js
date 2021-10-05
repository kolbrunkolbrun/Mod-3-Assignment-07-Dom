let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


//this links position of the snake to keyboard
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        //this IF loop means that you can't go backwards
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: -1 }
        break
            case 'ArrowDown':
            //this IF loop means that you can't go backwards
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
                case 'ArrowLeft':
                //this IF loop means that you can't go backwards
                if (lastInputDirection.x !== 0) break
                inputDirection = { x: -1, y: 0 }
                break
                    case 'ArrowRight':
                    //this IF loop means that you can't go backwards
                    if (lastInputDirection.x !== 0) break
                    inputDirection = { x: 1, y: 0 }
                    break
    }
})

export function getInputDirection() {
    //this makes it not possible for the snake to go "backwards"
    lastInputDirection = inputDirection

    return inputDirection
}