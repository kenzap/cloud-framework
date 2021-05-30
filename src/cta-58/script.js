jQuery(document).ready(function(){
    if (document.querySelector('.gutenberg-editor-page') || document.querySelector('.block-editor-page') || document.querySelector('.wp-admin')) {
        return false;
    }
    setTimeout(function() {


        jQuery(".kfl2 .owl-carousel").owlCarousel({
            autoplay: false,
            margin: 10,
            responsive: {
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                960:{
                    items:4
                },
                1200:{
                    items:4
                }
            }
        });

        jQuery(".owl-load").removeClass(".owl-load");
    });
});
