			$(function(){
				// $(document).ready(function(){
				// 	$(window).resize(function() {
				// 		wdth=$(window).width();
				// 		// $("span").text(wdth);
				// 		if(width < 991){
				// 			// $('.navbar-brand').fadeIn(2000);
				// 			// 
				// 			// $('.navbar-brand').css('display','block');
				// 			// $('#cadobox-sidenav').addClass('.switch-box');
				// 			$('.cadobox-sidenav .sidenav-tit').addClass('.switch-box-title');
				// 			$('.cadobox-sidenav .sidenav').addClass('.switch-box-content');
				// 		}else{
				// 			$('.cadobox-sidenav').removeClass('.switch-box');
				// 			$('.cadobox-sidenav .sidenav-tit').removeClass('.switch-box-title');
				// 			$('.cadobox-sidenav .sidenav').removeClass('.switch-box-content');
				// 		};

				// 	});
				// });
				//Q&A
				$('.switch-box .switch-box-title').click(function(event) {
					var active_status = $(this).attr('class').split(/\s+/);
					var is_active = 'N';
					for ( var i = 0 ; i < active_status.length ; i++ ){
						if ( active_status[i] == 'active' ){
							is_active = 'Y';	
						}
					}
					if ( is_active == 'N' ){
						$('.switch-box-title').removeClass('active');
						event.preventDefault();
						$(this).addClass('active');
						$('.switch-box-content').slideUp(500);
						$(this).next().slideDown(1000);
					}
				});
				$('.cadobox-sidenav .switch-close').click(function(event) {
					event.preventDefault();
					$('.switch-box-title').removeClass('active');
					$('.switch-box-content').slideUp(1000);
				});

			});