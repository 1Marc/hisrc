/*
 * Hisrc jQuery Plugin
 *
 * Copyright (c) 2011 "@1marc" Marc Grabanski
 * Licensed under the MIT license.
 * 
 */

(function($){
	$.hisrc = {
		els: $(),
		init: false
	}
	
	$.hisrc.defaults = {
		// change minimum width, if you wish
		minwidth: 640
	}


	$.fn.hisrc = function(options) {
		var settings = $.extend({}, $.hisrc.defaults, options);

		var lowbandwith = 0; // no
		var connection = navigator.connection || { type: 0 };
		
		if (connection == (3 || 4) ) {
			var lowbandwidth = 1; // yes			
		}


		$.hisrc.els = $.hisrc.els.add(this);
		
		if (!$.hisrc.init) {
			$(window).on('resize.hisrc', function(){
				$.hisrc.els.trigger('swapres.hisrc');
			});
		}
		
		return this.each(function(){
			$(this).data('lowsrc', $(this).attr('src'));
			
			$(this)
				.on('swapres.hisrc', function(){
					if (lowbandwith == 1) {
						$(this).attr('src', $(this).data('lowsrc'));
					} else if ($(window).width() > settings.minwidth) {
						$(this).attr('src', $(this).data('hisrc'))
					} else {
						$(this).attr('src', $(this).data('lowsrc'));
					}
				})
				.trigger('swapres.hisrc');
		})
			
	}
})(jQuery);


