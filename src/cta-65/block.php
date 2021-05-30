<?php 
function kenzap_subs_hexToRgb_01($hex, $alpha = 0.5){
	$hex      = str_replace('#', '', $hex);
	$length   = strlen($hex);
	$rgb['r'] = hexdec($length == 6 ? substr($hex, 0, 2) : ($length == 3 ? str_repeat(substr($hex, 0, 1), 2) : 0));
	$rgb['g'] = hexdec($length == 6 ? substr($hex, 2, 2) : ($length == 3 ? str_repeat(substr($hex, 1, 1), 2) : 0));
	$rgb['b'] = hexdec($length == 6 ? substr($hex, 4, 2) : ($length == 3 ? str_repeat(substr($hex, 2, 1), 2) : 0));
	$rgb['a'] = $alpha;
	return 'rgba('.$rgb['r'].','.$rgb['g'].','.$rgb['b'].','.$alpha.')';
}
ob_start();

include KENZAP_CTA.'/src/commonComponents/container/container-cont.php'; // echo $kenzapStyles; ?>

<div class="kp-newsletter-2 <?php if($attributes['align']) echo "align".$attributes['align']." "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?> <?php echo esc_attr($kenzapSize); ?> <?php echo $attributes['btnInv']?"inverse":""; ?> <?php echo $attributes['btnRound']?"btnRound":"btnSquare"; ?>" style="--bc:<?php echo esc_attr($attributes['backgroundColor']);?>;--textColor:<?php echo esc_attr($attributes['textColor']);?>;--borderColor:<?php echo esc_attr(kenzap_subs_hexToRgb_01($attributes['textColor']));?>;<?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">
	<div class="kenzap-container" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;padding-right:<?php echo esc_attr($attributes['containerSidePadding']);?>px;padding-left:<?php echo esc_attr($attributes['containerSidePadding']);?>px;">

		<div class="kp-content">
			<h3 style="<?php echo esc_attr($attributes['t0']); ?>"><?php echo esc_html($attributes['title']);?></h3>
			<div class="kp-form">
				<div class="wrapper">
					<?php echo do_shortcode('[mc4wp_form id="'.$attributes['link'].'"]'); ?>
				</div>
				<label style="<?php echo esc_attr($attributes['t1']); ?>">
					<input  style="<?php echo esc_attr($attributes['t1']); ?>" type="checkbox" name="condition" value="Yes"><?php echo esc_html($attributes['terms']);?>
				</label>
			</div>
		</div>
			
	</div>
</div>	

<?php 

$buffer = ob_get_clean();
return $buffer;