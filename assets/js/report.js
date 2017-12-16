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
		$(function() {
			$('body').removeClass('fade-out');
		});
		var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March"],
        datasets: [{
            label: "My score",
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(51, 128, 255)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
		fill: false,
		showLine:false,
		scales: {
    xAxes: [{
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
    }
		
	}
});
});
	