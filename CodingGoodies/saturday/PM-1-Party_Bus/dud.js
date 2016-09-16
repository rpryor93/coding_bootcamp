var Dud = function(gender, dudName, coolnessScale){
	this.gender = gender;
	this.dudName = dudName;
	this.coolnessScale = coolnessScale;
	this.dudeOrDudess = function(){
		if (this.gender == 'female'){
			console.log("I'm a dudess. Sup?");
		}else{
			console.log("I'm a dude. How are you on this fine afternoon?");
		}
	}
};

module.exports = Dud;