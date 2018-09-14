var framecount = 0;

var loop = function(){
	
	framecount++;
	if(framecount%45 == 0){
		if(textcursor != '_'){
			textcursor="_";
		} else{
			textcursor = "";
		}
	}

	//Update
	for(var i in objects){
		if(objects[i] instanceof Array){
			for(var j = 0; j < objects[i].length; j++){
				objects[i][j].update();
			}
		} else if( objects[i] !== null){
			objects[i].update();
		}
	}
	
	//Clear outer canvas
	context.clearRect(0,0,width,height);

	//Clear inner canvas
	ctx.fillStyle = background;
	ctx.fillRect(0,0,W,H);

	// Draw objects
	for(var i in objects){
		if(objects[i] instanceof Array){
			for(var j = 0; j < objects[i].length; j++){
				objects[i][j].draw();
			}
		} else if( objects[i] !== null){
			objects[i].draw();
		}
	}

	// Mods
	if(isStopped){
		context.font = '20px Courier New';
		context.fillStyle = "#cccccc";
		context.textAlign = "start";
    	context.fillText("PAUSED ||", 20, height-10);
	} 

	if(scoreMod){
		context.font = '20px Courier New';
		context.fillStyle = "#cccccc";
		context.textAlign = "start";
    	context.fillText("Score : " + score, 20, 20);
	}

	if(artMod){
		ctx.strokeStyle="white";
		ctx.lineWidth=8;
		ctx.strokeRect(0,0,W,H);
	}

	// Draw user text
	ctx.font = '42px Courier New';
	ctx.fillStyle = "#cccccc";
	ctx.textAlign = "center";
    ctx.fillText(text, W/2, H/2);
    ctx.textAlign = "start";
    ctx.fillText(textcursor, W/2 + ctx.measureText(text).width/2, H/2);
	
	setTimeout(function(){ loop(); }, 1000/60);
	context.drawImage(canvas_inner, 38, 38);
}

loop();