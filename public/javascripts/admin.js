//canvas initialization
var canvas = document.getElementById("disk");
var ctx = canvas.getContext("2d");
//dimensions
var W = canvas.width;
var H = canvas.height;
//Variables
var degrees_disk = 0;
var new_degrees_disk = 0;
var difference = 0;
var color = "#b2c831"; //green looks better to me
var bgcolor = "#222";
var text;
var animation_loop, redraw_loop;

function init_disk() {
	//Clear the canvas everytime a chart is drawn
	ctx.clearRect(0, 0, W, H);

	//Background 360 degree arc
	ctx.beginPath();
	ctx.strokeStyle = bgcolor;
	ctx.lineWidth = 30;
	ctx.arc(W / 2, H / 2, 100, 0, Math.PI * 2, false); //you can see the arc now
	ctx.stroke();

	//gauge will be a simple arc
	//Angle in radians = angle in degrees_disk * PI / 180
	var radians = degrees_disk * Math.PI / 180;
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 30;
	//The arc starts from the rightmost end. If we deduct 90 degrees_disk from the angles
	//the arc will start from the topmost end
	ctx.arc(W / 2, H / 2, 100, 0 - 90 * Math.PI / 180, radians - 90 * Math.PI / 180, false);
	//you can see the arc now
	ctx.stroke();

	//Lets add the text
	ctx.fillStyle = color;
	ctx.font = "50px open sans";
	text = Math.floor(degrees_disk / 360 * 100) + "GHz";
	//Lets center the text
	//deducting half of text width from position x
	text_width = ctx.measureText(text).width;
	//adding manual value to position y since the height of the text cannot
	//be measured easily. There are hacks but we will keep it manual for now.
	ctx.fillText(text, W / 2 - text_width / 2, H / 2 + 15);
}

function draw_disk() {
	//Cancel any movement animation if a new chart is requested
	if (typeof animation_loop != undefined) clearInterval(animation_loop);

	//random degree from 0 to 360
	//console.log(56,new_degrees_disk);
	new_degrees_disk = Math.round(new_degrees_disk * 360) / 100;
	//console.log(58,new_degrees_disk);
	difference = new_degrees_disk - degrees_disk;
	//This will animate the gauge to new positions
	//The animation will take 1 second
	//time for each frame is 1sec / difference in degrees_disk
	animation_loop = setInterval(animate_to_disk, 1000 / difference);
}

//function to make the chart move to new degrees_disk
function animate_to_disk() {
	//clear animation loop if degrees_disk reaches to new_degrees_disk
	if (degrees_disk == new_degrees_disk)
		clearInterval(animation_loop);

	if (degrees_disk < new_degrees_disk)
		degrees_disk++;
	else
		degrees_disk--;

	init_disk();
}

//Lets add some animation for fun
draw_disk();
// redraw_loop = setInterval(draw, 2000); //Draw a new chart every 2 seconds