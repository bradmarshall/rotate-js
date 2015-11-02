
// Rotate.js
// A small script for rotating multiple items.
// ===========================================
// v1.0, licensed under GNU GPL.
// https://github.com/bradmarshall/rotate-js

function Rotator() {
	this.config = {};
	this.currentPage = 0;
	this.nextPage = 1;

	this.ANIMATEORDER_RANDOM     = 0;
	this.ANIMATEORDER_SEQUENTIAL = 1;
}

Rotator.prototype.init = function() {
	if(this.config.items.length) {
		// Hide all to begin with. it's probably more reliable
		// to do this in CSS but this is kind of a backup.
		this.hideAllItems(this.config.items);
		this.activateItem(this.config.items);

		var self = this;

		setInterval(function() {
			self.activateItem(self.config.items);
		}, this.config.displayInterval);
	}
}

Rotator.prototype.activateItem = function(items) {
	this.hideAllItems(items);

	if(items !== "undefined") {
		switch(this.config.animateOrder) {
			case this.ANIMATEORDER_RANDOM:
				activePage = this.getRandomInt(0, $(items).length - 1);
			break;
			case this.ANIMATEORDER_SEQUENTIAL:
				activePage = this.currentPage;
			break;
		}

		$(items).eq(activePage).addClass("active");

		if(this.config.animateOrder == this.ANIMATEORDER_SEQUENTIAL) {
			this.currentPage++;
			this.nextPage++;

			if(this.nextPage > items.length) {
				this.currentPage = 0;
				this.nextPage = 1;
			}
		}
	}
}

Rotator.prototype.hideAllItems = function(items) {
	if(items !== "undefined") {
		$(items).each(function(index, element) {
			$(element).removeClass("active");
		});
	}
}

Rotator.prototype.getRandomInt = function(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
