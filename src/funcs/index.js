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

export default RectCircleColliding
