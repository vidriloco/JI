$(document).ready(function() {
	$('.drawer-trigger').click(function() {
		var id = "."+$(this).attr('id')+"-d";
		if($(id).is(':visible')) {
			$(id).fadeOut('slow');
		} else {
			$('.drawer-area div').hide();
			$(id).fadeIn('slow');
		}
	})
});