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


// hamburger
type = "text/javascript" > jQuery(document).ready(function(jQuery) {
    jQuery('.sunplace_hamburger_box').click(function(event) {
        jQuery('.sunplace_header_nav_box').toggleClass('sunplace_header_nav_active');
        jQuery('.sunplace_hamburger_box').toggleClass('sunplace_hamburger_box_acive');
        jQuery('body').toggleClass('body_hidden');
    });
});