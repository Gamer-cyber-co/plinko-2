class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }}
    if(Particle!=null)
    {
    Particle.display();
    if (Particle.body.position.y>760)
    {
    if (Particle.body.position.x < 300)
    {
    score=score+500;
    Particle=null;
    }
    else if (Particle.body.position.x < 600 && Particle.body.position.x > 301 )
    {
    score = score + 100;
    Particle=null;
    }
    else if (Particle.body.position.x < 900 && Particle.body.position.x > 601 )
    {
    score = score + 200;
    Particle=null;
    }
    }
    }