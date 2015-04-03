$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
		// $('.page-content').addClass("page-sticky");
  }
  else{
    $('header').removeClass("sticky");
		// $('.page-content').removeClass("page-sticky");
  }
});
