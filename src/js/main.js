jQuery(function($){
  $('.flexslider').flexslider({
    animation: "slide"
  });

  var body = $("body")
  var bars = $(".bars");
  bars.on('click', function(event) {
  	event.preventDefault();
  	body.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".header-menu-mobile");
  mobileMenu.on('click', function(event) {
  	event.preventDefault();
  	body.removeClass("mobile-menu-open");
  });
  var menuItems = $(".mobile-menu");
  menuItems.on('click', function(event) {
  	event.stopPropagation();
  });
});
