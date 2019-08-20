const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

function Asteroid(obj) {
  if (!obj.color) obj.color = "#FF00FF";
  if (!obj.radius) obj.radius = 12;
  MovingObject.call(this, obj);
  this.vel = Utils.randomVec(10); 
  
}

Utils.inherits(Asteroid, MovingObject);


module.exports = Asteroid;