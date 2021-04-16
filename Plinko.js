class Plinko{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, 5, options);
      this.rad = 5;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0,0,this.rad,this.rad);
      fill("yellow");
      pop();
    }
  };