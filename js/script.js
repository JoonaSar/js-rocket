var car = {
	make: 'Audi',
	type: 'A8',
	color: 'Blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
	'seat 1', 
	'seat 2', 
	'seat 3'
	],
	turnOn: function () {
		this.isTurnedOn = true;
		alert( car.isTurnedOn);
	},
	
	isCarOn: function () {
		if (this.isTurnedOn == true) {
			alert("Auto on päällä")
		}
		else {
			alert("Auto ei ole päällä")
		}
		
	},
	
	fly: function () {
		alert('lennä nykäsen matti, lennä');
	},
	switchCar: function (isOn) {
	if (isOn== true) {
		this.isTurnedOn = true;
		}
	else {
		this.isTurnedOn = false;
		}
	
	}
	};

 doCoolStuff = function () {
		var currentClassName = 
			document.getElementById('cool').className;
		if (currentClassName == 'cool'){
			document.getElementById('cool').className = 'cool red';
		}
		else {
			document.getElementById('cool').className = 'cool';
		}
		
		
	};