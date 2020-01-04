var Passenger = function(first,middle,last,passPortNumber,country,gender,birthDay){
	var instence = {};
	instence.first = first;
	instence.middle = middle;
	instence.last = last;
	instence.passPortNumber = passPortNumber;
	instence.gender = gender;
	instence.timeOfCreation = new Date().toLocaleString();
	instence.country = country;
	instence.birthDay = birthDay;
	instence.status = false ; 
	instence.numberOfEntry = 0 ;
	instence.toggleStatus = toggleStatus;

	return instence;

}

var DataBase = function(passenger) {
	var instence = {};
	instence.passengers = [];
	instence.addPassenger = addPassenger;
	instence.removePassenger = removePassenger;
	instence.getPassenger = getPassenger;

	return instence;


}

var redFlagPassengers = [ {
	first: "mohaemd",
	middle: "fared",
	last : "salah",
	country: "libya",
	passPortNumber : "1234",
	gender:"male",
		}
	,
	{
	first: "omar",
	middle: "mohamed",
	last : "bara",
	country: "libya",
	passPortNumber : "123456",
	gender:"male",
	}
	,
	{
	first: "ahmed",
	middle: "edawi",
	last : "wheida",
	country:"libya",
	passPortNumber : "1111",
	gender:"male",
	}

	]

var addPassenger = function(passenger){

	var index = redFlagPassengers.findIndex(function(elemnt) {
		return passenger.passPortNumber === elemnt.passPortNumber 
		&& passenger.last === elemnt.last  ;

	});
	if(index >= 0 ) {
		//alert("this person already exist")
	}else{

		var index = this.passengers.findIndex(function(elemnt) {
		return passenger.passPortNumber === elemnt.passPortNumber && passenger.last  === elemnt.last 
		&& passenger.birthDay === elemnt.birthDay 
	});
		if (index >=0) {
			this.passengers[index].numberOfEntry ++
			return alert("this person already exist")

		}else{
		
		this.passengers.push(passenger);
		}
	}
}


var removePassenger = function(passPortNumber,last){

	var index = this.passengers.findIndex(function(elemnt) {
		return passPortNumber === elemnt.passPortNumber && last === elemnt.last
	});

	if(index >= 0 ) {
		this.passengers.splice(index,1)
	}else{
		console.warn("This Passenger Not Found")
	}
}

var getPassenger = function(passPortNumber,last) {

	var index = this.passengers.findIndex(function(elemnt) {
		return passPortNumber === elemnt.passPortNumber && last === elemnt.last
	});

	if(index >= 0 ) {
		 return this.passengers[index];
	}else{
		//return "This Passenger Not Found"
		alert("This Passenger Not Found")
	}

}

var toggleStatus = function() {

	this.status = ! this.status;

}


	// var data1 = DataBase();
	//  var pass1 = Passenger("name","middle","last","passportNumber","gender")
	// var pass2 = Passenger("nfffame","mifffdle","lfffast","pasfffsportNumber","genfffder")
	//  var pass3 = Passenger("moahmed","fared","salah","1234","libya")
	//  data1.addPassenger(pass1)
	//  data1.addPassenger(pass2)
	//  data1.addPassenger(pass3)



