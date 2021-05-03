/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	fill(255,100);
	ellipse(220, 140,100,100);
	ellipse(170, 170,100,100);
	ellipse(250,170,100,100);
	ellipse(140,180,75,75);
	ellipse(280,180,75,75);
	fill(0,0,180,140);
	triangle(250,220,245,230,255,230);
	fill(0,0,180,170);
	ellipse(250,232,10,10);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	fill(150);
	triangle(420,432,620,432,520,260);
	fill(255,180);
	triangle(520,260,500,294,540,294);
	fill(150);
	triangle(515,280,502,313,513,312);
	triangle(525,280,522,313,533,312)

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

	fill(139,69,19);
	rect(840,330,40,102);
	fill(0,150,0);
	triangle(800,330,920,330,860,260);
	triangle(800,300,920,300,860,200);
	fill(139,64,45);
	ellipse(840,310,30,10);
	fill(200);
	ellipse(845,310,3,5);
	fill(0);
	ellipse(835,303,6,13);
	rect(833,307,1,8);
	rect(835,307,1,8);
	ellipse(838,302,8,3);
	ellipse(831,302,8,3);
	ellipse(835,296,7,5);
	triangle(828,296,832,294,837,298);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	fill(150,255);
	beginShape();
	vertex(150,432);
	vertex(166,533);
	vertex(200,590);
	vertex(233,545);
	vertex(256,492);
	vertex(252,432);
	endShape(CLOSE);
	fill(190,110,0,255);
	beginShape();
	vertex(169,533);
	vertex(200,580);
	vertex(230,544);
	endShape(CLOSE);


	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 380, 380);

	fill(0,180);
	rect(400,395,50,22);
	fill(139,69,19);
	rect(400,406,50,26);
	fill(255,215,0);
	rect(402,408,46,6);
	fill(139,69,19);
	rect(400,393,50,3);
	fill(255,215,0);
	rect(423,390,5,3);
}
