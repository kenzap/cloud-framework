jQuery( document ).ready( function() {
    "use strict";
    
    jQuery( '.kenzap .kenzap-pricing-3 .tabs-nav li:first-child' ).addClass( 'active' );
    jQuery( '.kenzap .kenzap-pricing-3 .tab-content:first' ).show();

    jQuery( '.kenzap .kenzap-pricing-3 .tabs-nav li' ).click( function() {
        jQuery( '.kenzap .kenzap-pricing-3 .tabs-nav ul li' ).removeClass( 'active' );
        jQuery( this ).addClass( 'active' );
        jQuery( '.kenzap .kenzap-pricing-3 .tab-content' ).hide();

		const activeTab = jQuery( this ).find( 'a' ).attr( 'href' );
        jQuery( activeTab ).fadeIn();
		return false;
	} );
} );
