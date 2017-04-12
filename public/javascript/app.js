$(function() {
	$("#application_form").on( "submit", function( event ) {
		event.preventDefault();
		  
		var formData = {
			fullname: $('input[id=name]').val(),
			email: $('input[id=email]').val(),
			message: $('textarea[id=message]').val(),
			website: $('input[id=website]').val(),
			github: $('input[id=github]').val(),
			twitter: $('input[id=twitter]').val(),
			linkedin: $('input[id=linkedin]').val(),
			testmode: false //change to false when ready for deployment
		}

		console.log( formData );

		$.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            headers: {
		        'Accept': 'application/json'
		    },
            url         : 'https://www.pixl8.co.uk/api/jobs/v1/application/', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            success     : function(data) {
            	console.log("success");
            }
        })
	});
})