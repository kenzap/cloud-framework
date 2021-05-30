<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function kenzap_cta_list_init() {
    $locale = is_admin() && function_exists( 'get_user_locale' ) ? get_user_locale() : get_locale();
    $locale = apply_filters( 'plugin_locale', $locale, 'kenzap-cta' );

    unload_textdomain( 'kenzap-cta' );
    load_textdomain( 'kenzap-cta', __DIR__ . '/languages/kenzap-cta-' . $locale . '.mo' );
    load_plugin_textdomain( 'kenzap-cta', false, __DIR__ . '/languages' );
}
add_action( 'init', 'kenzap_cta_list_init' );

// Load body class
function kenzap_cta_list_body_class( $classes ) {

	if ( is_array($classes) ){ $classes[] = 'kenzap'; }else{ $classes.=' kenzap'; }
	return $classes;
}
add_filter( 'body_class', 'kenzap_cta_list_body_class' );
add_filter( 'admin_body_class', 'kenzap_cta_list_body_class' );

/**
 * Enqueue Gutenberg block assets for frontend. Kenzap Cloud Framework separates each block 
 * assets and only loads them when the block is present. In other words if your website has 100 blocks
 * it skips assets of all those blocks that are not present on the actual page.
 * 
 * This approach works especially effective when used along with caching and minification plugins
 * such as Autoptimize and WP Super Cache.  
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.1.0
 */
