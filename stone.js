class Stone{
constructor(x,y,width,height){
  this.image = loadImage("Sprites/stone.png");

var options={
isStatic:false,
restitution:0,
friction:1,
density:0.3,
}
this.body = Bodies.rectangle(x, y,width,height, options);
      this.width=width;
      this.height=height; 
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    
      pop();
    }
  };