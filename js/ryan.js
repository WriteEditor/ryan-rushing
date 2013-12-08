$(document).ready(function(){
	$('#logo').on('mouseenter', 'svg', function(event){
		$(this).hide(10).animate({
			height: "0em",
			width: "0em",
			top: "2em",
			left: "2em"
		}, 100).stop();

		$('#logo').find('img').fadeIn(10).animate({
			height: "6em",
			width: "6em",
			top: "-0.5em",
			left: "-0.5em"
		}, 100);

	});

	$('#logo').on('mouseleave', 'img', function(event){
		$(this).hide(10).animate({
			height: "0em",
			width: "0em",
			top: "2em",
			left: "2em"
		}, 100).stop();

		$('#logo').find('svg').fadeIn(10).animate({
			height: "5em",
			width: "5em",
			top: "0em",
			left: "0em"
		}, 100);
	});
});	