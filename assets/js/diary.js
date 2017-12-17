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
    type: 'doughnut',

    // The data for our dataset
   data: {
    labels: ["Carbohydrate", "Fat", "Glucose", "Calories", "Water","Other"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#e74c3c",
        "#9b59b6",
        "#f1c40f",
		"#95a5a6",
      ],
      data: [12, 19, 10, 17, 28,3]
   }]
   }
});


var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["White", "Red", "Black","Brown","Yellow","Green","Blue"],
        datasets: [{
            label: "My score",
            backgroundColor: 'rgb(236, 109, 59)',
            borderColor: 'rgb(255, 255, 255)',
            data: [0, 0, 5,7,0,0,0],
        }]
    },

    // Configuration options go here
    options: {
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


var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Nuts", "Sausage", "Lumpy","Fluffy"],
        datasets: [{
            label: "My score",
            backgroundColor: 'rgb(236, 151, 59)',
            borderColor: 'rgb(255, 255, 255)',
            data: [3, 3, 4,2],
        }]
    },

    // Configuration options go here
    options: {
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




var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Green","Red","Brown", "Orange", "Yellow","White"],
        datasets: [{
            label: "My score",
            backgroundColor: 'rgb(255, 220, 99)',
            borderColor: 'rgb(255, 255, 255)',
            data: [0, 0,10, 3,5,4],
        }]
    },

    // Configuration options go here
    options: {
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
	