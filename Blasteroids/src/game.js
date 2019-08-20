const CONSTANTS = {
  DIM_X: 640,
  DIM_Y: 640,
  NUM_ASTEROIDS: 30
};

const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Ship = require("./ship.js");

function Game() {
  this.ship = new Ship({ pos: this.randomPosition(), color: "#03dffc", radius: 20, game: this});
  this.bullets = [];
}

Game.prototype.randomPosition = function () {
  return [getRandomInt(640), getRandomInt(640)];
};

Game.prototype.allObjects = function() {
  let allthings = this.asteroids.slice();
  allthings.push(this.ship);
  return allthings;
};

Game.prototype.addAsteroids = function(ctx) {
  let asteroids = [];
  for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
    let newAst = new Asteroid({ pos: this.randomPosition(), game: this}); //game : this
    asteroids.push(newAst);
  }
  this.asteroids = asteroids;
};

Game.prototype.moveObjects = function() {
  // let all = this.allObjects();
  this.asteroids.forEach(asteroid => {asteroid.move();}); 
  this.bullets.forEach(bullet => {bullet.move();});  
  // all.forEach(obj => {obj.move();});
  this.ship.move();
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, 640, 640);
  // debugger
  this.asteroids.forEach( asteroid => {asteroid.draw(ctx);});
  this.bullets.forEach( bullet => {bullet.draw(ctx);});
  this.ship.draw(ctx);
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Game.prototype.wrap = function(pos) {
  if (pos[0] <= 0) {
    pos[0] = CONSTANTS.DIM_X;
  } else if (pos[1] <= 0) {
    pos[1] = CONSTANTS.DIM_Y;
  } else if (pos[0] >= CONSTANTS.DIM_X) {
    pos[0] = 0;
  } else if (pos[1] >= CONSTANTS.DIM_Y){
    pos[1] = 0;
  }
  return pos;
};

Game.prototype.checkCollisions = function() {
  let obs = this.allObjects();
  for(let i = 0; i < obs.length - 1; i++) {
    for (let j = i + 1; j < obs.length; j++) {
      if (obs[i].isCollidedWith(obs[j])) {
        console.log("collision");
        // alert("collision!")
        // debugger
        
       
        obs[i].collideWith(obs[j]);
      }
    }
  }
};

Game.prototype.step = function() {
  this.checkCollisions();
  this.moveObjects();
  
};

Game.prototype.remove = function(asteroid) {
  // let obs = this.allObjects();
  let idx =this.asteroids.indexOf(asteroid);
  this.asteroids.splice(idx, 1);

  if (this.ship === asteroid) {
    this.ship = new Ship({ pos: this.randomPosition(), color: "#03dffc", radius: 20, game: this });
  }


};
module.exports = Game;
