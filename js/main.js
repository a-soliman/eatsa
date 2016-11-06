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
	

	$("#monthOne").click(function(event) {
		$(".expect-text").css("display", "none")
		firstMonthContent.fadeIn(1000)

		$("#monthTwo, #monthThree").removeClass("selected")
		$(this).addClass("selected")
		event.preventDefault();
	})

	$("#monthTwo").click(function(event) {
		$(".expect-text").css("display", "none")
			secondMonthContent.fadeIn(1000)

			$("#monthOne, #monthThree").removeClass("selected")
			$(this).addClass("selected")

		event.preventDefault();
	})

	$("#monthThree").click(function(event) {
		$(".expect-text").css("display", "none")
			thirdMonthContent.fadeIn(1000)

			$("#monthOne, #monthTwo").removeClass("selected")
			$(this).addClass("selected")

		event.preventDefault();
	})
})