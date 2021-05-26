class Iron {
    
    constructor(x,y) {

        var opt = {
            'restitution' : 0.8,
            'friction' : 3,
            'density' : 30
        };

        this.body = Bodies.rectangle(x,y,50,10,opt);
        this.width = 50;
        this.height = 10;
        World.add(world,this.body);

    };

    display() {
        
        var posi = this.body.position;
        var angle = this.body.angle;

        push();

        translate(posi.x,posi.y);
        rotate(angle);
        rectMode(CENTER);
        fill('silver');
        rect(0,0, this.width,this.height);

        pop();
    };

};