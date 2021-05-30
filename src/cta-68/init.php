<?php 
if ( ! function_exists( 'kenzap_menu_1' ) ) :

	function kenzap_menu_1() {

		require KENZAP_CTA.'/src/commonComponents/container/container-var.php';

		$attributes = array(
			'align' => array(
				'type'    => 'string',
				'default' => 'full',
			),

			'layout' => array(
				'type'    => 'string',
				'default' => 'norm',
			),

			'logo' => array(
				'type'    => 'string',
				'default' => 'none',
			),

			'logoSize' => array(
				'type'    => 'number',
				'default' => 40,
			),
			
			'logoSizem' => array(
				'type'    => 'number',
				'default' => 40,
			),
			
			'isSticky'    => array(
				'type'    => 'boolean',
				'default' => false,
			),

			'isTrans'    => array(
				'type'    => 'boolean',
				'default' => false,
			),
			//search
			'isSearch'    => array(
				'type'    => 'boolean',
				'default' => false,
			),

			'searchIcon' => array(
				'type'    => 'string',
				'default' => 'none',
			),

			'searchIconSize' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'cartIconTop' => array(
				'type'    => 'number',
				'default' => 4,
			),

			'cartIconRight' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'action' => array(
				'type'    => 'string',
				'default' => '/search-results/',
			),
		
			'searchText' => array(
				'type'    => 'string',
				'default' => 'Type to search',
			),
			//cart
			'isCart'    => array(
				'type'    => 'boolean',
				'default' => false,
			),

			'cartIcon' => array(
				'type'    => 'string',
				'default' => 'none',
			),

			'cartIconSize' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'cartIconSize2' => array(
				'type'    => 'number',
				'default' => 20,
			),
			//cta
			'isCTA'    => array(
				'type'    => 'boolean',
				'default' => false,
			),

			'ctaText' => array(
				'type'    => 'string',
				'default' => 'Button',
			),

			'ctaAction' => array(
				'type'    => 'string',
				'default' => '/',
			),

			'ctaIcon' => array(
				'type'    => 'string',
				'default' => 'none',
			),

			'ctaIconSize' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'ctaIconRight' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'ctaIconTop' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'ctaIconSize2' => array(
				'type'    => 'number',
				'default' => 20,
			),

			'ctaInverse' => array(
				'type'    => 'boolean',
				'default' => false,
			),

			'textColor2' => array(
				'type'    => 'string',
			),

			'textColor3' => array(
				'type'    => 'string',
			),

			'serverSide'    => array(
				'type'    => 'boolean',
				'default' => false,
			),
			
			'containerSidePadding' => array(
				'type' => 'number',	
				'default' => 0
			),
			't0' => array(
				'type' => 'string',	
				'default' => ''
			),
			't1' => array(
				'type' => 'string',	
				'default' => ''
			),
			't2' => array(
				'type' => 'string',	
				'default' => ''
			),
			'className' => array(
				'type' => 'string',	
				'default' => ''
			),
		);

		// Register block PHP 
		register_block_type( 'kenzap/cta-68', array(
			'attributes'      => array_merge($contAttributes, $attributes),
			'render_callback' => 'kenzap_menu_rendering_1',
		) );

	}

	//backend rendering function
	function kenzap_menu_rendering_1( $attributes ) {

		return require 'block.php';
	}
endif;

add_action( 'init', 'kenzap_menu_1' );

?>