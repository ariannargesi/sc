  // return true if the rectangle and circle are colliding
 export const RectCircleColliding = (circle,rect) => {
    let distX = Math.abs(circle.x - rect.x-rect.width  /2);
    let distY = Math.abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + 10)) { return false; }
    if (distY > (rect.height/2 + 10)) { return false; }

    if (distX <= (rect.width/2)) { return true; } 
    if (distY <= (rect.height/2)) { return true; }

    let dx=distX-rect.width/2;
    let dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(10*10)); 
}
