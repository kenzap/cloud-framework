<?php 
function kenzap_cta_hexToRgb_01($hex, $alpha = 0.5){
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
 

<?php if ( $attributes['serverSide'] ){ ?><img src="<?php echo plugins_url( 'assets/block_preview.jpg', __FILE__ ); ?>" alt="<?php echo esc_attr__('block preview', 'myticket-events'); ?>" />

<div style="font-size:11px;">
	<div><?php echo esc_html__('Note: Adjust form settings from the right pane; Click Update to preview changes on your website frontend. To add new form go to Ninja Forms > Dashboard section from your admin.', 'myticket-events'); ?></div>
</div><?php 

}else{ ?>

<div class="kp-cont-24 contact-form <?php if($attributes['align']) echo "align".$attributes['align']." "; if($attributes['autoPadding']){ echo ' autoPadding '; } if(isset($attributes['className'])) echo esc_attr($attributes['className'])." "; ?> <?php echo esc_attr($kenzapSize); ?> <?php echo esc_attr($attributes['boxed'])?"boxed":""; ?> <?php $attributes['btnInv']?"inverse":""; ?>" style="--borderColor:<?php echo esc_attr(kenzap_cta_hexToRgb_01($attributes['textColor']));?>;--textColor:<?php echo esc_attr($attributes['textColor']);?>;--textColor2:<?php echo esc_attr($attributes['textColor2']);?>;--borderRadius:<?php echo esc_attr($attributes['borderRadius']);?>px;--fontWeight:<?php echo esc_attr(intVal($attributes['fontWeight'])*100);?>;<?php echo esc_attr($attributes['t0']);?>;<?php echo esc_attr($attributes['t1']);?>;<?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">
	<div class="kenzap-container" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;padding-right:<?php echo esc_attr($attributes['containerSidePadding']);?>px;padding-left:<?php echo esc_attr($attributes['containerSidePadding']);?>px;">

		<div class="kp-content">
			<div class="kp-form">
				<div class="wrapper">
					<?php if($attributes['link']){ echo do_shortcode('[ninja_form id='.$attributes['link'].']'); }else{ echo esc_html__('Pleae specify Ninja Form ID. Go to Ninja Form > Add New.','kenzap-cloud'); } ?>
				</div>
			</div>
		</div>
			
	</div>
</div>	

<?php }

$buffer = ob_get_clean();
return $buffer;