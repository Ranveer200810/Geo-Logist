class Stone {
    
    constructor(x,y) {

        var opt = {
            'restitution' : 0.8,
            'friction' : 0.9,
            'density' : 12
        };

        this.body = Bodies.rectangle(x,y,50,50,opt);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    };

    display() {
        
        var posi = this.body.position;
        var angle = this.body.angle;

        push();

        translate(posi.x,posi.y);
        rotate(angle);
        rectMode(CENTER);
        fill('gray');
        rect(0,0, this.width,this.height);

        pop();
    };

};