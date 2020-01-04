
$(document).ready(function() {

	var body = $("body");
	var data = DataBase();

	// Get the passenger data information when hit the (save) button .
	
	$("body").on("submit","#create-passenger-form",function(e){

		e.preventDefault();

		var first = $("#first-name").val();
		var middle = $("#middle-name").val();
		var last = $("#last-name").val();
		var passPortNumber = $("#passPort-number").val();
		var country = $("#country").val();
		var gender = $("#list-gender-select option:selected").val();
		var birthDay = $("#Date-Of-Birth").val();

		//console.log(first +" "+middle+" "+last+" "+passPortNumber+" "+country)
		$("#first-name").val('');
		$("#middle-name").val('');
		$("#last-name").val('');
		$("#passPort-number").val('');
		$("#country").val('');
		$("#Date-Of-Birth").val('')

		// check if all the passenser data was entered or not .
		 if ( first === '' || middle === '' || passPortNumber === '' || country === '' || last === '' || birthDay === ""  ) {
		 	  alert("Please Enter Full Informtion ");
		 }
		  else {

		  	// check if passport nummber and the last name of the person was in the red flag  database 
		  	// which is not allowed to enter the country .

		 	for ( var i = 0 ; i < redFlagPassengers.length ; i++ ){
		 		if (passPortNumber === redFlagPassengers[i].passPortNumber && last === redFlagPassengers[i].last ) {
		 			 alert("Persona non grata");
		 			 // return the person name for the red flag database.
		 			 return searchRedFalg(passPortNumber,last);
		 		}
		 	}
		 		var passanger = Passenger(first,middle,last,passPortNumber,country,gender,birthDay)
				data.addPassenger(passanger);
		  		console.log(data);
		  		displaySaveInfo();
		 }
	 })

	$("body").on("submit","#search-passenger-form",function(e){

		e.preventDefault();
		var passPortNumber = $("#search-passPort-nu").val();
		var last = $("#search-last").val();
		getInfo(passPortNumber,last)
		$("#search-passPort-nu").val('');
		$("#search-last").val('');
	})

	$("body").on("click","#btn-delete-display-info", function(){

		$("#display").html('');
	})

	function displaySaveInfo(){
		var info = data.passengers[data.passengers.length - 1]
		var html = '';
	  	var infoDisplay = 
			` <div class="container mx-5" id="displayInfo">
				<div class="btn-remove">
					<button id="btn-delete-display-info">&cross;</button>
				</div>
                <div class="row" id="row1-display-info">
                    <div class="col">
                    <label>Fullname : </label>
                        <h4>${info.first+" "+info.middle+" "+info.last}</h4>
                    </div>
                    <div class="col">
                    <label>Passport number: </label>
                        <h4>${info.passPortNumber}</h4>
                    </div>
                    <div class="col">
                    <label>Country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row" id="row2-display-info">
	                <div class="col">
	                    <label>Gender : </label>
	                        <h4>${info.gender}</h4>
	                    </div> 
	                    <div class="col">
	                    <label>Birthday : </label>
	                        <h4>${info.birthDay}</h4>
	                    </div>
	                </div> 
	                </div>             
	            </div>`;
        		if(info.first === undefined ) {
		        	var infoDisplay = 
					` <div class="container mx-5">
		                <div class="row">
		                    <div class="col">
		                        <h3>${"please enter correct information "}</h3>
		                    </div>
		                </div>
		              <div>`
		        	}

	  	$("#display").html(infoDisplay)


	}
	function getInfo(passPortNumber,last) {
		var html = '';
	 	var info = data.getPassenger(passPortNumber,last);
	  	console.log(info);
	  	var infoDisplay = 
   ` <div class="container mx-5" id="displayInfo">
				<div class="btn-remove">
					<button id="btn-delete-display-info">&cross;</button>
				</div>
                <div class="row" id="row1-display-info">
                    <div class="col">
                    <label>Fullname : </label>
                        <h4>${info.first+" "+info.middle+" "+info.last}</h4>
                    </div>
                    <div class="col">
                    <label>Passport number: </label>
                        <h4>${info.passPortNumber}</h4>
                    </div>
                    <div class="col">
                    <label>Country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row" id="row2-display-info">
	                <div class="col">
	                    <label>Gender : </label>
	                        <h4>${info.gender}</h4>
	                    </div> 
	                    <div class="col">
	                    <label>Birthday : </label>
	                        <h4>${info.birthDay}</h4>
	                    </div>
	                </div> 
	                </div>             
	            </div>`;
       			 if(info.first === undefined ) {
		        	var infoDisplay = 
					` <div class="container mx-5">
		                <div class="row">
		                    <div class="col">
		                        <h3>${info}</h3>
		                    </div>
		                </div>
		              <div>`
      				  }

	  	$("#display").html(infoDisplay)

	}

function searchRedFalg(passPortNumber,last){
	var html = '';
	for (var person in redFlagPassengers){
		if ( passPortNumber === redFlagPassengers[person].passPortNumber && last === redFlagPassengers[person].last )
		{
			var info = redFlagPassengers[person]
	  		console.log(info);
	  		var infoDisplay = 
	  		` <div class="container mx-5" id="redFlag">
				<div class="btn-remove">
					<button id="btn-delete-display-info">&cross;</button>
				</div>
                <div class="row" id="row1-redflag-info">
                    <div class="col">
                    <label>FullName : </label>
                        <h3>${info.first+" "+info.middle+" "+info.last}</h3>
                    </div>
                    <div class="col">
                    <label>country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row" id="row2-redflag-info">
	                <div class="col">
	                    <label>gender : </label>
	                        <h3>${info.gender}</h3>
	                    </div> 
	                    <div class="col">
	                    <label>birthDay : </label>
	                        <h3>${info.birthDay}</h3>
	                    </div>
	                </div> 
	                </div>             
	            </div>`;
	  	$("#display").html(infoDisplay)

		}
	}
	 	
}
	// ==================The end of the main.js ==================

})
console.log("jjjj")