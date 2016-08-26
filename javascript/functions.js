$(document).ready(function()
{
	$("#aboutMeBtn").click(function()
{
    window.location = "aboutMe.html";
});
$("#projectsBtn").click(function()
{
	window.location = "projects.html";
});

	$('#header_and_wrapper_footer #animated_footer li a').hover(function()
	{
		$('#header_and_wrapper_footer #animated_footer li a').addClass('animated infinite swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function()
		{
			$(this).removeClass('animated infinite swing');
		});
	});
	$('#about_me_cover_header').click(function()
									 {
		$(this).fadeOut();
		$('#about_me_cover').fadeOut();
	});
});
