$( function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	// Initiate tabs
	$( "#tabs" ).tabs();
	

	// Initiate datepicker
	var date = new Date();
	var endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+90);
	$( "#arrival_date" ).datepicker({
		minDate: date,
		maxDate: endDate
	});
	
	// Initiate dialog
	$( "#dialog" ).dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			OK: function() {
				$( this ).dialog( "close" );
			}
		}
	});
	
	// View Cancellation Policies button click event
	$( "#policies" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
	});



	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the requested arrival date
			var arrivalDate = $("#arrival_date").val().trim();
			if (arrivalDate == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");				
			}
			$("#arrival_date").val(arrivalDate);
			
			// validate the number of nights
			var nights = $("#nights").val().trim();
			if (nights == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN($("#nights").val())) {
				$("#nights").next().text("This field must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}
			$("#nights").val(nights);		

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
					$("#email").next().text("Enter a valid email.");
					isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();                                        
			}
		} 
	);
});