<?php 

function kenzap_blog_listing_06() {

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
		'displayType' => array(
			'type'    => 'string',
			'default' => 'kp-horizontal',
		),
		'columns' => array(
			'type'    => 'number',
			'default' => 5,
		),
		'ignoreNoImage'    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'showSticky'    => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'showCategory'    => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'showDate'    => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'linkText'    => array(
			'type'    => 'string',
			'default' => 'Read more',
		),
		'category' => array(
			'type'    => 'string',
			'default' => "",
		),
		'per_page' => array(
			'type'    => 'number',
			'default' => 3,
		),
		'textColor' => array(
			'type' => 'string',	
			'default' => '#fff'
		),
		'textColor2' => array(
			'type' => 'string',	
			'default' => '#333'
		),
		'orderby' => array(
			'type' => 'string',	
			'default' => 'date/desc'
		),
		'pagination' => array(
			'type'    => 'boolean',
			'default' => false,
		),
		'mainColor' => array(
			'type' => 'string',	
			'default' => '#333'
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
	);

	// Register block PHP
	register_block_type( 'kenzap/cta-75', array(
		'attributes'      => array_merge($contAttributes, $attributes),
		'render_callback' => 'kenzap_blog_rendering_06',
	) );

    //backend rendering function
    function kenzap_blog_rendering_06( $attributes ) {

        return require_once 'block.php';
	}
}
add_action( 'init', 'kenzap_blog_listing_06' );

?>