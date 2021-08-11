(function($) {

    // ScrollUp
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('.scrollingUp').addClass('is-active');
      } else {
        $('.scrollingUp').removeClass('is-active');
      }
    });
    $('.scrollingUp').on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // Sticky Header
    if ($(".is-sticky-on").length > 0) {
      $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 250) {
            $('.is-sticky-on').addClass('is-sticky-menu');
        }
        else {
            $('.is-sticky-on').removeClass('is-sticky-menu');
        }
      });
    }

    // Home Slider
    if ($(".home-slider").length > 0) {
      var $owlHome = $('.home-slider');
      $owlHome.owlCarousel({
          rtl: $("html").attr("dir") == 'rtl' ? true : false,
          items: 1,
          autoplay: true,
          autoplayTimeout: 5000,
          margin: 0,
          loop: true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          singleItem: true,
          transitionStyle: "fade",
          touchDrag: true,
          mouseDrag: false,
          responsive: {
              0: {
                  nav: false
              },
              768: {
                  nav: true
              },
              992: {
                  nav: true
              }
          }
      });
      $owlHome.owlCarousel();
      $owlHome.on('translate.owl.carousel', function (event) {
          var data_anim = $("[data-animation]");
          data_anim.each(function() {
              var anim_name = $(this).data('animation');
              $(this).removeClass('animated ' + anim_name).css('opacity', '0');
          });
      });
      $("[data-delay]").each(function() {
          var anim_del = $(this).data('delay');
          $(this).css('animation-delay', anim_del);
      });
      $("[data-duration]").each(function() {
          var anim_dur = $(this).data('duration');
          $(this).css('animation-duration', anim_dur);
      });
      $owlHome.on('translated.owl.carousel', function() {
          var data_anim = $owlHome.find('.owl-item.active').find("[data-animation]");
          data_anim.each(function() {
              var anim_name = $(this).data('animation');
              $(this).addClass('animated ' + anim_name).css('opacity', '1');
          });
      });
      function owlHomeThumb() {
          $('.owl-item').removeClass('prev next');
          var currentSlide = $('.home-slider .owl-item.active');
          currentSlide.next('.owl-item').addClass('next');
          currentSlide.prev('.owl-item').addClass('prev');
          var nextSlideImg = $('.owl-item.next').find('.item img').attr('data-img-url');
          var prevSlideImg = $('.owl-item.prev').find('.item img').attr('data-img-url');
          $('.owl-nav .owl-prev').css({
              backgroundImage: 'url(' + prevSlideImg + ')'
          });
          $('.owl-nav .owl-next').css({
              backgroundImage: 'url(' + nextSlideImg + ')'
          });
      }
      owlHomeThumb();
      $owlHome.on('translated.owl.carousel', function() {
          owlHomeThumb();
      });
    }
    
    //Active Nav Tab
    $(document).ready(function(){
      $(".menu-item").on('click',function(e){
        $(".menu-item").removeClass("active");
        $(this).addClass("active");
      })
    });

}(jQuery));
