$(document).ready(function() {

	//Nav Bar Slide Down
	$(".navbar").slideDown(2000)

	//My Plan Car
	var firstMonthContent = $(".firstMonth")
	var secondMonthContent = $(".secondMonth")
	var thirdMonthContent = $(".thirdMonth")

	$("#monthOne").addClass("selected")
	$(".expect-text").css("display", "none")
	firstMonthContent.css("display", "block")

})