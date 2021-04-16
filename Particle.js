class Particle{
    constructor(x, y, rad) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3
      }
      this.body = Bodies.circle(x, y, rad, options);
      this.color=color(random(0,255), random(0,255), random(0,255));
      this.rad = rad;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color);
      ellipseMode(CENTER);
      pop();
    }
  };