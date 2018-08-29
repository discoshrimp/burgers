
//this is my front end javascript
//listening to my views directory
//this gets exported to handlebars


$.get("/api/all", function(data){

	if(data.length!==0){

		for(var i=0; i<data.length; i++){
		var row=$("<div>")
		row.addClass("burger")
		row.append("<p>"+data[i].burger+"</p>")
		}
	}
})

$("#submit").on("click", function(event){
	event.preventDefault();
	var newBurger = {
		burger: $("#burgerName").val().trim(),
		devoured: false,
	}

	console.log(newBurger);

	$.post("/api/new", newBurger)
	.then(function(){
		$("#burgerSpot").append(
		"<div class='row'>"+
			"<div class='col-xs'<p>"+
				newBurger.burger+"</p>"+
			"</div>"+
			"<div class='col-xs'>"+
				"<button class='btn btn-medium btn-danger'>DEVOUR IT!</button>"+
			"</div>"+
		"</div>")
		})
	})



