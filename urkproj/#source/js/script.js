$(document).ready(function() {
  // slick carousel
  $('#main-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
		verticalSwiping: true,
		prevArrow: $('.main-slider-controls__arrow-prev'),
		nextArrow: $('.main-slider-controls__arrow-next'),
		dots: true,
		appendDots: $(".main-slider-controls__dots"),
    customPaging: function(slider, i) { 
        return '<button class="main-slider-controls__dot">' + '</button>';
    },
	});
	
	$(document).ready(function () {

		$(".wrapper").addClass("active")
	
		var parallaxElem = document.getElementById("scene");
		var parallaxInstance = new Parallax(parallaxElem);
	
	});
});