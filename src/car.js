function Car(make, model, year, color, passengers){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	// update current_owner and previous_owners
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	// update color of car
	this.color = newColor;
};

Car.prototype.start = function() {
	// change the state of the car to on
	this.state = "on";
};

Car.prototype.off = function() {
	//change state to off
	this.state = "off";
};

Car.prototype.driveTo = function(destination) {
	if(this.state === "on") {
		console.log("driving to " + destination);
	}
};

Car.prototype.park = function() {
	if(this.state === "off") {
		console.log("parked!!");	
	}
};

Car.prototype.pick_up = function(name) {
	if(this.state === "on") {
		this.passengers.push(name);	
		console.log("driving to pick up " + name);
	}
	
};

Car.prototype.dropOff = function(name) {
	if(this.passengers.indexOf(name) !== -1) {
		if(this.state === "on") {
			this.passengers.pop(name);
		}
		// remove name from passengers array
		// only drop them off if the car is on
	}
};

module.exports=Car;