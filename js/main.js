	$('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });



	$('.scroll-top').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
				});
		


$(document).ready(function(){

	$( ".tile" ).mouseenter(function() {
	  $(".overlay", this).fadeIn(300);
	}).mouseleave(function() {
	  $(".overlay", this).fadeOut(300);
	});

});

