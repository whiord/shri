$(document).ready(function(){
	$(".section_header").click(function(event){
		var obj = $(event.currentTarget).parent().children(".section_body");

		if (obj.css("display") == "none"){
			obj.slideDown();
		}
		else {
			obj.slideUp();
		}
	});
});
