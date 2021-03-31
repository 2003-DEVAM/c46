class Bottle {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':1,
        'density':1
        }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/bottle1.png");
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    imageMode(CENTER);
    fill("aqua");
    image(this.image,0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-5
      pop();
    }
  }
};