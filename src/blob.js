class Blob {

    constructor(x,y){
        this.position = createVector(x,y);
        this.radius = 25;

        this.rotationRate = random(-2, 2);
        this.rotation = 0;
    }

    update(){
        this.rotation += this.rotationRate;
    }

    show(){
        push();

        translate(this.position.x, this.position.y);
        rotate(radians(this.rotation));
        stroke(255);
        strokeWeight(2);
        fill(255,100);

        beginShape();
        for(let i = 0; i <= 360; i+= 1){
            let x = (this.radius + 2 * sin(i/5)) * sin(radians(i));
            let y = (this.radius + 2 * sin(i/5)) * cos(radians(i));
            vertex(x,y);
        }
        endShape(CLOSE)

        pop();
    }
}