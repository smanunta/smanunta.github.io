$(document).ready(function()
{
	$("ul#main_menu li").mouseover(function()
	{
		$(this).find("h2").stop().animate({color:"#000"}, 300);
		$(this).stop().animate({backgroundColor:"#fff"}, 300);
	}).mouseout(function()
	{
		$(this).find("h2").stop().animate({color:"#fff"}, 300);
		$(this).stop().animate({backgroundColor:"transparent"}, 300);
	});
	
	$('.main_menu a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	$('.menu a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	$('.second_menu_li a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	height = $(window).height();
	$('#header_and_wrapper').css('height', height);
	$('#about_me').css('height', height);
	$('#my_sites').css('height', height);
	
	window.onresize = function(event)
	{
		height = $(window).height();
		if(height > 835)
		{
			$('#header_and_wrapper').css('height', height);
			$('#about_me').css('height', height);
			$('#my_sites').css('height', height);
		}else
		{
			$('#header_and_wrapper').css('height', '835px');
			$('#about_me').css('height', '835px');
			$('#my_sites').css('height', '835px');
		}
	};
	$('#header_and_wrapper_footer #animated_footer li a').hover(function()
	{
		$('#header_and_wrapper_footer #animated_footer li a').addClass('animated infinite swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function()
		{
			$(this).removeClass('animated infinite swing');
		});
	});
});