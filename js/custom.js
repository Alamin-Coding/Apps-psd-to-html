var amin = document.querySelector('.work_mix');
var al = mixitup(amin);

// Add Class For Menu
$(window).scroll(function () {
	var alamin = $(this).scrollTop();
	if (alamin > 100) {
		$('.navbar').addClass('add');
	} else {
		$('.navbar').removeClass('add');
	}
});
$(function () {
	
	// For counter part
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
	var typed = new Typed('.element', {
		strings: [" one page template.", " one page template."],
		typeSpeed: 70,
		startDelay: 30,
		backSpeed: 20,
		smartBackspace: false,
		backDelay: 70,
		shuffle: true,
		loop: true,
		showCursor: false,
		cursorChar: '|',
		autoInsertCss: true,
		loopCount: Infinity,
	});
})