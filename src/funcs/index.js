import nodes from '../domNodes' 

// return true if the rectangle and circle are colliding
export const RectCircleColliding = (circle, rect) => {
    circle.r = 40

    var distX = Math.round(Math.abs(circle.x - rect.x - rect.width / 2))
    var distY = Math.round(Math.abs(circle.y - rect.y - rect.height / 2))

    if (distX > rect.width / 2 + circle.r) {
        return false
    }
    if (distY > rect.height / 2 + circle.r) {
        return false
    }

    if (distX <= rect.width / 2) {
        return true
    }
    if (distY <= rect.height / 2) {
        return true
    }

    var dx = distX - rect.width / 2
    var dy = distY - rect.height / 2
    return dx * dx + dy * dy <= circle.r * circle.r
}

export const setBallPosition = (position) => {
    nodes.character.style.top = position + 'px' 
}

export const scoreRating = (score) => {
    if(score < 400)
        return "Very Bad"
    else if(score > 400 && score < 600)
        return "Not Bad"
    else if(score > 600 && score < 800)
        return "Well Done"
    else if(score > 800 && score < 1000)
        return "Good Record"
    else if (score > 1000)
        return "Your Are a Rock Start"
}