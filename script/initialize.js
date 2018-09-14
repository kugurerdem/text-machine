// Sound variables
var effect_0 =  new Audio("audio/effect1.wav");
var effect_1 = new Audio("audio/effect2.wav");
var music = new Audio("audio/music.mp4");
music.volume = 0.5;
music.onended = function(){
	music.play();
}

// Main canvas variables
var canvas_outer = document.getElementById("myCanvas");
var context = canvas_outer.getContext("2d"); 
var width = canvas_outer.width;
var height = canvas_outer.height;

// Frame canvas variables
var canvas_inner = document.createElement('canvas');
canvas_inner.width = width - 76;
canvas_inner.height = height - 76;
var ctx = canvas_inner.getContext("2d");
var W = canvas_inner.width;
var H = canvas_inner.height;

var text = "";
var textcursor = "";

// Command variables
var background = "black";
var bgcolor = "black";
var score = 0;

// Mod states
var artMod = false;
var musicMod = false;
var isStopped = false;
var fillMod = false;
var scoreMod = false;
var rotateMod = false;
var alphaMod = false;


// Points for polygons

var POINTS = {
	"triangle" : [-2,2,2,2,0,-2,-2,2],
	"square" : [-1,-1,-1,1,1,1,1,-1,-1,-1],
	"rectangle" : [-3,-1,-3,1,3,1,3,-1,-3,-1],
	"pentagon" : [-1,2,1,2,2,0,0,-2,-2,0,-1,2],
	"hexagon" : [-1,2,1,2,2,0,1,-2,-1,-2,-2,0,-1,2],
	"polygon" : [-1,-2,1,-2,2,-1,2,1,1,2,-1,2,-2,1,-2,-1,-1,-2] 
};

// Colors and their RGBA values
var transparency = 0.08;
var COLORS_RGBA = {
	"red": 'rgba(255,0,0,'+transparency+')',
	"blue": 'rgba(0,0,255,'+transparency+')',
	"black": 'rgba(0,0,0,'+transparency+')',
	"orange": 'rgba(255,110,0,'+transparency+')',
	"cyan": 'rgba(0,255,255,'+transparency+')',
	"green": 'rgba(0,255,0,'+transparency+')',
	"yellow": 'rgba(255,255,0,'+transparency+')'
}

var COLORS_RGB = {
	"red": 'rgb(255,0,0)',
	"blue": 'rgb(0,0,255)',
	"black": 'rgb(0,0,0)',
	"orange": 'rgb(255,110,0)',
	"cyan": 'rgb(0,255,255)',
	"green": 'rgb(0,255,0)',
	"yellow": 'rgb(255,255,0)'
}