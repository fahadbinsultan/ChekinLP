$(document).ready(function(){

    $('.menu-trigger').on('click', function(){
        $('.nav-menu').toggleClass('open-menu')
    })

    $('.nav-menu ul li.menu-item-has-children > a').on('click', function(e){

        e.preventDefault()
        $(this).parent().toggleClass('open')
    })

    // Language Toggle

    $('.lang-login ul li.parent-item').hover(function(){
        $(this).find('.sub-menu').fadeIn(200)
    }, function(){
        $(this).find('.sub-menu').fadeOut(200)
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

    // Review Carousel

    var reviewCarousel = $('.review-carousel')
    reviewCarousel.owlCarousel({
      loop: true,
      rewind: false,
      items: 3,
      nav: true,
      navText: ["<img src='https://chekin.com/wp-content/themes/chekin2020/assets/images/prev-icon.svg'>","<img src='https://chekin.com/wp-content/themes/chekin2020/assets/images/next-icon.svg'>"],
      responsive: {
            0: {
                items: 1
            },
            768: {
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
    reviewCarousel.on('changed.owl.carousel', function(event) {
      setTimeout(setCarouselClass, 5)
    })

    $('body').on('click', '.left', function(){
        reviewCarousel.trigger('prev.owl.carousel')
    })

    $('body').on('click', '.right', function(){
        owl.trigger('next.owl.carousel')
    })

    // Brand Carousel

    var brandCarousel = $('.brand-carousel')
    brandCarousel.owlCarousel({
      rewind: true,
      nav: true,
      dots: false,
      navText: ["<img src='https://chekin.com/wp-content/themes/chekin2020/assets/images/prev-icon.svg'>","<img src='https://chekin.com/wp-content/themes/chekin2020/assets/images/next-icon.svg'>"],
      responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            520: {
                items: 3
            },
            600: {
                items: 4
            },
            768: {
                items: 5
            }
        }
    })

    // Count Down Effect

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    function prefill(s, width, char) {
        return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width)
    }

    

    var scrollLock = false,
        numbers = []

    $('.counter-animation').each(function(){
        var $this = $(this),
            number = $this.text().replaceAll('.', ''),
            len = number.length,
            width = $this.width()


        numbers.push(number)
        $this.css('width', width)
        $this.text(numberWithCommas(prefill('0', len, '0')))
    })

    $(window).on('load scroll', function(){

        var counterStartPosition = $('.status-section').offset().top

        if( $(window).scrollTop() > counterStartPosition - $(window).height()/2 && !scrollLock ) {

            $('.counter-animation').each(function(index){
                var $this = $(this),
                    number = numbers[index],
                    interval,
                    len = number.length,
                    currentDuration = 0,
                    duration = 1000,
                    frequency = 20

                interval = setInterval(function(){

                    if( currentDuration > duration ) {
                        clearInterval(interval)
                    }else{
                        $this.text(numberWithCommas(prefill(Math.round(number*currentDuration/duration), len, '0')))
                    }

                    currentDuration += frequency

                }, frequency)
            })

            scrollLock = true
        }
    })

    // Home Video Popup

    var video = document.querySelector('.video-content');

    $('.watch-video-button').on('click', function(e){
        e.preventDefault()
        video.play()
        $('.video-popup').fadeIn()
    })

    $('.video-popup-content').on('click', function(e){

        if( ! $(e.target).hasClass('video-content') ) {
            video.pause()
            video.currentTime = 0
            $('.video-popup').fadeOut()
        }
    })
})
