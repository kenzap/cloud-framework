<?php 
$q = "";
if(isset($_GET['s'])) $q = urldecode($_GET['s']);
if(isset($_GET['q'])) $q = urldecode($_GET['q']);

function kenzap_cta_hexToRgb_25($hex, $alpha = 0.5){
	$hex      = str_replace('#', '', $hex);
	$length   = strlen($hex);
	$rgb['r'] = hexdec($length == 6 ? substr($hex, 0, 2) : ($length == 3 ? str_repeat(substr($hex, 0, 1), 2) : 0));
	$rgb['g'] = hexdec($length == 6 ? substr($hex, 2, 2) : ($length == 3 ? str_repeat(substr($hex, 1, 1), 2) : 0));
	$rgb['b'] = hexdec($length == 6 ? substr($hex, 4, 2) : ($length == 3 ? str_repeat(substr($hex, 2, 1), 2) : 0));
	$rgb['a'] = $alpha;
	return 'rgba('.$rgb['r'].','.$rgb['g'].','.$rgb['b'].','.$alpha.')';
}
ob_start();

include KENZAP_CTA.'/src/commonComponents/container/container-cont.php'; ?>

<div id="primary" class="kpc25 <?php if($attributes['align']) echo "align".$attributes['align']." "; if(!$attributes['pagination']) echo "hide-pagi "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?> <?php echo esc_attr($kenzapSize); ?> <?php echo $attributes['boxed']?"boxed":""; ?> " style="--borderColor:<?php echo esc_attr(kenzap_cta_hexToRgb_25($attributes['textColor']));?>;--textColor:<?php echo esc_attr($attributes['textColor']);?>;--textColor2:<?php echo esc_attr($attributes['textColor2']);?>;--borderRadius:<?php echo esc_attr($attributes['borderRadius']);?>;--fontWeight:<?php echo esc_attr(intVal($attributes['fontWeight'])*100);?>;<?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">
	<div class="kenzap-container" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;">

        <div class="content content_search" >

			<header style="<?php echo esc_attr($attributes['t3']); ?>" class="page-header">
				<div style="<?php echo esc_attr($attributes['t3']); ?>" class="page-title text-light" style="text-align:<?php echo esc_attr($attributes['txAlign']);?>">
					<form>
						<?php if($attributes['searchText2']) printf( esc_html__( $attributes['searchText2'].' %s', 'kenzap-blog' ), '<span>' . $q . '</span>' ); ?>
						<input id="kp-search-field" name="q" type="text" value="<?php echo esc_attr($q); ?>" placeholder="<?php echo esc_attr($attributes['searchText']); ?>">
					</form>	
				</div>
			</header>

			<?php
			$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
			$args = array(
						'post_status'      => 'publish',
						'post_type'        => $attributes['postType'],
						's'       		   => $q,
						'posts_per_page'   => $attributes['per_page'],
						'max_num_pages'    => $attributes['per_page'],
						'suppress_filters' => true,
						'paged'            => $paged
						);
			
			$query = new WP_Query( $args );
			
			if ( $query->have_posts() ) : ?>

				<?php
				/* Start the Loop */
				while ( $query->have_posts() ) : $query->the_post();

					?><article id="post-<?php the_ID(); ?>" style="text-align:<?php echo esc_attr($attributes['txAlign']);?>" <?php post_class(); ?>>
						<?php if( get_the_title() ) : ?>
						<h3 style="<?php echo esc_attr($attributes['t0']); ?>" class="entry-title"><a style="<?php echo esc_attr($attributes['t0']); ?>" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<?php if($attributes['showDate'] || $attributes['showTags'] || $attributes['showCategory'] || $attributes['showComments']){ ?>
						<div class="post__meta">
							<ul style="<?php echo esc_attr($attributes['t2']); ?>" class="post__meta-list post__meta-list_inline">
								<?php if($attributes['showDate']){ ?><li style="<?php echo esc_attr($attributes['t2']); ?>" class="post__meta-item post__meta-date"><?php echo esc_html( get_the_date() ); ?></li><?php } ?>
								<?php if($attributes['showTags']){ ?><li style="<?php echo esc_attr($attributes['t2']); ?>" class="post__meta-item post__meta-author"><i class="fa fa-user-o" aria-hidden="true"></i><?php esc_html_e('By:', 'kenzap-blog' ); ?> <?php echo esc_html( get_the_author() ); ?></li><?php } ?>
								<?php if( get_the_category() ) : ?>
								<?php if($attributes['showCategory']){ ?><li style="<?php echo esc_attr($attributes['t2']); ?>" class="post__meta-item post__meta-category"><i class="fa fa-folder-open-o" aria-hidden="true"></i><?php esc_html_e('Category:', 'kenzap-blog' ); ?> <?php echo wp_kses( get_the_category_list(', '), array( 'a' => array( 'href' => array(), 'rel' => array() ) ) ); ?></li><?php } ?>
								<?php endif; ?>
								<?php if($attributes['showComments']){ ?><li style="<?php echo esc_attr($attributes['t2']); ?>" class="post__meta-item post__meta-comments"><i class="fa fa-comment-o" aria-hidden="true"></i><?php esc_html_e('Comments', 'kenzap-blog' ); ?>: <?php comments_number( '0', '1' , '%' ); ?></li><?php } ?>
							</ul>
						</div>
						<?php } ?>
						<?php if($attributes['showExcerpt']){ ?><div style="<?php echo esc_attr($attributes['t1']); ?>"><?php the_excerpt(); ?></div><?php } ?>
						<?php endif; ?>
					</article><?php

				endwhile; ?>

				<?php if( !$attributes['serverSide'] && $attributes['pagination'] ){
					
					$pagenum_link = get_pagenum_link(999999999);
					kenzap_cta_pagination( 'pagination', $query, $pagenum_link ); 
					
				} ?>

				<?php wp_reset_postdata(); ?>

			<?php wp_reset_postdata(); else : ?>
				 
				<?php $attributes['notext'] = __("Nothing found","kenzap-blog"); echo esc_html($attributes['notext']); ?>
				
			<?php endif; ?>
        </div>
	</div><!-- #main -->
</div><!-- #primary -->

<?php 

$buffer = ob_get_clean();
return $buffer;