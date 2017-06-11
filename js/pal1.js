var hg = window.innerHeight;
var wh = window.innerWidth;
var system;
var counter = 0;
var colors = [[255, 204, 0],[0, 208, 255],[255, 74, 0],[0,255,101]];
function setup() {
  createCanvas(wh-100, hg);
  background(0, 0);
  system = new ParticleSystem(createVector(width/2, 50));
  ranXX = random(50);
  ranYY = 1;
  racol1 = round(random(0,3));
  racol2 = round(random(0,3));
  hsize = true;
  start = false;

}

function draw() {

  clear();


  system.run();
  if (start) {
    if (counter < 6000 ){
    system.addParticle();
    }
  }
}
  function starter(){
    var hello = document.getElementById("hello");
    fsize =   hello.style.fontSize;
    function enlarge(){
      hello.style.fontSize = '10rem';
    }
    function fire(){
      start = true;
    }
    function resize(){
      hello.style.fontSize = '6rem';
    }
    function appear(id){
      id.style.fontSize = '6rem';
    }
    function light(id){
      id.style.color = '#673AB7';
      //#1DE8B5
      //#00ffe0
      //#D1C4E9
    }

    setTimeout(enlarge, 500);
    setTimeout(fire, 1000);
    setTimeout(resize, 1900);
    setTimeout(function() { appear(document.getElementById("im")) }, 1900);
    setTimeout(function() { appear(document.getElementById("lu")) }, 2400);
    //setTimeout(function() { appear(document.getElementById("nam")) }, 1900);
    setTimeout(function() { appear(document.getElementById("ita")) }, 2900);
    setTimeout(function() { appear(document.getElementById("grf")) }, 3400);
    setTimeout(function() { appear(document.getElementById("des")) }, 3400);
    setTimeout(function() { appear(document.getElementById("and")) }, 3900);
    setTimeout(function() { appear(document.getElementById("fro")) }, 4400);
    setTimeout(function() { appear(document.getElementById("dev")) }, 4400);
    setTimeout(function() { light(document.getElementById("lu")) }, 4900);
    setTimeout(function() { light(document.getElementById("des")) }, 4900);
    setTimeout(function() { light(document.getElementById("dev")) }, 4900);


  }
  document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  starter();
  });


  function mousePressed() {
    var hello = document.getElementById("hello");
      hello.style.fontSize = '10rem';
    function fire(){
      counter = 0;
    }
    function resize(){
      hello.style.fontSize = '6rem';
    }
    setTimeout(fire, 500);
    setTimeout(resize, 1400);
  }

// A simple Particle class
var Particle = function(position, col) {
  this.acceleration = createVector(0, 0.05);
  this.accelerationXX = createVector(0, 0.09);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 1000;
  this.col = colors[col];
};

Particle.prototype.run = function() {
  this.update();
  this.displayBacterio();
  this.displayXX();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display



//bacterio line function
Particle.prototype.displayBacterio = function(){
    icr = 6;
  xdir = true;
  x0 = this.position.x;
  y0 = this.position.y;
  strokeWeight(2.0);
  stroke(this.col);
  for (var i=0; i < 5; i++ ){
    x1 = x0;
    y1 = y0;
    y2 = y1+icr;
    if(xdir) {
      x2 = x1+icr;
      xdir = false;
    } else {
      x2 = x1-icr;
      xdir = true;
    }
    line(x1, y1, x2, y2);
    x0 = x2;
    y0 = y2;
  }
}

Particle.prototype.displayXX = function(){
  //stroke(255, 204, 0);
  strokeWeight(6);
  stroke(this.col);
  x1= this.position.x+ranXX;
  y1 = this.position.y+ranYY;
  x2 = x1+10;
  y2 = y1+10;
  line(x1, y1, x2, y2);
  line(x2,y1,x1,y2);

}
// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin, round(random(0,3)) ));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    counter = counter + 1;

    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
