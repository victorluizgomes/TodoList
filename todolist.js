// check off specific todos by clicking
$("ul").on("click", "li", function(){
	// if the color is gray, turn it black and go back
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
	// fades out the li and removes it afterwards
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// stopPropagation makes it not bubble up the events
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing todo Text when Enter is pressed
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});
