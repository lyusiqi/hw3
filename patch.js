
background(255)
function SLPatch(x,y){
  noFill();
  stroke (0);
rect(120,120,100,100);
}
 function RP(x,y){
  fill(255);
  stroke (0);
rect(120,120,100,100);
}
SLPatch();
function Color(){
stroke (0,0,random(240));
line(120,150,220,150);
stroke (0,random(255),0);
line(220,150,145,220);
stroke (random(255),0,0);
line(145,220,170,120);
stroke (0,0,random(240));
line(170,120,195,220)
stroke (0,random(255),0);
line(195,220,120,150)
}
SLPatch()
Color()
RP()

var h=0;

while(true){
	colorMode(HSB);
	fill(h, 100, 100);
	ellipse(170,170,100,100);
  h=h+5;

}
