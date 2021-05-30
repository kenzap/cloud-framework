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
if($attributes['ignoreSticky']){ $args['ignore_sticky_posts'] = 1; }

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

	<div class="kbl5 <?php if($attributes['align']) echo "align".$attributes['align']." "; echo esc_attr($attributes['displayType'])." "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?>" style="--mc:<?php echo esc_attr($attributes['mainColor']); ?>;<?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">

		<div class="kenzap-container <?php echo esc_attr($kenzapSize); ?>" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;">
			<div class="kenzap-row">

				<?php while( $recentPosts->have_posts() ) : 
				$recentPosts->the_post();
				$meta = get_post_meta( get_the_ID() ); ?>

					<div class="kenzap-col-6">
						<div class="blog-item">

							<?php if ( has_post_thumbnail() ) : ?>
								<div class="blog-img">
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_the_permalink(); ?>" style="background-image:url(<?php echo get_the_post_thumbnail_url(get_the_ID(), $columnsImage, false ); ?>)"></a>
								</div>
							<?php else: ?>
								<div class="blog-img"> 
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_the_permalink(); ?>" ></a>
								</div>
							<?php endif; ?>	

							<div class="blog-info">
								<ul style="<?php echo esc_attr($attributes['t2']); ?>" class="blog-meta <?php if(!$attributes['showDate'] && !$attributes['showCategory'] && !$attributes['showComments'] && !$attributes['showTags']) echo 'hidden'; ?>">
									<?php if($attributes['showDate']){ ?>
										<li>
											<a style="<?php echo esc_attr($attributes['t2']); ?>" <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="javascript:;"><?php echo get_the_date(); ?></a>
										</li>
									<?php } ?>
									<?php if($attributes['showCategory']){ 
										$category = get_the_category(); if(isset($category[0])){ ?>
											<li>
												<a style="<?php echo esc_attr($attributes['t2']); ?>" <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_category_link($category[0]->term_id); ?>"><?php echo esc_html($category[0]->cat_name); ?></a>
											</li>
										<?php }
									} ?>
									<?php if($attributes['showComments']){ 
										$category = get_the_category(); if(isset($category[0])){ ?>
											<li>
												<a style="<?php echo esc_attr($attributes['t2']); ?>" href="javascript:;" ><?php echo comments_number( esc_html__( 'no comments', 'kenzap-blog' ), esc_html__( 'one comment', 'kenzap-blog' ), '% ' . esc_html__( 'comments', 'kenzap-blog' ) ); ?></a>
											</li>
										<?php }
									} ?>
									<?php if($attributes['showTags']){ 
										$tag = get_the_tags(); if(isset($tag[0])){ ?>
											<li>
												<a style="<?php echo esc_attr($attributes['t2']); ?>" <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> href="<?php echo get_category_link($tag[0]->term_id); ?>"><?php echo esc_html($tag[0]->name); ?></a>
											</li>
										<?php }
									} ?>
								</ul>
								<h4 class="blog-title" style="<?php echo esc_attr($attributes['t0']); ?>">
									<a <?php if($attributes['serverSide']){ echo 'target="_blank"'; } ?> style="<?php echo esc_attr($attributes['t0']); ?>" href="<?php echo get_the_permalink(); ?>"><?php the_title(); ?></a>
								</h4><p style="<?php echo esc_attr($attributes['t1']); ?>"><?php $limit = 10;
								switch($attributes['displayType']){
									case 'kp-horizontal':$limit=10;break;
									case 'kp-square':$limit=20;break;
									case 'kp-vertical':$limit=40;break;
								}
								$excerpt = explode(' ', get_the_excerpt(), $limit);
								if (count($excerpt)>=10) { array_pop($excerpt);$excerpt = implode(" ",$excerpt).'...';} else { $excerpt = implode(" ",$excerpt);}	
								$excerpt = preg_replace('`[[^]]*]`','',$excerpt);
								echo $excerpt; ?></p>
								<div class="blog-author" style="<?php echo esc_attr($attributes['t2']); ?>"><?php echo esc_html__('by', 'kenzap-blog')." "; the_author_posts_link(); ?></div>	
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
<?php  wp_reset_postdata(); else: ?>

	<?php echo esc_html__('no posts to display', 'kenzap-blog'); ?>			

<?php endif;

$buffer = ob_get_clean();
return $buffer;