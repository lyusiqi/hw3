
background(255);
noStroke();

var h = 100;

while(true) {
  background(255);
  colorMode(HSB);
  fill(h, 100, 100);
  ellipse(width=h, 200, 40, 40);
  h = h+10;
  
  if (h >= 340) {
    h = 0;
  }
}
