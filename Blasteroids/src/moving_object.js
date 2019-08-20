

function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
    );
    ctx.fill();
};

MovingObject.prototype.move = function(){
  
    this.pos = this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let xDist = this.pos[0] - otherObject.pos[0];
  let yDist = this.pos[1] - otherObject.pos[1];
  let total = this.radius + otherObject.radius;

  if (Math.sqrt(xDist ** 2 + yDist ** 2) <= total) {
    return true;
  }
  return false; 
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  this.game.remove(otherObject);
}




module.exports = MovingObject;

