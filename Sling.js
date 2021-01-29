class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 200
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling); 
    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
        line(posA.x, posA.y, posB.x, posB.y);
    }
}
