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
	
		var connection = navigator.connection || { type: 0 }; 
	 	return connection.type == 3 // connection.CELL_2G 
			|| connection.type == 4 // connection.CELL_3G
			|| /^[23]g$/.test(connection.type); // string value in new spec
	
		
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
					if ($(window).width() > settings.minwidth || connection.type == "") {
						$(this).attr('src', $(this).data('hisrc'));
					} else {
						$(this).attr('src', $(this).data('lowsrc'));
					}
				})
				.trigger('swapres.hisrc');
		})
			
	}
})(jQuery);


