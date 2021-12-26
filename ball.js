class Ball{

    constructor(x, y, w){

        var ball_options = {
            isStatic : false,
            restitution: 0.3,
            friction:0,
            density:1.5
        }

        this.x = x;
        this.y = y;
        this.w = w;

        this.body = Bodies.circle(x, y, w, ball_options);
        this.image = loadImage("ball.png");
        World.add(world, this.body);

    }

    show(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.w);
        
        pop();

    }
}