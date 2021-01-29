class Ball{
    constructor(x, y, radius){
        var options = {
            density: 1,
            restitution: 0.8,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body); 
    }

    display(){
        ellipseMode(RADIUS);
        fill('blue');
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}