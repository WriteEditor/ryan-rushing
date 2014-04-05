$(document).ready(function(){
	$('#open-close').on('click', function(event) {
		event.preventDefault();
		
		$('#get-around nav').toggle();
			return false;
	});
});	