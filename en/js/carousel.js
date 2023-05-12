$(document).ready(function(){
    console.log("The ready function has been called successfully.");
    $(".owl-carousel").owlCarousel({
      items: 1,
      // loop: true,
      autoplay: false,
      // autoplayTimeout: 5000,
      // autoplayHoverPause: true,
      // margin : 10,
      nav: true,
      // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      navText:['<span class="btn btn btn-outline">Prev</span>','<span class="btn btn btn-outline">next</span>'],
      dots: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      mouseDrag: false,
      touchDrag: false,
      
    });
  });
  const carouselWraps = document.querySelectorAll('.owl-carousel');
  carouselWraps.forEach(carouselWrap => {
      const playpause = carouselWrap.querySelector("#plyr_playpause");
   
     // When the slide changes
  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    // Pause all videos inside the current slide
    $(event.target).find('.owl-item.active video').each(function() {
      this.pause();
      $(playpause).removeClass("icon-icon_pause").addClass("icon-icon_play")
    });
  });
  });