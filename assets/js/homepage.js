$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			$('.cls').hide();
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
			$('.cls').show();
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			$('.cls').show();
			event.stopPropagation();
			
		});
		
		$(document).on('click','.listPicture',function(){
			$(this).parent().find('.listInfo').slideToggle( "slow");
			
		});
		$(document).on('click','.listDescription',function(){
			$(this).parent().find('.listInfo').slideToggle( "slow");
		});
		
		
		
		$(document).on('click','.key',function(){
			var key = $(this).val();
			var username = localStorage.getItem("username");
			claimPoopPee(username, key);
		});

});
getPoopPee();
