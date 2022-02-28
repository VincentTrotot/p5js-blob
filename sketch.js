let blobs = [];

function setup() {
  createCanvas(800, 600);
  for(let i = 0; i < 10; i++){
    blobs.push(new Blob(random(width), random(height)));

  }
}

function draw() {
  background(51);

  for(blob of blobs){
    blob.update();
    blob.show();
  }
}