class Link{
    constructor(bodyA,bodyB){

        var lastLink = bodyA.body.bodies.length-2
var opt={
    bodyA: bodyA.body.bodies[lastLink],
    bodyB: bodyB,

    stiffness: 0.01,
    length: - 10
}
    

        this.link = Constraint.create(opt);
        World.add(world,this.link)
        
    }

    break(){
        World.remove(world,this.link)
    }
}