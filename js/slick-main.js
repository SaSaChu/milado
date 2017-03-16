
$(document).ready(function(){
//$(function() { 同樣意思

	//Banner
	$('.slider-center').slick({
		// dots: false,
		// infinite: false,
		// speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerMode: true,
		centerPadding: '20%',
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					// arrows: false,
					centerMode: true,
					centerPadding: '20%',
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1300,
				settings: {
					// arrows: false,
					centerMode: true,
					centerPadding: '33%',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 900,
				settings: {
					// dots: true,
					// arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			}
		]
	});

	//slick active
	// $(".slick-active:eq(0)").addClass("foo");

});
