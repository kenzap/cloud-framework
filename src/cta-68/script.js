(function ($) {
 	"use strict";
 
	$(function() {

		$(".kenzap .kp-menu-4 .kp-nav > ul > li").has('> ul').addClass('kp-drop-menu');
		$(".kenzap .kp-menu-4 .kp-nav > ul > li > ul > li").has('> ul').find(' > a').addClass('kp-arrow');
		$(".kenzap .kp-menu-4 .mobile-nav ul li").has('ul').children('a').addClass('child-link');
		
		$(".kenzap .kp-menu-4 .kp-content .kp-nav > ul > li > .kp-tab-nav > div > .kp-tab-menu > li").hover(function() {
			$(".kp-tab").removeClass('tab-show');
			$(".kenzap .kp-menu-4 .kp-content .kp-nav > ul > li > .kp-tab-nav > div > .kp-tab-menu > li").removeClass('active');					
			$(this).addClass("active");					
			var selected_tab = $(this).find("a").attr("data-tab");
			$("#"+selected_tab).addClass("tab-show");
			return false;
		});
		
		$(".kenzap .kp-menu-4 a,.kenzap .kp-menu-4 div").on("click", function(){

			if ($(this).hasClass("search-btn")) { 
				$('.kenzap .kp-menu-4 .fullscreen-search').addClass('loaded');
				$('#kp-search-field').focus();
				return false;
			}
			
			if ($(this).hasClass("search-close")) { 
				$('.kenzap .kp-menu-4 .fullscreen-search').removeClass('loaded');
				return false;
			}
						
			if ($(this).hasClass("mobile-btn")) { 
				$('.kenzap .kp-menu-4').toggleClass('dropped');
				$(this).toggleClass("on");
				$(".kenzap .kp-menu-4 .mobile-nav > ul").slideToggle(300);
				return false;
			}
			
			if ($(this).hasClass("child-link")) { 
			
				var $this = $(this);
				
				if ($this.next().hasClass('show')) {
					$this.next().removeClass('show');
					$this.next().slideUp(350);
					$this.removeClass('current');
				} else {
					$this.parent().parent().find('li ul').removeClass('show');
					$this.parent().parent().find('li a').removeClass('current');
					$this.parent().parent().find('li ul').slideUp(350);
					$this.next().toggleClass('show');
					$this.next().slideToggle(350);
					$this.addClass('current');
				}
				
				return false;
			}	

			// scroll navigation
			if ($(this)[0].hasAttribute("href")) { 

				var link = $(this).attr('href');
				var lh = link.indexOf("#");
				if(lh){
					var linkS = link.substring(lh, link.length).replace("#", ".");
					if(window.location.href.indexOf(link)){
						$('html, body').animate({scrollTop: $(linkS).offset().top-100}, 1000);
						window.location.hash = "";
						return false;
					}
				}
			}
		});

		// page scroll through navigation 
		if(window.location.href.indexOf("#")){var linkF = window.location.href.substring(window.location.href.indexOf("#"), window.location.href.length);setTimeout(function(){$('a[href$="'+linkF+'"]:first').click();},500);}

	});	

}(jQuery));