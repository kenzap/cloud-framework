jQuery( document ).ready( function() {
    "use strict";

    jQuery( '.kenzap .kenzap-pricing-4 .tabs-nav li:first-child' ).addClass( 'active' );
    jQuery( '.kenzap .kenzap-pricing-4 .tab-content:first' ).addClass( 'active' );

    jQuery( '.kenzap .kenzap-pricing-4 .tabs-nav li' ).click( function() {
        jQuery( '.kenzap .kenzap-pricing-4 .tabs-nav ul li' ).removeClass( 'active' );
        jQuery( '.kenzap .kenzap-pricing-4 .tab-content' ).removeClass( 'active' );
        jQuery( this ).addClass( 'active' );

		const activeTab = jQuery( this ).find( 'a' ).attr( 'href' );
        jQuery( activeTab ).addClass( 'active' );
		return false;
	} );
} );
