<?php 

function kenzap_blog_listing_05() {

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
		'showComments'    => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'showTags'    => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'category' => array(
			'type'    => 'string',
			'default' => "",
		),
		'per_page' => array(
			'type'    => 'number',
			'default' => 5,
		),
		'textColor' => array(
			'type' => 'string',	
			'default' => '#23282d'
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
			'default' => '#007cba'
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
	register_block_type( 'kenzap/cta-74', array(
		'attributes'      => array_merge($contAttributes, $attributes),
		'render_callback' => 'kenzap_blog_rendering_05',
	) );

    //backend rendering function
    function kenzap_blog_rendering_05( $attributes ) {

        return require_once 'block.php';
	}
}
add_action( 'init', 'kenzap_blog_listing_05' );

?>