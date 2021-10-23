class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
  shoot(){

//making cannon and ball angle same and storing in a variable also minus it with a small no;
var newAngle = cannon.angle-28;

// changing degrees to radian formula is angle*(3.14/180);
newAngle = newAngle*(3.14/180);

//  create a variable and put the radian angle inside the formula;
var velocity = p5.Vector.fromAngle(newAngle);

// vector makes the velocity slow so letus multiply with a number;
velocity.mult(0.5);

Body.setStatic(this.body,false);
Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});


  }
}

 
