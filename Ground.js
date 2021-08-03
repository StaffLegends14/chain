class Ground{
    constructor(x,y,w,h){
        
        var opt = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,opt);
        World.add(world,this.body);

    }

    display(){
        push();
        rectMode(CENTER);
        noStroke();
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}