<?php 

ob_start();

include KENZAP_CTA.'/src/commonComponents/container/container-cont.php'; ?>

	<div class="kp-newsletter-1 <?php if($attributes['align']) echo "align".$attributes['align']." "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?> <?php echo esc_attr($kenzapSize); ?>" style="--textColor:<?php echo esc_attr($attributes['textColor']);?>;--titleSize:<?php echo esc_attr($attributes['titleSize']);?>;--fontWeight:<?php echo esc_attr(intVal($attributes['fontWeight'])*100);?>;<?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">
		<div class="kenzap-container" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;padding-right:<?php echo esc_attr($attributes['containerSidePadding']);?>px;padding-left:<?php echo esc_attr($attributes['containerSidePadding']);?>px;">
			<div class="kp-content">
				<h3 style="<?php echo esc_attr($attributes['t0']); ?>" ><?php echo esc_html($attributes['title']);?></h3>
				<div class="kp-form">
					<div class="wrapper">
						<?php echo do_shortcode('[mc4wp_form id="'.$attributes['link'].'"]'); ?>
					</div>
					<label style="<?php echo esc_attr($attributes['t1']); ?>">
						<input type="checkbox" name="condition" value="Yes" ><?php echo esc_html($attributes['terms']);?>
					</label>
				</div>
			</div>
		</div>
	</div>
	
<?php 

$buffer = ob_get_clean();
return $buffer;