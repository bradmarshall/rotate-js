// Rotating Testimonials
// ---------------------
// Animates a testimonial section, displaying a single random testimonial
// at a time with fade in/outs. The script looks for markup that looks like:
//
// <div class="testimonials">
// 		<div>This is testimonial</div>
// 		<div>This is testimonial as well</div>
//		<div>so is this</div>
// 		...and so on...
// </div>
//
// You can have as many testimonials as you like.
//
// -Brad.

$(document).ready(function() {
	var ANIMATEORDER_RANDOM     = 0;
	var ANIMATEORDER_SEQUENTIAL = 1;
	
	var config = {
		// How fast to rotate the testimonials, in milliseconds.
		"displayInterval" : 10000,
		// The order in which the slides will animate.
		"animateOrder" : ANIMATEORDER_SEQUENTIAL,
		// A CSS/querySelector path to the "slide" elements.
		"testimonials" : $("div.retailer-logos > div.container > div")
	};


	var currentPage = 0;

	function activateRandomTestimonial(testimonials) {
		hideAllTestimonials(testimonials);

		if(testimonials !== "undefined") {
			var nextPage;

			switch(config.animateOrder) {
				case ANIMATEORDER_SEQUENTIAL:
					nextPage = getRandomInt(0, $(testimonials).length - 1);
				break;
				case ANIMATEORDER_RANDOM:
					currentPage++;

					if(currentPage > testimonials.length) {
						nextPage = 0;
					} else {
						nextPage = currentPage;
					}
				break;
			}

			$(testimonials).eq(nextPage).addClass("active");
		}
	}

	function hideAllTestimonials(testimonials) {
		if(testimonials !== "undefined") {
			$(testimonials).each(function(index, element) {
				$(element).removeClass("active");
			});
		}
	}

	function getRandomInt(min, max) {
	  return Math.round(Math.random() * (max - min)) + min;
	}

	if(config.testimonials.length) {
		// Hide all to begin with. it's probably more reliable
		// to do this in CSS but this is kind of a backup.
		hideAllTestimonials(config.testimonials);
		activateRandomTestimonial(config.testimonials);

		setInterval(function() {
			activateRandomTestimonial(config.testimonials);
		}, config.displayInterval);
	}
});