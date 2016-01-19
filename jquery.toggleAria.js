/*!
 * toggleAria - jQuery Plugin
 * version: 0.1.0 (Tue, 19 Jan 2016)
 * requires jQuery v1.2 or later
 *
 * License: https://github.com/marcus-herrmann/toggleAria/blob/master/LICENSE
 *
 * Copyright 2016 Marcus Herrmann - github@marcus-herrmann.com
 *
 */
;(function($) {

    $.fn.toggleAria = function(attrSuffix) {

        var fullAttr = 'aria-' + attrSuffix;

        // Check if attr even exists
        if(!$(this)[0].hasAttribute(fullAttr)) {
            console.log("Element has no " + fullAttr + " in the first place, adding it, setting it to true.");
        }

        // Togglin' it
        this.attr(fullAttr, function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });

        return this;
    }
})(jQuery);