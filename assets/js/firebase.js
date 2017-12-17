
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
			 	name = color +  ' ' +shape + ' poop';
			if(shape =='sausage')
			{
				rate='4';
				img ='sausage';
				suggestion=`You just ate something that didn't necessarily agree with your stomach, eat more vegetable and less fried food or fast food. Make sure drink more water and do more exercise`;
				description = name+ ` is sausage or snake-shaped and about the diameter of a banana. This healthy, normal bowel movement is typical for an individual pooping every one to three days. Optimal healthy poop will remain intact as it is flushed, indicating that it had the desired amount of water and nutrients inside when passed. This poop will have a soft and smooth look to it and will resemble soft-serve ice cream.`;
			}
			else if (shape =='nuts' || shape =='nut')
			{
				rate='1';
				img ='nuts';
				suggestion=`Go to your doctor and get examined. Generally they'll just push on your stomach to see what's up, so don't worry—you probably won't end up with a finger up your butt`;
				description = name+ ` is connected together but still rather lumpy is also a sign of constipation. The poop spent too much time drying in the intestines, but it has not dried out enough to break apart into small pieces. 

This form of poop often hurts the most when being passed since it is generally large and quite firm. In order for the stool to take this lumpy, sausage-shaped form, it needs to remain in the colon for a couple weeks instead of the regular 72 hours.`;

			}
			else if ( shape =='fluffy')
			{
				rate='2';
				img ='fluffy';
				suggestion=`Good work! You're in the ideal camp. Keep this healthy lifestyle`;
				description = name+ ` is the most advanced stage of diarrhea. It has no solid form and passes without control. Diarrhea occurs when the small intestine is irritated, forcing the liquid into the small intestine to flush out of the body without being properly processed. Liquid can be absorbed by the large intestine, but most pools in the rectum, causing explosive diarrhea that is not controllable.`;
			}

			else 
			{
				rate='2';
				img ='fluffy';
				suggestion=`Good work! You're in the ideal camp. Keep this healthy lifestyle`;
				description = name+ ` is the most advanced stage of diarrhea. It has no solid form and passes without control. Diarrhea occurs when the small intestine is irritated, forcing the liquid into the small intestine to flush out of the body without being properly processed. Liquid can be absorbed by the large intestine, but most pools in the rectum, causing explosive diarrhea that is not controllable.`;
			}
		
		}
		else 
		{
			
			color = ss.val().color;
			
			img = color;
			name = color + ' pee';
			if(color=='yellow')
			{
				rate='4';
				description = name + ` is the normal urine color of a healthy, well-hydrated body. This is what it should look like`;
				suggestion =`Drink more water  , do more exercise and keep this healthy status`;
			}
			else 
			{
		
					rate ='3';
					if(color=='orange')
						rate='2';
					else if (color =='red')
						rate ='1'
					description = name + ` is properly hydrated, but you can actually drink too much water, which will make your urine virtually colorless. Overhydration for long periods of time can lead to serious complications. We will get to that later.`;
					suggestion =`Increase your water intake , do more exercise. Grab some sport drink that will rebalance your electrolytes and add sodium back into your system. Take extra precautions when working or training outside in hot weather or training in a facility without air conditioning`;
				
			}	
			
		}
		
		var rateScore = rate;
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
						<input type='hidden' value='`+rateScore+`' class='ratecore'/>
						<input type='hidden' value='1' class='check'/>
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
						<input type='hidden' value='`+rateScore+`' class='ratecore'/>
						<input type='hidden' value='0' class='check'/>
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
