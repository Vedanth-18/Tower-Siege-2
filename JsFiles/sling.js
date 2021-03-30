class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.image = loadImage("assets/sling.png");
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.image, 200,590, 150,150);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,10);
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y - 40);
            pop();
        }
    }
    attach(body){
        this.sling.bodyA = body;
    }
}