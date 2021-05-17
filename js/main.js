
$(document).ready(function(){

	$('.menu-trigger').on('click', function(){
	    $('.menu').toggleClass('open-menu')
	})

	// Header Scroll Animation

	var headerFixedPosition = 100

	$(window).on('load scroll', function(){
		if( $(window).scrollTop() > headerFixedPosition ) {
			$('.header-wrapper').addClass('fixed')
		}else{
			$('.header-wrapper').removeClass('fixed')
		}
	})

	// Testimonial Carousel

	var owl = $('.review-carousel');
      owl.owlCarousel({
        loop: true,
        rewind: false,
        items: 3,
        nav: true,
        navText: ["<img src='img/prev-icon.svg'>","<img src='img/next-icon.svg'>"],
        responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			}
        }
      })

      function setCarouselClass(){
        $('.review-carousel.owl-drag .owl-item').removeClass('middle side left right')
        $('.review-carousel.owl-drag .owl-item.active').eq(1).addClass('middle')
        $('.review-carousel.owl-drag .owl-item.active').eq(0).addClass('side left')
        $('.review-carousel.owl-drag .owl-item.active').eq(2).addClass('side right')
      }

      setCarouselClass()
      owl.on('changed.owl.carousel', function(event) {
        setTimeout(setCarouselClass, 5)
      })

      $('body').on('click', '.left', function(){
      	owl.trigger('prev.owl.carousel')
      })

      $('body').on('click', '.right', function(){
      	owl.trigger('next.owl.carousel')
      })

})
