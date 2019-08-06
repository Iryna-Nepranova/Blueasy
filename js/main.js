$(document).ready(function(){
	
	$('.tabs span').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs span').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    
    
	})

})
$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();
	$('.section').each(function(i) {
		
			if ($(this).position().top <= scrollDistance) {
					$('.nav .nav-item.active').removeClass('active');
					$('.nav .nav-item').eq(i).addClass('active');
			}
	});

if ($(this).scrollTop() > 50){  
	$('.navigation').addClass("navigation-sticky");
}
else{
	$('.navigation').removeClass("navigation-sticky");
}
}).scroll();





