background(255);
strokeWeight(3);
colorMode(HSB);

while (true){
  var h= random (360)
fill (random(h), 0,random(255));
stroke (random(255), random(255), random(255));
  var r = random(40,80);
ellipse (random(width), random(height), r, r);
}
