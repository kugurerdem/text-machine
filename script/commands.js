// objects will be here
var objects = { 
	polygon: [],
	text: [],
	balls: [],
	help: null
};

// Synonyms
var synonyms = {
	"hi" : ["hello","hey", "greetings", "hi"],
	"help" : ["info","help"],
	"clear" : ["clean","cls", "clear"],
	"art" : ["frame","border","art"],
	"pause" : ["stop","wait","pause"],
	"highscore" : ["score","highscore"],
	"alpha" : ["transparent", "rgba","alpha"],
	"ball" : ["circle","ball","arc"],
	"balls" : ["circles","balls"]
}

var synonyms_functions = {
	"background" : ["red","blue","black","orange","cyan","green","yellow","background"],
	"polygon" : ["triangle","square","rectangle","pentagon","hexagon","polygon"]
}

// Commands will go through this object
var COMMANDS = {
	"hi": function(){
		objects.text.push( new TextObject(synonyms["hi"][Math.round(Math.random()*(synonyms["hi"].length-1))]));
	},

	"clear": function(){
		for(var i in objects){
			if(objects[i] instanceof Array){
				objects[i] = [];
			} else if( objects[i] !== null){
				objects[i] = null;
			}
		}
		artMod = false;
		musicMod = false;
		isStopped = false;
		fillMod = false;
		scoreMod = false;
		rotateMod = false;

		background = "black";
		bgcolor = "black";

		music.pause();
		music.currentTime = 0;
	},

	"help": function(){
		if (typeof helpMod == 'undefined') {
		    helpMod = true;
		    objects.help = new Helper();
		} else{
			helpMod = !helpMod;
		} 

		if(helpMod){
			objects.help = new Helper();
		} else{
			objects.help = null;
		}
	},

	"art": function(){
		artMod = !artMod;
	},

	"music": function(){
		musicMod = !musicMod;
		if(musicMod){
			music.play();
		} else{
			music.pause();
			// music.currentTime = 0;
		}
	},

	"pause": function(){
		isStopped = !isStopped;
	},

	"background": function(color){
		var index = Math.round( Math.random() * (synonyms_functions["background"].length-1) );
		bgcolor =  color || synonyms_functions["background"][index];
		if(alphaMod)
			background = COLORS_RGBA[bgcolor];
		else
			background = COLORS_RGB[bgcolor];
	},

	"polygon": function(points){
		var p = POINTS[points] || POINTS["polygon"];
		objects.polygon.push( new Polygon( p ) );
	},

	"fill" : function(){
		fillMod = !fillMod;
	},

	"highscore" : function(){
		scoreMod = !scoreMod;
	},

	"rotate" : function(){
		rotateMod = !rotateMod;
	},

	"alpha": function(){
		alphaMod = !alphaMod;
		COMMANDS["background"](bgcolor);
	},

	"ball": function(){
		objects.balls.push(new Ball());
	},

	"balls": function(){
		for (var i = 0; i < 7; i++) {
			objects.balls.push(new Ball());
		}
	}
}