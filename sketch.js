function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var name = "Rajeev"
  console.log(name.length);
  console.log(name.toUpperCase());
  var num = "5";
  num = parseInt(num);
  console.log(num+7);
  console.log(14%5);
  console.log("a" / "b");
  console.log(0/1);
  var obg;
  console.log(obg);
  var name = "My name";

switch(name) {  
case  "My name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}
for(var i=0; i<=5; i++){
	console.log(i)
}
//Write a simple while loop:

var i =0
while (i<=5){
	console.log(i)
	i=i+1
}
var friends = ["friend1","friend2","friend3"]
for(var index in friends){
	console.log(friends[index])
}
}

function draw() {
  background(255,255,255);  
  drawSprites();

}