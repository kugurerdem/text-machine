// Events
document.onkeypress = function(e){
	e = e || window.event;

	var isCommand = false;

	if(e.keyCode == 13){
		var lowertext = text.toLowerCase();
		if( COMMANDS[lowertext] ){ 
			effect_0.play();
			COMMANDS[lowertext](); 
			score += 500;
		} else{
			
			for(var prop in synonyms){
				for(var i = 0; i < synonyms[prop].length; i++){
					if(synonyms[prop][i] == lowertext){
						COMMANDS[prop]();
						isCommand = true;
						effect_0.play();
						score += 500;
						break;
					}
				}
			}

			for(var prop in synonyms_functions){
				for(var i = 0; i < synonyms_functions[prop].length; i++){
					if(synonyms_functions[prop][i] == lowertext){
						COMMANDS[prop](synonyms_functions[prop][i]);
						isCommand = true;
						effect_0.play();
						score += 500;
						break;
					}
				}
			}
			
			if(!isCommand){
				objects.text.push( new TextObject(text));
					effect_1.play();
			}

			isCommand = false;
		}
		text = "";
	} else{
		text += String.fromCharCode(e.keyCode);
	}
}

document.onkeydown = function(e){
	e = e || window.event;
	if(e.keyCode == 8){
		text = text.slice(0,text.length-1);
	} 
}