$(function() {
    var menuLink = $('.link-menu');
	var menuCover = $('.top-menu');
	var navLink = $('.top-menu a');
	
	/* show menu on click button */
	$(menuLink).click(function(){
	    $(this).toggleClass('link-menu_active');
	    $(menuCover).toggleClass('top-menu_active');
	});
	
	/* hide menu on click link */
	$(navLink).click(function(){
	    $(menuLink).toggleClass('link-menu_active');
	    $(menuCover).toggleClass('top-menu_active');
	});
	
});