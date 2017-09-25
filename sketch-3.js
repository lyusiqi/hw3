
background(255);
noStroke();

var h = 0;

while(true) {
  background(255);
  colorMode(HSB);
  fill(h, 100, 100);
  ellipse(width=h, height=h, 40, 40);
  h = h+30;
  
  if (h >= 340) {
    h = 0;
  }
}
