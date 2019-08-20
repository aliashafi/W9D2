const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

function Bullet(obj) {
  this.radius = 1;
  MovingObject.call(this, obj);
}

Utils.inherits(Bullet, MovingObject);

module.exports = Bullet;