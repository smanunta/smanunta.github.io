$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;
     
  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn');
      }
    });
  }

  revealOnScroll();
});

$(document).ready(function()
{	
	$('.main_menu a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
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
