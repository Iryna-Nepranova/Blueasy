$(document).ready(function(){
	
	$('.tabs span').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs span').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    
    
	})

})