<?php  

ob_start();

require_once KENZAP_CTA.'/src/commonComponents/container/container-cont.php'; ?>
 
 <div class="kp-menu-4 <?php echo esc_attr($attributes['layout'])." "; if($attributes['isTrans']){ echo "kp-trans "; } if($attributes['isSticky']){ echo "kp-sticky "; } if($attributes['align']) echo "align".$attributes['align']." "; if($attributes['className']) echo esc_attr($attributes['className']); ?> <?php echo esc_attr($kenzapSize); ?>" style="<?php if($attributes['searchIcon']!="none") echo "--searchIcon:url(".esc_attr($attributes['searchIcon']).")"; ?>;--paddings2:<?php echo esc_attr($attributes['containerSidePadding']);?>px;--lgsm:<?php echo esc_attr($attributes['logoSizem']);?>px;--cartIconRight:<?php echo esc_attr($attributes['cartIconRight']);?>px;--cartIconTop:<?php echo esc_attr($attributes['cartIconTop']);?>px;<?php echo esc_attr($attributes['t0']);?>;<?php echo esc_attr($attributes['t1']);?>;<?php echo esc_attr($attributes['t2']);?> <?php echo ($kenzapStyles);//escaped in src/commonComponents/container/container-cont.php ?>">
	<div class="kenzap-container" style="max-width:<?php echo esc_attr($attributes['containerMaxWidth']);?>px;">
		<div class="kp-content">
			<div class="main-nav">
				<div class="kp-nav">
					
					<?php if ($attributes['layout']!='center') { ?>

						<div class="logo">
							<?php if($attributes['logo']!='none') { ?>
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img style="width:auto;height:<?php echo esc_attr($attributes['logoSize']);?>px" src="<?php echo esc_url($attributes['logo']); ?>" alt="logo"></a>
							<?php } ?>   
						</div>       
						
						<?php if ( has_nav_menu( 'primary' ) ) {

							wp_nav_menu( array(
								'theme_location'  => 'primary',
								'menu_id'         => 'menu-main',
								'menu_class'      => 'nav navbar-nav',
								'container'       => 'div',
								'container_id'    => 'tyuio',
								'container'       => false,
								'depth'           => 3,
								'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s',
								) ); ?>
						
							<?php if($attributes['isSearch']){ ?>
							<li class="kp-search">
								<a class="search-btn" href="#"><?php if($attributes['searchIcon']!='none'){ ?><img style="width:auto;height:<?php echo esc_attr($attributes['searchIconSize']);?>px" src="<?php echo esc_url($attributes['searchIcon']); ?>" alt="search icon"><?php } ?></a>
							</li>
							<?php }

							if($attributes['isCart']){ if(class_exists("Woocommerce")){ ?>
							<li class="kp-cart" style="--cartIconSize:<?php echo $attributes['cartIconSize']; ?>px;--cartIconSize2:<?php echo $attributes['cartIconSize2']; ?>px;<?php if($attributes['cartIcon']!="none"){ echo "--cartIcon:url(".$attributes['cartIcon'].");"; } ?>">
								<a class="cart-btn" href="<?php echo wc_get_cart_url(); ?>"><?php if($attributes['serverSide']){ echo "0"; }else{ global $woocommerce;echo $count = $woocommerce->cart->cart_contents_count; } ?></a>
							</li>
							<?php } }

							if($attributes['isCTA']){ ?>
							<li class="kp-cta" style="--ctaIconSize:<?php echo $attributes['ctaIconSize']; ?>px;--ctaIconSize2:<?php echo $attributes['ctaIconSize2']; ?>px;<?php if($attributes['ctaIcon']!="none"){ echo "--ctaIcon:url(".$attributes['ctaIcon'].");"; } ?>">
								<a class="cta-btn <?php if($attributes['ctaInverse']){echo 'inv';}else{echo 'ninv';} ?>" style="border-width:<?php echo esc_attr($attributes['ctaIconSize']); ?>px;border-radius:<?php echo esc_attr($attributes['ctaIconRight']); ?>px;padding:<?php echo ($attributes['ctaIconTop']); ?>px <?php echo ($attributes['ctaIconTop'])+5; ?>px;" href="<?php echo esc_attr($attributes['ctaAction']); ?>"><?php echo esc_html($attributes['ctaText']); ?></a>
							</li>
							<?php } ?>
						</ul>	
						<?php } ?>	

					<?php }else{ ?>

						<?php if ( has_nav_menu( 'primary' ) ) {

							wp_nav_menu( array(
							'theme_location'  => 'primary',
							'menu_id'         => 'mm-left',
							'menu_class'      => 'nav navbar-nav mm-left',
							'container'       => 'div',
							'container_id'    => 'tyuio',
							'container'       => false,
							'depth'           => 3,
							'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							) ); } ?>

						<div class="logo">
						<?php if($attributes['logo']!='none') { ?>
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img style="width:auto;height:<?php echo esc_attr($attributes['logoSize']);?>px" src="<?php echo esc_url($attributes['logo']); ?>" alt="logo"></a>
						<?php } ?>  
						</div>

						<?php if ( has_nav_menu( 'primary' ) ) {

						wp_nav_menu( array(
						'theme_location'  => 'primary',
						'menu_id'         => 'mm-right',
						'menu_class'      => 'nav navbar-nav mm-right',
						'container'       => 'div',
						'container_id'    => 'tyuio',
						'container'       => false,
						'depth'           => 3,
						'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						) ); } ?>

					<?php } ?>
				
					<ul class="mobile-menu">
						<?php if($attributes['isCart']){ if(class_exists("Woocommerce")){ ?>
						<li class="kp-cart" style="--cartIconSize:<?php echo $attributes['cartIconSize']; ?>px;--cartIconSize2:<?php echo $attributes['cartIconSize2']; ?>px;<?php if($attributes['cartIcon']!="none"){ echo "--cartIcon:url(".$attributes['cartIcon'].");"; } ?>">
							<a class="kp-mobile-cart" href="<?php echo wc_get_cart_url(); ?>"><?php if($attributes['serverSide']){ echo "0"; }else{ global $woocommerce;echo $count = $woocommerce->cart->cart_contents_count; } ?></a>
						</li>
						<?php } }

						if($attributes['isCTA']){ ?>
						<li class="kp-cta" style="--ctaIconSize:<?php echo $attributes['ctaIconSize']; ?>px;--ctaIconSize2:<?php echo $attributes['ctaIconSize2']; ?>px;<?php if($attributes['ctaIcon']!="none"){ echo "--ctaIcon:url(".$attributes['ctaIcon'].");"; } ?>">
							<a class="cta-btn <?php if($attributes['ctaInverse']){echo 'inv';}else{echo 'ninv';} ?>" style="border-width:<?php echo esc_attr($attributes['ctaIconSize']); ?>px;border-radius:<?php echo esc_attr($attributes['ctaIconRight']); ?>px;padding:<?php echo ($attributes['ctaIconTop']); ?>px <?php echo ($attributes['ctaIconTop'])+5; ?>px;" href="<?php echo esc_attr($attributes['ctaAction']); ?>"><?php echo esc_html($attributes['ctaText']); ?></a>
						</li>
						<?php } ?>
						<li>
							<a class="mobile-btn" href="#"><span></span></a>
						</li>
					</ul>		
				</div>
			</div>
			<div class="fullscreen-search">
				<div class="kenzap-container">
					<form action="<?php echo esc_url($attributes['action']);?>" >
						<a class="search-close" href="#"><span></span></a>
						<input id="kp-search-field" name="q" type="text" placeholder="<?php echo esc_attr($attributes['searchText']); ?>">
					</form>
				</div>
			</div>
			<div class="mobile-nav">

				<?php if ( has_nav_menu( 'primary_mobile' ) ) {
					wp_nav_menu(array(
						'theme_location'  => 'primary_mobile',
						'menu_class'      => 'nav navbar-nav',
						'container'       => 'div',
						'container_id'    => 'mobile-menu',
						'container'       => false,
						'depth'           => 3,
						'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s',
						)); ?>
					</ul>
				<?php } ?>
			</div>
		</div>
	</div>
</div>

<?php

$buffer = ob_get_clean();
return $buffer;