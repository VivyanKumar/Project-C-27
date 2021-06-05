class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var rope_options={
                bodyA : bodyA,
                bodyB : bodyB,
                pointB : {x : this.offsetX, y : this.offsetY}
        };

        this.constraint = Constraint.create(rope_options);
        World.add(world,this.constraint);
    }
        display(){

            var pointA = this.constraint.bodyA.position;
            var pointB = this.constraint.bodyB.position;

            var Anchor1X = pointA.x;
            var Anchor1Y = pointA.y;

            var Anchor2X = pointB.x + this.offsetX;
            var Anchor2Y = pointB.y + this.offsetY;

            push();
            stroke("black");
            strokeWeight(2);
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
            pop();
        }
}