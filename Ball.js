//Ball Class
function Ball() {
  this.initSpd = 4;
  this.position = {x: 0, y: 0};
  this.velocity = {x: getV(this.initSpd), y: getV(this.initSpd)};
    
  this.colour = "#00FF00";                    
  this.lineWidth = 5
  this.radius = 4;
    
  //sets initial velocity
  function getV(spd) {
      startDir = Math.floor(Math.random() * 360);
      rad = (Math.PI / 180) * (startDir  - 90);
       return spd * Math.cos(rad);    
  };
      
    
  //moves the ball in the direction specified by it's velocity vector
  this.move = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  };

  //bounces the ball with regards to an axis
  this.bounce = function(axis) {
    if (axis === "x") {
        this.velocity.x = this.velocity.x * -1;
    } else {
        this.velocity.y = this.velocity.y * -1;
    }
  };
    
  //increases the speed of the ball
  this.increaseSpeed = function() {
      this.position.x += 1;
      this.position.y += 1;
  };


  this.draw = function(ctx) {
    ctx.strokeStyle = this.colour;
    ctx.fillStyle = this.colour;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
  };
};
