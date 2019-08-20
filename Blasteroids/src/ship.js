
const MovingObject = require("./moving_object.js")
const Utils = require("./utils.js");
const Bullet = require("./bullet.js");



function Ship(obj) {

  obj.vel = obj.vel || [0, 0];
  MovingObject.call(this, obj);
  
}

Utils.inherits(Ship, MovingObject);

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
  
};

Ship.prototype.fireBullet = function() {
  let newPos = this.pos.slice()
  let bullet = new Bullet({pos: newPos, game: this.game, vel: [1,1], color: '#FFFFFF', radius: 3});
  this.game.bullets.push(bullet);
  // debugger

};


module.exports = Ship;