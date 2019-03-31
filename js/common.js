$(document).ready(function() {
    'use strict';
    var $navBarAtTop, headroom;

    // All outside links opens in a new page ootb
    $("a[href^='http://'], a[href^='https://']").each(function(){
        if(this.href.indexOf(location.hostname) === -1) {
            $(this).attr('target', '_blank');
        }
    });

    // Show/hide navbar depending on scroll behaviour
    $navBarAtTop = $('#top-nav');
    if ($navBarAtTop.length > 0 && 'Headroom' in window) {
        headroom = new Headroom($navBarAtTop[0]);
        headroom.init();
    }
});
