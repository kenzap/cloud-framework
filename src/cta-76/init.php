<?php 

function kenzap_blog_07() {

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
			'default' => '#333',
		),

		'mainColor' => array(
			'type' => 'string',	
			'default' => '#9376df'
		),
		'link' => array(
			'type' => 'string',	
			'default' => ''
		),
		'txAlign' => array(
			'type' => 'string',	
			'default' => 'left'
		),
		'per_page' => array(
			'type'    => 'number',
			'default' => 6,
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
		'postType'    => array(
			'type'    => 'string',
			'default' => '',
		),
		'showExcerpt'    => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'pagination' => array(
			'type'    => 'boolean',
			'default' => false,
		),

		'searchText' => array(
			'type' => 'string',	
			'default' => 'Type to search'
		),
		'searchText2' => array(
			'type' => 'string',	
			'default' => 'Search Results for:'
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
		't2' => array(
			'type' => 'string',	
		),
		't3' => array(
			'type' => 'string',	
		),
	);

	// Register block PHP 
	register_block_type( 'kenzap/cta-76', array(
		'attributes'      => array_merge($contAttributes, $attributes),
		'render_callback' => 'kenzap_blog_rendering_07',
	) );

    //backend rendering function
    function kenzap_blog_rendering_07( $attributes ) {

        return require_once 'block.php';
	}
}
add_action( 'init', 'kenzap_blog_07' );

?>