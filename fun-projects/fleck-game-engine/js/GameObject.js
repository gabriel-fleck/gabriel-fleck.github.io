

class GameObject {

    constructor(tag, canvas, ctx) {
      this.tag = tag;
      this.canvas = canvas;
      this.ctx = ctx;
      this.position = new Vector2(0, 0);
      this.speed = 0.5;
      this.stopSpeedConst = 0.9;
      this.velocity = new Vector2(0, 0);

      this.gravity = -0.2;
      this.gravitySpeed = 1;

      this.drawLayer = 0;

      this.isKinematic = true;

      this.color = new Color(0, 0, 255, 1);
      //this.ctx = canvas.getContext("2d");

      this.size = new Vector2(50, 50);
      console.log("GameObject Instantiated: " + this.tag)

      this.collider = this.size;
      this.bounce = 0;

      this.Draw();
    }


    Draw() {
      //Draw
      this.ctx.beginPath();
      this.ctx.rect((this.canvas.width / 2 ) + this.position.x - (this.size.x / 2),(this.canvas.height / 2 ) - this.position.y - (this.size.y / 2), this.size.x, this.size.y);//Y INVERTED
      //this.ctx.fillStyle = "#0095DD";
      this.ctx.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.color.a+')';
      this.ctx.fill();
      this.ctx.closePath();
    }

    Update() {
      if (!this.isKinematic) {
        this.velocity.y = this.velocity.y + (this.gravitySpeed * this.gravity);
        this.velocity.x = this.velocity.x * this.stopSpeedConst;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
      }
      
      this.Draw();
      
    }

  }

