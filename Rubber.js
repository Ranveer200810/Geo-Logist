class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

        var options = {
			'restitution' : 0.3,
			'friction' : 5,
			'density' : 1,
//			isStatic : false
		};

		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		World.add(world, this.body);

	};
	display()
	{
			var pos=this.body.position;	
			var angle = this.body.angle;

			push();

			translate(pos.x, pos.y);
			rotate(angle);
			ellipseMode(RADIUS);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0, 0, this.r, this.r);

			pop();
	};

};