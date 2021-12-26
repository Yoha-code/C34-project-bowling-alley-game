class Block{

    constructor(x, y, w, h){

        let options = {
            isStatic: true,
            visible: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        this.image = loadImage("can.png");
        
        World.add(world, this.body);

    }

    remove(index){

        Matter.World.remove(world, blocks[index].body);
        blocks.splice(index, 1);
    }

    show(){
        var pos = this.body.position;

        push();   
        translate(pos.x, pos.y);

        rectMode(CENTER);

        image(this.image, 0, 0, this.w, this.h);

        pop();
    }

}