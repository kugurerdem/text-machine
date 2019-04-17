// TextObject class
function TextObject(txt){
	this.text = txt;
	this.x = Math.random() * W;
	this.y = Math.random() * H;
	this.vx = (Math.random() * 2) -1;
	this.vy = (Math.random() * 2) -1;
	this.color = "rgb("+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+")";
	
	this.update = function(){
		if(!isStopped){
			this.x += this.vx;
			this.y += this.vy;

			if(this.x > W || this.x < 0){
				this.vx = -this.vx;
			}
			if(this.y > H || this.y < 0){
				this.vy = -this.vy;
			}
		}
	}

	this.draw = function(){
		ctx.font = '20px Arial';
		ctx.fillStyle = this.color;
		ctx.textAlign = "center";
    	ctx.fillText(this.text, this.x, this.y);
	}
}

// Helper class
function Helper(){
	this.frames = 0;
	var index = Math.round( Math.random() * (Object.keys(COMMANDS).length-1) );
	this.txt = Object.keys(COMMANDS)[index];
	this.update = function(){
		this.frames++;
		if(this.frames % 20 == 0){
			var newIndex;
			do{
				newIndex = Math.round(Math.random()*(Object.keys(COMMANDS).length-1));
				var key = Object.keys(COMMANDS)[newIndex];
				if( synonyms[key] ){
					var newIndex_2 = Math.round(Math.random()*(synonyms[key].length-1))
					this.txt = synonyms[key][newIndex_2]
				} else if( synonyms_functions[key] ){
					var newIndex_2 = Math.round(Math.random()*(synonyms_functions[key].length-1))
					this.txt = synonyms_functions[key][newIndex_2]
				}else{
					this.txt = Object.keys(COMMANDS)[newIndex];
				}
			}while(index == newIndex);
			index = newIndex;
		}
	}	

	this.draw = function(){
		context.font = '20px Courier New';
		context.fillStyle = "#cccccc";
		context.textAlign = "end";
    	context.fillText(" try " + '"' + this.txt + '"', width-20, 20);
	}
}

// Polygon Class
function Polygon(points){
	this.points = points;

	this.x = Math.random() * W;
	this.y = Math.random() * H;
	this.vx = (Math.random() * 4) -2;
	this.vy = (Math.random() * 4) -2;
	this.theta = Math.random() * 0.1 - 0.05;
	this.lineSize = 10+Math.random()*30;
	this.color = "rgb("+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+")";

	this.rotate = function(theta){
		var c = Math.cos(theta);
		var s = Math.sin(theta);

		// iterate thru each vertex and change position
		for (var i = 0, len = this.points.length; i < len; i += 2) {
			var x = this.points[i];
			var y = this.points[i+1];

			this.points[i] = c*x - s*y;
			this.points[i+1] = s*x + c*y;
		}
	}

	this.update = function(){
		if(!isStopped){
			this.x += this.vx;
			this.y += this.vy;

			if(this.x > W){
				this.x = 0;
			} else if(this.x < 0){
				this.x = W;
			} if(this.y > H){
				this.y = 0;
			} else if(this.y < 0){
				this.y = H;
			}

			if(rotateMod)
				this.rotate(this.theta);
		} 
	}

	this.draw = function(){
		
		ctx.strokeStyle=this.color;
		ctx.fillStyle = this.color;
		ctx.lineWidth=3;
		ctx.beginPath();
		ctx.moveTo(this.points[0]*this.lineSize + this.x, this.points[1]*this.lineSize + this.y);
		for (var i = 2, len = this.points.length; i < len; i += 2) {
			ctx.lineTo(this.points[i]*this.lineSize + this.x, this.points[i+1]*this.lineSize + this.y);
		}
		ctx.stroke();
		if(fillMod)
			ctx.fill();
	}
}

// Ball class
function Ball(){
	this.x = Math.random() * W;
	this.y = Math.random() * H;
	this.vx = 2 * Math.random() - 1;
	this.vy = 2 * Math.random() - 1;
	this.size = 5 + 10 * Math.random();
	this.color = "rgb("+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+","+Math.round((Math.random()*255))+")";

	this.update = function(){
		if(!isStooped){
			this.x += this.vx;
			this.y += this.vy;

			if(this.x - this.size < 0 || this.x + this.size > W){
				this.vx = -this.vx;
			} 
			if(this.y - this.size < 0 || this.y + this.size > H){
				this.vy = -this.vy;
			}
		}
	}

	this.draw = function(){
		ctx.fillStyle= this.color; 
		ctx.beginPath(); 
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fill();
		console.log("hi");
	}
}


