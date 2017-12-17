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
			var rate = $(this).parent().find('.ratecore').val();
			var current = $('.scorePoint').html();
			
			var check  = $(this).parent().find('.check').val();
			var c =''
			if(check == 1)
			{
				 c =parseInt(current) - parseInt(rate);
				  $(this).parent().find('.check').val(0);
				
				
				
			}else 
			{
				 c =parseInt(current) + parseInt(rate); 
				 $(this).parent().find('.check').val(1);
			}
			$('.scorePoint').html(c);
				
			
		});

});
getPoopPee();
