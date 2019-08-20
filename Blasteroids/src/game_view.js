const Game = require("./game.js");
const MovingObject = require("./moving_object.js")
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Key = require("./keymaster.js");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  // this.bindKeyHandlers();



  setInterval(
    () => {
      this.bindKeyHandlers();
      this.game.step();
      this.game.draw(this.ctx);
    }, 20
  );
};

GameView.prototype.bindKeyHandlers = function(){

  let that = this;
  
  if (key.isPressed(37)) that.game.ship.power([-.2,0]);
  if (key.isPressed(38)) that.game.ship.power([0, -.2]);
  if (key.isPressed(39)) that.game.ship.power([.2, 0]);
  if (key.isPressed(40)) that.game.ship.power([0, .2]);
  if (key.isPressed(32)) that.game.ship.fireBullet();

};

module.exports = GameView;