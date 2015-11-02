# rotate-js
A small script for rotating multiple items.

Animates multiple items within a container. Each item is a div that can contain
any type/amount of content. Items are rotated with a fade in/out animation.
You can have as many testimonials as you like.

## Usage

### MARKUP

Create the HTML structure. The script looks a series of adjacent items (typically divs)
in a container element (div.rotating-items).

<pre><code>
&lt;div class="rotating-items"&gt;
		&lt;div&gt;Item 1&lt;/div&gt;
		&lt;div&gt;Item 2&lt;/div&gt;
    	&lt;div&gt;Item 3&lt;/div&gt;
		...and so on...
&lt;/div&gt;
</code></pre>

### JAVASCRIPT

On DOM ready, define the config object and init the rotator class.

<pre><code>
	$(document).ready(function() {
		var rotator = new Rotator();

		rotator.config = {
			// How fast to rotate the items, in milliseconds.
			"displayInterval" : 10000,
			// The order in which the item panels will animate.
			"animateOrder" : ANIMATEORDER_SEQUENTIAL,
			// A CSS/querySelector path to the item elements (in this case a set of divs).
			"items" : $("div.retailer-logos > div.container > div")
		}

		// Initialize the rotator class.
		rotator.init();
	}
</code></pre>