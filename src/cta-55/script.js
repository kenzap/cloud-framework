( function( $ ) {
    'use strict';

    $(function() {

        var $container = $( ".kenzap .kenzap-gallery-7 .kp-img1");
        setTimeout(function(){kenzapG7($);},100);
        $(window).resize(function(){$( ".kenzap .kenzap-gallery-7 .kp-img0").css("min-height",$container.height());});
    });

}( jQuery ) );

function kenzapG7($){
    var $container = $( ".kenzap .kenzap-gallery-7 .kp-img1");
    $container.imagesLoaded(function () {$( ".kenzap .kenzap-gallery-7 .kp-img0").css("min-height",$container.height());});
}