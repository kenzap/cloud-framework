<?php 

function kenzap_cta_24() {

	require KENZAP_CTA.'/src/commonComponents/container/container-var.php';

	$attributes = array(
		'align' => array(
			'type'    => 'string',
			'default' => '',
		),
		
		'serverSide'    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		
		'showPostCounts'    => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'checkSidebar' => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'boxed' => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'btnInv' => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'borderRadius' => array(
			'type'    => 'number',
			'default' => 0,
		),

		'fontWeight' => array(
			'type'    => 'number',
			'default' => 7,
		),

		'textColor' => array(
			'type'    => 'string',
			'default' => '#fff',
		),

		'textColor2' => array(
			'type'    => 'string',
			'default' => '#23282d',
		),

		'mainColor' => array(
			'type' => 'string',	
			'default' => '#9376df'
		),

		'link' => array(
			'type' => 'string',	
			'default' => ''
		),

		'className' => array(
			'type' => 'string',	
			'default' => ''
		),
		
		't0' => array(
			'type' => 'string',	
		),
		't1' => array(
			'type' => 'string',	
		),
	);

	// Register block PHP 
	register_block_type( 'kenzap/cta-24', array(
		'attributes'      => array_merge($contAttributes, $attributes),
		'render_callback' => 'kenzap_cta_rendering_24',
	) );

    //backend rendering function
    function kenzap_cta_rendering_24( $attributes ) {

        return require_once 'block.php';
	}
}
add_action( 'init', 'kenzap_cta_24' );

?>