
var hg = window.innerHeight;
var wh = window.innerWidth;
var system;
var counter = 0;
var colors = [[103, 58, 183],[103, 58, 183],[32, 222, 179],[255, 152, 0]];
var fsize = '6rem';
var flarge = '9rem';
var fsmall = '2rem';
var storm = 2000;
var btnstyle = {
  l : '20%',
  h : '8.333%',
  alpha : '1'
}
if (wh > 361 && wh <= 768 ){
  fsize = '3rem';
  flarge = '4.5rem';
  fsmall = '1.5rem';
  storm = 150;

  btnstyle.l = '60%';
} else if (wh <= 361) {
  fsize = '2.5rem';
  flarge = '4rem';
  fsmall = '1rem';
  storm = 150;
  btnstyle.l = '60%';
} else if (wh > 768 && wh <= 1000) {
  var fsize = '4.5rem';
  var flarge = '7.5rem';
  var fsmall = '1.5rem';
  storm = 200;
}
else {

}
/*window.onresize = function(){
  var hello = document.getElementById("land");
  hello.style.display = 'none';
  location.reload();
}*/
function setup() {
  createCanvas(wh, hg);
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
    if (counter < storm ){
    system.addParticle();
    }
  }
}
  function contact(){
    console.log('btn clicked');
    var btncontact = document.getElementById("contact");
    btncontact.style.borderBottomWidth = '0px';
    function btnpop(){
      window.location.href = "mailto:luca.ucciero@gmail.com";
      btncontact.style.borderBottomWidth = '3px';
    }
    setTimeout(btnpop, 500);

  }



  function starter(){

    var checkel = document.getElementById("check");
    var checkval = window.getComputedStyle(checkel, null).getPropertyValue("display");
    function checkSize(){
          var currentval = window.getComputedStyle(checkel, null).getPropertyValue("display");
          console.log(checkval + currentval);
          if (checkval !== currentval ){
            var hello = document.getElementById("land");
            hello.style.display = 'none';
            location.reload();
          }
      };
    checkSize();
    window.onresize = function(){
      console.log('window resized');
      checkSize();
    }

    var hello = document.getElementById("hello");
    function enlarge(){
      hello.style.fontSize = flarge;
    }
    function fire(){
      start = true;
    }
    function reveal(id){
      id.style.display = 'inline';
    }
    function resize(){
      hello.style.fontSize = fsize;
    }
    function appear(id){
      id.style.fontSize = fsize;
    }
    function light(id, cola){
      id.style.color = cola;
      //#1DE8B5
      //#00ffe0
      //#D1C4E9
    }
    function btnAppear(id){
      id.style.width = btnstyle.l;
      id.style.height = btnstyle.h;
      id.style.opacity = btnstyle.alpha;
    }

    function appearBT(id){
      id.style.fontSize = fsmall;
    }

    setTimeout(enlarge, 500);
    setTimeout(fire, 1000);
    setTimeout(resize, 1900);
    reveal(document.getElementById("catch"));
    setTimeout(function() { appear(document.getElementById("im")) }, 1900);
    setTimeout(function() { appear(document.getElementById("lu")) }, 2400);
    //setTimeout(function() { appear(document.getElementById("nam")) }, 1900);
    setTimeout(function() { appear(document.getElementById("ita")) }, 2900);
    setTimeout(function() { appear(document.getElementById("grf")) }, 3400);
    setTimeout(function() { appear(document.getElementById("des")) }, 3400);
    setTimeout(function() { appear(document.getElementById("and")) }, 3900);
    setTimeout(function() { appear(document.getElementById("fro")) }, 4400);
    setTimeout(function() { appear(document.getElementById("dev")) }, 4400);
    setTimeout(function() { light(document.getElementById("lu"),'#00FFD4') }, 4900);
    setTimeout(function() { light(document.getElementById("des"),'#00FFD4') }, 4900);
    setTimeout(function() { light(document.getElementById("dev"),'#00FFD4') }, 4900);
    setTimeout(function() { btnAppear(document.getElementById("contact")) }, 4900);
    setTimeout(function() { appearBT(document.getElementById("contact")) }, 5150);


  }
  document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  starter();
  });


  function mousePressed() {
    var hello = document.getElementById("hello");
      hello.style.fontSize = flarge;
    function fire(){
      counter = 0;
    }
    function resize(){
      hello.style.fontSize = fsize;
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
  this.position.add(this.velocity).add(this.velocity);
  this.lifespan -= 2;
};

// Method to display



//bacterio line function
Particle.prototype.displayBacterio = function(){
    icr = 8;
  xdir = true;
  x0 = this.position.x;
  y0 = this.position.y;
  strokeWeight(3.0);
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
  strokeWeight(8);
  stroke(this.col);
  x1= this.position.x+ranXX;
  y1 = this.position.y+ranYY;
  x2 = x1+12;
  y2 = y1+12;
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
