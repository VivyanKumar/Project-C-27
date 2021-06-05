class Bob{
    constructor(x,y,radius) {
        
        var options = {
            isStatic : false,
            restitution : 1.2,
            friction : 0.5,
            density:0.7
        };
        this.radius = radius;
        this.body = Bodies.circle(x,y,(this.radius/2),options);
        World.add(world,this.body);
        

    }

         display() {
            push();
            translate(this.body.position.x,this.body.position.y);
            angleMode(RADIANS);
            rotate(this.body.angle);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius,this.radius);
            pop();
        }
        
	}