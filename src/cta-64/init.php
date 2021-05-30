<?php 

function kenzap_subscriptions_1() {

	require KENZAP_CTA.'/src/commonComponents/container/container-var.php';

	$attributes = array(
		'align' => array(
			'type'    => 'string',
			'default' => 'full',
		),

		'serverSide'    => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'borderRadius' => array(
			'type'    => 'number',
			'default' => 5,
		),
		
		'checkSidebar' => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'title' => array(
			'type'    => 'string',
			'default' => 'Sign up to get 10% discount!',
		),

		'terms' => array(
			'type'    => 'string',
			'default' => 'I have read and agree to the terms & conditions',
		),

		'titleSize' => array(
			'type'    => 'number',
			'default' => 22,
		),

		'fontWeight' => array(
			'type'    => 'number',
			'default' => 7,
		),

		'textColor' => array(
			'type'    => 'string',
			'default' => '#222',
		),

		'mainColor' => array(
			'type' => 'string',	
			'default' => '#9376df'
		),

		'link' => array(
			'type' => 'string',	
			'default' => ''
		),

		'textColor' => array(
			'type' => 'string',	
			'default' => '#6f6f6f'
		),
		
		't0' => array(
			'type' => 'string',	
		),
		't1' => array(
			'type' => 'string',	
		),
		't2' => array(
			'type' => 'string',	
		),
		't3' => array(
			'type' => 'string',	
		),
		't4' => array(
			'type' => 'string',	
		),
	);

	// Register block PHP
	register_block_type( 'kenzap/cta-64', array(
		'attributes'      => array_merge($contAttributes, $attributes),
		'render_callback' => 'kenzap_subscriptions_rendering_01',
	) );

    //backend rendering function
    function kenzap_subscriptions_rendering_01( $attributes ) {

        return require_once 'block.php';
	}
}
add_action( 'init', 'kenzap_subscriptions_1' );

?>