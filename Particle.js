class Particle {
    constructor(x,y,r){
        var options ={
            isStatic : false,
            density : 0.5,
            friction : 0
        }
        this.r = 7,
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}