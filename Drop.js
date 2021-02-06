class Drop{
    constructor(x, y) {
        var options = {
            'friction':0.1
        }
        this.body = Bodies.circle(x, y, options);
        
        
        
        World.add(world, this.body);
      }
      display(){
        var position=this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
      }
}