// slider
var mySwiper = new Swiper ('.sunplace_main_slider', {
    loop: true,
    grabCursor: true,
    autoplay: {
    	delay: 2000,
  	},
    pagination: {
      el: '.sunplace_main_slider_pagination',
      clickable: true,
    },
  })



/* auto height services listimg > img */
$(function(){
	$('.sunplace_services_listimg_img').height($('.sunplace_services_listimg_img').width());
	$(window).on('resize', function(e) {
		$('.sunplace_services_listimg_img').height($('.sunplace_services_listimg_img').width());
	});
});