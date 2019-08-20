console.log("Webpack is working!");

const MovingObject = require("./moving_object.js")
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");


window.addEventListener('DOMContentLoaded', (event) => {
  const canvas_el = document.getElementById("game-canvas");
  const ctx = canvas_el.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,640,640);

  const gv = new GameView(blasteroids, ctx);
    

  gv.start();
});


let blasteroids = new Game();
blasteroids.addAsteroids();

















window.MovingObject = MovingObject;