function kenzap_cta_list_block_assets() {

	// Load all styles for test purposes
	// wp_enqueue_style(
	// 	'kenzap_cta_list_style-css',
    //     plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
    //     KENZAP_CTA_VERSION,
	// 	array()
    // );

    // get header page id 
    $th = get_theme_mod( 'template-header', '' );
    $post = get_post( $th );
    $hid = $post->ID;

    // get footer page id
    $th = get_theme_mod( 'template-footer', '' );
    $post = get_post( $th );
    $fid = $post->ID;

    $pathToPlugin = plugins_url( 'dist/', dirname( __FILE__ ) );

    if(is_singular() || is_home() || is_archive()){

        // under frontend we only load scripts and styles for each block individually
        $id = get_the_ID();
        if (has_block( 'kenzap/cta-1',$id)){

            wp_enqueue_style( 'kenzap-cta-1', plugins_url( 'dist/cta-1/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-2',$id)){

            wp_enqueue_style( 'kenzap-cta-2', plugins_url( 'dist/cta-2/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-3',$id)){

            wp_enqueue_style( 'kenzap-cta-3', plugins_url( 'dist/cta-3/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-4',$id)){

            wp_enqueue_style( 'kenzap-cta-4', plugins_url( 'dist/cta-4/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-5',$id)){

            wp_enqueue_style( 'kenzap-cta-5', plugins_url( 'dist/cta-5/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-6',$id)){

            wp_enqueue_style( 'kenzap-cta-6', plugins_url( 'dist/cta-6/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-7',$id)){

            wp_enqueue_style( 'kenzap-cta-7', plugins_url( 'dist/cta-7/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-8',$id)){

            wp_enqueue_style( 'kenzap-cta-8', plugins_url( 'dist/cta-8/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-9',$id)){

            wp_enqueue_style( 'kenzap-cta-9', plugins_url( 'dist/cta-9/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_register_script( 'paroller', $pathToPlugin . 'paroller/jquery.paroller.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'paroller' );
            wp_enqueue_script( 'kenzap-cta-9', plugins_url( 'cta-9/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-10',$id)){

            wp_enqueue_style( 'kenzap-cta-10', plugins_url( 'dist/cta-10/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-11',$id)){

            wp_enqueue_style( 'kenzap-cta-11', plugins_url( 'dist/cta-11/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-11', plugins_url( 'cta-11/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-12',$id)){

            wp_enqueue_style( 'kenzap-cta-12', plugins_url( 'dist/cta-12/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-12', plugins_url( 'cta-12/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-13',$id)){

            wp_enqueue_style( 'kenzap-cta-13', plugins_url( 'dist/cta-13/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-14',$id)){

            wp_enqueue_style( 'kenzap-cta-14', plugins_url( 'dist/cta-14/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_style( 'before-after', plugins_url( 'dist/bafter/before-after.min.css', dirname( __FILE__ ) ), array( 'wp-edit-blocks' ), KENZAP_CTA_VERSION );

            wp_register_script( 'before-after', $pathToPlugin . 'bafter/before-after.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'before-after' );

            wp_enqueue_script( 'kenzap-cta-14', plugins_url( 'cta-14/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-15',$id)){

            wp_enqueue_style( 'kenzap-cta-15', plugins_url( 'dist/cta-15/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);

            wp_register_script( 'marqueue', $pathToPlugin . 'marqueue/jquery.marquee.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'marqueue' );

            wp_enqueue_script( 'kenzap-cta-15', plugins_url( 'cta-15/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-16',$id)){

            wp_enqueue_style( 'kenzap-cta-16', plugins_url( 'dist/cta-16/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-17',$id)){

            wp_enqueue_style( 'kenzap-cta-17', plugins_url( 'dist/cta-17/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-18',$id)){

            wp_enqueue_style( 'kenzap-cta-18', plugins_url( 'dist/cta-18/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-19',$id)){

            wp_enqueue_style( 'kenzap-cta-19', plugins_url( 'dist/cta-19/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);

            wp_register_script( 'countdown', $pathToPlugin . 'countdown/jquery.countdown.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'countdown' );

            wp_enqueue_script( 'kenzap-cta-19', plugins_url( 'cta-19/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-20',$id)){
            
            wp_enqueue_style( 'kenzap-cta-20', plugins_url( 'dist/cta-20/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-21',$id)){
            
            wp_enqueue_style( 'kenzap-cta-21', plugins_url( 'dist/cta-21/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-21', plugins_url( 'cta-21/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-22',$id)){
            
            wp_enqueue_style( 'kenzap-cta-22', plugins_url( 'dist/cta-22/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-22', plugins_url( 'cta-22/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-23',$id)){
            
            wp_enqueue_style( 'kenzap-cta-23', plugins_url( 'dist/cta-23/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-24',$id)){
            
            wp_enqueue_style( 'kenzap-cta-24', plugins_url( 'dist/cta-24/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-24',$id)){
            
            wp_enqueue_style( 'kenzap-cta-24', plugins_url( 'dist/cta-24/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-25',$id)){
            
            wp_enqueue_style( 'kenzap-cta-25', plugins_url( 'dist/cta-25/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-25', plugins_url( 'cta-25/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-26',$id)){
            
            wp_enqueue_style( 'kenzap-cta-26', plugins_url( 'dist/cta-26/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-27',$id)){
            
            wp_enqueue_style( 'kenzap-cta-27', plugins_url( 'dist/cta-27/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        if (has_block( 'kenzap/cta-28',$id)){
            
            wp_enqueue_style( 'kenzap-cta-28', plugins_url( 'dist/cta-28/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-28', plugins_url( 'cta-28/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        if (has_block( 'kenzap/cta-29',$id)){
            
            wp_enqueue_style( 'kenzap-cta-29', plugins_url( 'dist/cta-29/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-29', plugins_url( 'cta-29/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // minimalist testimonials
        if (has_block( 'kenzap/cta-30',$id)){
            
            wp_enqueue_style( 'kenzap-cta-30', plugins_url( 'dist/cta-30/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-30', plugins_url( 'cta-30/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // classical testimonials
        if (has_block( 'kenzap/cta-31',$id)){
            
            wp_enqueue_style( 'kenzap-cta-31', plugins_url( 'dist/cta-31/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-31', plugins_url( 'cta-31/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // extendeds testimonials
        if (has_block( 'kenzap/cta-32',$id)){
            
            wp_enqueue_style( 'kenzap-cta-32', plugins_url( 'dist/cta-32/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-32', plugins_url( 'cta-32/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // team members
        if (has_block( 'kenzap/cta-33',$id)){
            
            wp_enqueue_style( 'font-awesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array() );
            wp_enqueue_style( 'kenzap-cta-33', plugins_url( 'dist/cta-33/blocks.style.build.css', dirname( __FILE__ ) ), array('font-awesome'), KENZAP_CTA_VERSION);
        }

        // horizontal animated steps
        if (has_block( 'kenzap/cta-34',$id)){
            
            wp_enqueue_style( 'kenzap-cta-34', plugins_url( 'dist/cta-34/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-34', plugins_url( 'cta-34/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // numbered steps
        if (has_block( 'kenzap/cta-35',$id)){
            
            wp_enqueue_style( 'kenzap-cta-35', plugins_url( 'dist/cta-35/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-35', plugins_url( 'cta-35/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // vertical steps
        if (has_block( 'kenzap/cta-36',$id)){
            
            wp_enqueue_style( 'kenzap-cta-36', plugins_url( 'dist/cta-36/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-36', plugins_url( 'cta-36/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // 3 columns steps
        if (has_block( 'kenzap/cta-37',$id)){
            
            wp_enqueue_style( 'kenzap-cta-37', plugins_url( 'dist/cta-37/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-37', plugins_url( 'cta-37/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // outlined steps
        if (has_block( 'kenzap/cta-38',$id)){
            
            wp_enqueue_style( 'kenzap-cta-38', plugins_url( 'dist/cta-38/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-38', plugins_url( 'cta-38/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // countdown timer
        if (has_block( 'kenzap/cta-39',$id)){
            
            wp_enqueue_style( 'kenzap-cta-39', plugins_url( 'dist/cta-39/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'jquery-countdown', $pathToPlugin . '/cta-39/jquery.countdown.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-39', plugins_url( 'cta-39/script.js', __FILE__ ), array('jquery', 'jquery-countdown'), KENZAP_CTA_VERSION );
        }

        // animated counter
        if (has_block( 'kenzap/cta-40',$id)){
            
            wp_enqueue_style( 'kenzap-cta-40', plugins_url( 'dist/cta-40/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'jquery-counterup', $pathToPlugin . '/cta-40/jquery.counterup.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'waypoints', $pathToPlugin . '/cta-40/waypoints.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-40', plugins_url( 'cta-40/script.js', __FILE__ ), array('jquery', 'waypoints', 'jquery-counterup'), KENZAP_CTA_VERSION );
        }

        // animated pie charts
        if (has_block( 'kenzap/cta-41',$id)){
            
            wp_enqueue_style( 'kenzap-cta-41', plugins_url( 'dist/cta-41/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'circle-progress', $pathToPlugin . '/cta-41/circle-progress.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-41', plugins_url( 'cta-41/script.js', __FILE__ ), array('jquery', 'circle-progress'), KENZAP_CTA_VERSION );
        }

        // animated bar charts
        if (has_block( 'kenzap/cta-42',$id)){
            
            wp_enqueue_style( 'kenzap-cta-42', plugins_url( 'dist/cta-42/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-42', plugins_url( 'cta-42/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // full width pricing table
        if (has_block( 'kenzap/cta-43',$id)){
            
            wp_enqueue_style( 'kenzap-cta-43', plugins_url( 'dist/cta-43/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // multi color pricing table
        if (has_block( 'kenzap/cta-44',$id)){
            
            wp_enqueue_style( 'kenzap-cta-44', plugins_url( 'dist/cta-44/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // tabbed pricing tables
        if (has_block( 'kenzap/cta-45',$id)){
            
            wp_enqueue_style( 'kenzap-cta-45', plugins_url( 'dist/cta-45/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-45', plugins_url( 'cta-45/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // animated pricing tables
        if (has_block( 'kenzap/cta-46',$id)){
            
            wp_enqueue_style( 'kenzap-cta-46', plugins_url( 'dist/cta-46/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'kenzap-cta-46', plugins_url( 'cta-46/script.js', __FILE__ ), array('jquery'), KENZAP_CTA_VERSION );
        }

        // classical pricing table
        if (has_block( 'kenzap/cta-47',$id)){
            
            wp_enqueue_style( 'kenzap-cta-47', plugins_url( 'dist/cta-47/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // pricing list
        if (has_block( 'kenzap/cta-48',$id)){
            
            wp_enqueue_style( 'kenzap-cta-48', plugins_url( 'dist/cta-48/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // grid wall gallery
        if (has_block( 'kenzap/cta-49',$id)){
            
            wp_enqueue_style( 'kenzap-cta-49', plugins_url( 'dist/cta-49/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'isotope', $pathToPlugin . 'isotope/isotope.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'packery-mode', $pathToPlugin . 'isotope/packery-mode.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-49', plugins_url( 'cta-49/script.js', __FILE__ ), array('jquery', 'images-loaded', 'isotope', 'packery-mode', 'fancybox'), KENZAP_CTA_VERSION );   
        }

        // minimalist gallery grid
        if (has_block( 'kenzap/cta-50',$id)){
            
            wp_enqueue_style( 'kenzap-cta-50', plugins_url( 'dist/cta-50/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'isotope', $pathToPlugin . 'isotope/isotope.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'packery-mode', $pathToPlugin . 'isotope/packery-mode.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-50', plugins_url( 'cta-50/script.js', __FILE__ ), array('jquery', 'images-loaded', 'isotope', 'packery-mode', 'fancybox'), KENZAP_CTA_VERSION );  
        }

        // caorusel gallery
        if (has_block( 'kenzap/cta-51',$id)){
    
            wp_enqueue_style( 'kenzap-cta-51', plugins_url( 'dist/cta-51/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-51', plugins_url( 'cta-51/script.js', __FILE__ ), array('jquery', 'owl-carousel', 'fancybox'), KENZAP_CTA_VERSION );  
        }

        // wide 1 column gallery
        if (has_block( 'kenzap/cta-52',$id)){

            wp_enqueue_style( 'kenzap-cta-52', plugins_url( 'dist/cta-52/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION ); 
        }

        // masonry gallery
        if (has_block( 'kenzap/cta-53',$id)){

            wp_enqueue_style( 'kenzap-cta-53', plugins_url( 'dist/cta-53/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'isotope', $pathToPlugin . 'isotope/isotope.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'packery-mode', $pathToPlugin . 'isotope/packery-mode.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-53', plugins_url( 'cta-53/script.js', __FILE__ ), array('jquery', 'images-loaded', 'isotope', 'packery-mode', 'fancybox'), KENZAP_CTA_VERSION );
        }

        // two image gallery
        if (has_block( 'kenzap/cta-54',$id)){

            wp_enqueue_style( 'kenzap-cta-54', plugins_url( 'dist/cta-54/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-54', plugins_url( 'cta-54/script.js', __FILE__ ), array('jquery', 'images-loaded'), KENZAP_CTA_VERSION );
        }

        // featured image gallery
        if (has_block( 'kenzap/cta-55',$id)){

            wp_enqueue_style( 'kenzap-cta-55', plugins_url( 'dist/cta-55/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-55', plugins_url( 'cta-55/script.js', __FILE__ ), array('jquery','images-loaded'), KENZAP_CTA_VERSION );
        }

        // metro image gallery
        if (has_block( 'kenzap/cta-56',$id)){

            wp_enqueue_style( 'kenzap-cta-56', plugins_url( 'dist/cta-56/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'isotope', $pathToPlugin . 'isotope/isotope.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'packery-mode', $pathToPlugin . 'isotope/packery-mode.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.css', array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'fancybox', $pathToPlugin . 'fancy-box/fancybox.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-56', plugins_url( 'cta-56/script.js', __FILE__ ), array('jquery','images-loaded'), KENZAP_CTA_VERSION );
        }

        // features grid block
        if (has_block( 'kenzap/cta-57',$id)){

            wp_enqueue_style( 'kenzap-cta-57', plugins_url( 'dist/cta-57/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // carousel feature list
        if (has_block( 'kenzap/cta-58',$id)){

            wp_enqueue_style( 'kenzap-cta-58', plugins_url( 'dist/cta-58/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-58', plugins_url( 'cta-58/script.js', __FILE__ ), array('jquery','owl-carousel'), KENZAP_CTA_VERSION );
        }

        // carousel feature list
        if (has_block( 'kenzap/cta-59',$id)){

            wp_enqueue_style( 'kenzap-cta-59', plugins_url( 'dist/cta-59/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // features list centered
        if (has_block( 'kenzap/cta-60',$id)){

            wp_enqueue_style( 'kenzap-cta-60', plugins_url( 'dist/cta-60/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // advantages grid
        if (has_block( 'kenzap/cta-61',$id)){

            wp_enqueue_style( 'kenzap-cta-61', plugins_url( 'dist/cta-61/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // brands 1
        if (has_block( 'kenzap/cta-62',$id)){

            wp_enqueue_style( 'kenzap-cta-62', plugins_url( 'dist/cta-62/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // partners carousel block
        if (has_block( 'kenzap/cta-63',$id)){

            wp_enqueue_style( 'kenzap-cta-63', plugins_url( 'dist/cta-63/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-63', plugins_url( 'cta-63/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // subscription newsletter
        if (has_block( 'kenzap/cta-64',$id)){

            wp_enqueue_style( 'kenzap-cta-64', plugins_url( 'dist/cta-64/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // subscription newsletter
        if (has_block( 'kenzap/cta-65',$id)){

            wp_enqueue_style( 'kenzap-cta-65', plugins_url( 'dist/cta-65/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // beautiful heading
        if (has_block( 'kenzap/cta-66',$id) || has_block( 'kenzap/cta-66',$hid) || has_block( 'kenzap/cta-66',$fid)){

            wp_enqueue_style( 'kenzap-cta-66', plugins_url( 'dist/cta-66/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // stylish pharagraph
        if (has_block( 'kenzap/cta-67',$id) || has_block( 'kenzap/cta-67',$hid) || has_block( 'kenzap/cta-67',$fid)){

            wp_enqueue_style( 'kenzap-cta-67', plugins_url( 'dist/cta-67/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // navigation menu
        if (has_block( 'kenzap/cta-68',$id) || has_block( 'kenzap/cta-68',$hid) || has_block( 'kenzap/cta-68',$fid)){

            wp_enqueue_style( 'kenzap-cta-68', plugins_url( 'dist/cta-68/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'superfish', $pathToPlugin . 'cta-68/superfish.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-68', plugins_url( 'cta-68/script.js', __FILE__ ), array('jquery', 'superfish'), KENZAP_CTA_VERSION );
        }

        // top bar menu
        if (has_block( 'kenzap/cta-69',$id) || has_block( 'kenzap/cta-69',$hid) || has_block( 'kenzap/cta-69',$fid)){

            wp_enqueue_style( 'kenzap-cta-69', plugins_url( 'dist/cta-69/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // classic grid post block
        if (has_block( 'kenzap/cta-70',$id)){

            wp_enqueue_style( 'kenzap-cta-70', plugins_url( 'dist/cta-70/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // classic vertical blog
        if (has_block( 'kenzap/cta-71',$id)){

            wp_enqueue_style( 'kenzap-cta-71', plugins_url( 'dist/cta-71/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // masonry blog
        if (has_block( 'kenzap/cta-72',$id)){

            wp_enqueue_style( 'kenzap-cta-72', plugins_url( 'dist/cta-72/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'images-loaded', $pathToPlugin . 'isotope/imagesloaded.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'isotope', $pathToPlugin . 'isotope/isotope.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'packery-mode', $pathToPlugin . 'isotope/packery-mode.pkgd.min.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-72', plugins_url( 'cta-72/script.js', __FILE__ ), array('jquery', 'imagesloaded', 'isotope', 'packery-mode'), KENZAP_CTA_VERSION );
        }

        // blog with right texts
        if (has_block( 'kenzap/cta-73',$id)){

            wp_enqueue_style( 'kenzap-cta-73', plugins_url( 'dist/cta-73/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // carousel blog
        if (has_block( 'kenzap/cta-74',$id)){

            wp_enqueue_style( 'kenzap-cta-74', plugins_url( 'dist/cta-74/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
            wp_enqueue_script( 'owl-carousel', $pathToPlugin . 'owl-carousel/owl-carousel.js', array('jquery'), KENZAP_CTA_VERSION );
            wp_enqueue_style( 'owl-carousel', $pathToPlugin.'owl-carousel/owl-carousel.css', array(), KENZAP_CTA_VERSION );
            wp_enqueue_script( 'kenzap-cta-74', plugins_url( 'cta-74/script.js', __FILE__ ), array('jquery', 'owl-carousel'), KENZAP_CTA_VERSION );
        }

        // blog
        if (has_block( 'kenzap/cta-75',$id)){

            wp_enqueue_style( 'kenzap-cta-75', plugins_url( 'dist/cta-75/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }

        // blog
        if (has_block( 'kenzap/cta-76',$id)){

            wp_enqueue_style( 'font-awesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array() );
            wp_enqueue_style( 'kenzap-cta-76', plugins_url( 'dist/cta-76/blocks.style.build.css', dirname( __FILE__ ) ), array('font-awesome'), KENZAP_CTA_VERSION);
        }

        // responsive spacer
        if (has_block( 'kenzap/cta-77',$id) || has_block( 'kenzap/cta-77',$hid) || has_block( 'kenzap/cta-77',$fid)){

            wp_enqueue_style( 'kenzap-cta-77', plugins_url( 'dist/cta-77/blocks.style.build.css', dirname( __FILE__ ) ), array(), KENZAP_CTA_VERSION);
        }
    }
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'kenzap_cta_list_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor. Unlike frontend we load aggregated JS and CSS
 * at once. We need this to make sure that to register all Cloud Framework blocks and preview them
 * immediately when they are added to the page.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function kenzap_cta_list_editor_assets() {

    $pathToPlugin = plugins_url( 'dist/', dirname( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'kenzap-cta', // Handle.
		plugins_url( 'dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
        KENZAP_CTA_VERSION, // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Block Styles.
	wp_enqueue_style(
		'kenzap-cta', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block editor CSS.
        array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
        KENZAP_CTA_VERSION
    );
    
    // Block Editor Styles.
	wp_enqueue_style(
		'kenzap-cta-editor', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
        array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
        KENZAP_CTA_VERSION
    );

    // This is only available in WP5.
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'kenzap-cta', 'kenzap-cta', KENZAP_CTA . '/languages/' );
	}

    wp_add_inline_script( 'wp-blocks', 'var kenzap_cta_path = "' .wp_parse_url($pathToPlugin)['path'].'"', 'before');

} // End function kenzap_feature_list_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'kenzap_cta_list_editor_assets' );

function kenzap_cta_add_specific_features( $post_object ) {
    if(!function_exists('has_blocks') || !function_exists('parse_blocks'))
        return;

    if ( has_blocks( $post_object ) ) {
        $pathToPlugin = plugins_url( 'dist/', dirname( __FILE__ ) );
        $blocks = parse_blocks( $post_object ->post_content );
        foreach ($blocks as $block) {


        }
    }
}
add_action( 'the_post', 'kenzap_cta_add_specific_features' );

// Universal pagination method for all blocks
if ( ! function_exists( 'kenzap_cta_pagination' ) ) :

	function kenzap_cta_pagination($class, $recentPosts, $pagenum_link){
	
		if ( is_front_page()) { 
            $pagenum_link = get_home_url()."/".get_post_field( 'post_name', get_option( 'page_on_front' ) )."/page/999999999/";  
        }
		echo '<nav class="'.esc_attr( $class ).'">';
		$big = 999999999; // need an unlikely integer
		$pagination = paginate_links( array(
			'base' => str_replace( $big, '%#%', esc_url( $pagenum_link ) ),
			'format' => '?paged=%#%',
			'current' => max( 1, get_query_var('paged') ),
			'total' => $recentPosts->max_num_pages,
			'type' => 'array',
			'prev_next'  => TRUE,
			'prev_text'     => '<span aria-hidden="true"> '.esc_html__( 'Previous', 'kenzap-blog' ).'</span>',
			'next_text'     => '<span aria-hidden="true">'.esc_html__( 'Next', 'kenzap-blog' ).' </span>'
			) );
			
			if( is_array( $pagination ) ) {
				$paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
				echo '<div class="nav-links">';
				foreach ( $pagination as $page ) {
					echo $page;
				}
				echo '</div>';
			}
	
		echo '</div>';
	}
	
endif;

// contact form backend registration
require_once 'cta-24/init.php';

// subscription newsletter backend registration
require_once 'cta-64/init.php';
require_once 'cta-65/init.php';

// navigation menu
require_once 'cta-68/init.php';

// blogs
require_once 'cta-70/init.php';
require_once 'cta-71/init.php';
require_once 'cta-72/init.php';
require_once 'cta-73/init.php';
require_once 'cta-74/init.php';
require_once 'cta-75/init.php';
require_once 'cta-76/init.php';