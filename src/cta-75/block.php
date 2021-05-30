<?php 
ob_start();

include KENZAP_CTA.'/src/commonComponents/container/container-cont.php';

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array(
	'post_status'       => 'publish',
	'post_type'         => 'post',
	'category_name'     => $attributes['category'],
	'posts_per_page'    => $attributes['per_page'],
	'paged'             => $paged,
);

if($attributes['ignoreNoImage']){ $args['meta_key'] = '_thumbnail_id'; }
if(!$attributes['showSticky']) $args['ignore_sticky_posts'] = 1;

// block is previed in wp editor
//if($attributes['serverSide']){ $kenzapSize="kenzap-xs"; }

//product order sorting
switch ( $attributes['orderby'] ) {
	case 'date/desc':
		$args['orderby'] = array( 'date' => 'DESC' );   
	break;
	case 'date/asc':
		$args['orderby'] = array( 'date' => 'ASC' );   
	break;
	case 'title/desc':
		$args['orderby'] = 'title';  
		$args['order'] = 'DESC';
	break;
	case 'title/asc':
		$args['orderby'] = 'title';  
		$args['order'] = 'ASC';
	break;
}
		
$postCount = 0;
$recentPosts = new WP_Query( $args );

//define blog style
$columnsImage = "kp_l";

if ( $recentPosts->have_posts() ) : ?>

	<div class="kbl3 <?php if($attributes['align']) echo "align".$attributes['align']." "; if($attributes['showCategory']) echo "uppercase ";?> <?php echo esc_attr($attributes['displayType'])." "; if(!$attributes['pagination']) echo "hide-pagi "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?>" style="--mc:<?php echo esc_attr($attributes['mainColor']); ?>;--tc:<?php echo esc_attr($attributes['textColor']); ?>;--pcl:<?php echo esc_attr($attributes['textColor2']); ?>; <?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">

		<div class="kenzap-container <?php echo esc_attr($kenzapSize); ?>" data-pagination="<?php echo esc_attr($attributes['pagination']); ?>" data-images="<?php echo esc_attr($attributes['columns']); ?>" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;">
			<div class="kenzap-row">

				<?php while( $recentPosts->have_posts() ) : 
				$recentPosts->the_post();
				$meta = get_post_meta( get_the_ID() ); ?>

					<div class="kenzap-col-4">
						<div class="blog-item">
							<div class="blog-img">
								<?php if ( has_post_thumbnail() ) : ?>
									<div class="blog-img">
										<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_the_permalink(); ?>" style="background-image:url(<?php echo get_the_post_thumbnail_url(get_the_ID(), $columnsImage, false ); ?>)"></a>
									</div>
								<?php else: ?>
									<div class="blog-img"> 
										<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_the_permalink(); ?>" ></a>
									</div>
								<?php endif; ?>	
								<?php if($attributes['showDate']){ 
									
									?><div class="blog-meta">
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_the_permalink(); ?>" >
										<?php echo '<span>'.get_the_time('j').'</span>'.get_the_time('M'); ?>
									</a>
								</div><?php } ?>
							</div>
							<div class="blog-info">
								<h3 class="blog-title" style="<?php echo esc_attr($attributes['t0']); ?>" >
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> style="<?php echo esc_attr($attributes['t0']); ?>"  href="<?php echo get_the_permalink(); ?>" ><?php the_title(); ?></a>
								</h3>
								<?php if($attributes['showDate']){ ?>
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> style="<?php echo esc_attr($attributes['t1']); ?>"  href="<?php echo get_the_permalink(); ?>" class="read-more"><?php echo esc_html($attributes['linkText']); ?> <span>&raquo;</span></a>
								<?php } ?>
							</div>
						</div>
					</div>

				<?php endwhile; ?>

			</div>
			<?php if( !$attributes['serverSide'] && $attributes['pagination'] ){
		
				$pagenum_link = get_pagenum_link(999999999);
				kenzap_cta_pagination( 'pagination', $recentPosts, $pagenum_link ); 
				
			} ?>
		</div>

	</div>
<?php wp_reset_postdata(); else: ?>

	<?php echo esc_html__('no posts to display', 'kenzap-blog'); ?>			

<?php endif;


$buffer = ob_get_clean();
return $buffer;