
var config = {
	apiKey: "AIzaSyAPMQAvPjn6WwjQY0oNopMIvZ71-sJLEFk",
	authDomain: "poopdiary-8f211.firebaseapp.com",
	databaseURL: "https://poopdiary-8f211.firebaseio.com",
	projectId: "poopdiary-8f211",
	storageBucket: "poopdiary-8f211.appspot.com",
	messagingSenderId: "336174570643"
};
firebase.initializeApp(config);



function authenticate(username,pass){
	firebase.database().ref('/user/'+username).once('value').then(function(ss){
			
		//Login Success
		
		if (ss.val().password==pass	){
			console.log("authenticated");
			console.log(ss.val());
			swal({
			  title: 'Login success !',
			  type: 'success',
			  showCancelButton: false
			}).then((result) => {
			  if (result.value) {
					localStorage.setItem("username", username);
					location.href = 'homepage.html';
			  }
			})
		}
		//Credential wrong
		else{
			swal('Wrong username or password' ,'' ,'error');
		}
		$('.loader').hide();
	})
}

function getPoopPee(){
	var poopPee=firebase.database().ref('poopPee');
	poopPee.on('child_added',function(ss){

		//Change score point 
		var totalScore = '193';
		$('.scorePoint').html(totalScore);
		
		//Update list 
		var type =ss.val().type;
		var img ='';
		var name ='';
		var t = ss.val().date;
		t = t.toString();
		t =t.substring(8, 12);
		var hour  =  t.substring(0, 2);
		var minute = t.substring(2, 4);
		t = hour + ':' + minute ;
		var key = ss.key;
		var suggestion = 'test';
		var description = 'test';
		var user = '';
		var rate ='';
		rate = Math.floor(Math.random() * 6) + 1  ;
		var shape ='';
		var color ='';
		user = ss.val().user;
		if(type=='poop')
		{
			color = ss.val().color;
			 shape = ss.val().shape;
			if(shape =='sausage')
				img ='sausage';
			else if (shape =='nuts')
				img ='nuts';
			else if ( shape =='fluffy')
				img ='fluffy';
			
			
			name = color +  ' ' +shape + ' poop';
		}
		else 
		{
			
			color = ss.val().color;
			
			img = color;
			name = color + ' pee';
		}
		
		
		var ppData =`
			<div class='list'>
				<div class='col-sm-12 listContent'>
					<div class='col-sm-2 listPicture'>
						<img class='listImg' src='assets/img/`+img+`.png'>
					</div>
					<div class='col-sm-5 listDescription'>
						<p class='title'>	
							`+name+`
						</p>
						
						<p class='time'>	
							<img  class='clock' src='assets/img/clock2.png'/> 
							<label>`+t+`</label>
						</p>
						<p class='title'>`;
							while(rate--){
								ppData+=`
									<img src='assets/img/star2.png'/>
								`;
							}
							
						ppData +=`</p>
					</div>`;
					
			if(user)
			{
				if(user == localStorage.getItem("username"))
				{
									
					ppData +=`
						<div class='col-sm-2 btnSection'>
								<input class="tgl tgl-flip key"  value='`+key+`'  id="`+key+`" type="checkbox"/>
								<label class="tgl-btn reverse" data-tg-off="Cancel" data-tg-on="Claim!" for="`+key+`"></label>
						</div>
					
					`;
				}
				else 
				{
						
					ppData +=`
						<div class='col-sm-2 btnSection'>
								<input class="tgl tgl-flip"  type="checkbox"/>
								<label class="tgl-btn claimed" data-tg-off="Claimed" data-tg-on="Cancel" ></label>
						</div>
					
					`;
				}
				
			}
			else 
			{
				ppData +=`
					<div class='col-sm-2 btnSection'>
							<input class="tgl tgl-flip key"  value='`+key+`'  id="`+key+`" type="checkbox"/>
							<label class="tgl-btn" data-tg-off="Claim!" data-tg-on="Cancel" for="`+key+`"></label>
					</div>
				
				`;
			}	
					
			ppData +=`

					<div class='col-sm-12 listInfo'>
						<p class='infoTitle'>Description</p>
						`+description+`
						<p class='infoTitle'>Suggestion</p>
						`+suggestion+`
					</div>	
					<input type='hidden' class='key' value='`+key+`'/>
				</div>
				
			</div>		
		
		
		`;
		
		$('.poopeelist').prepend(ppData);
		$(function() {
			$('.loader').hide();
			$('.fade').removeClass('fade-out');
			
		});
		
	})
}

function claimPoopPee(user,poopPeeKey){
	var the_poop=firebase.database().ref('poopPee/'+poopPeeKey);
	the_poop.on('value',function(ss){
		if (ss.val().type=="poop"){
			firebase.database().ref('/user/'+user+'/poop/'+ss.val().date).set(ss.val());
			firebase.database().ref('poopPee/'+poopPeeKey+"/user").set(user);
		}

		else if (ss.val().type=="pee"){
			firebase.database().ref('/user/'+user+'/pee/'+ss.val().date).set(ss.val());
			firebase.database().ref('poopPee/'+poopPeeKey+"/user").set(user);
		}
	});
}


function getUserPee(user){
	var userPee=firebase.database().ref('user/'+user+'/pee');
	userPee.on('child_added',function(ss){
		console.log(ss.val())
	})
}

function getUserPoop(user){
	var userPoop=firebase.database().ref('user/'+user+'/poop');
	userPoop.on('child_added',function(ss){
		console.log(ss.val())
	})
}


// localStorage.getItem("username");
