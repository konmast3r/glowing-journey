var pointList= [skouros,katoKorifi,koudoumas,profIlias,rixtres,polivoleio,nisosFotia,
pirgosKak,kapelia,plakoures,psalidena,korifiPant,koupa,xavgas,kefala,vigli,stavros,
nav,filakio,konida,zervouPlai,plakokefala,mesonas,skinouria];
var selTrigonPointList =[];

// sorted = pointList.sort(function(a, b){return a.name - b.name});



// WEB PAGE RENDERING

var view = {
	
	// Συνάρτηση που εμφανίζει όλα τα διαθέσιμα Τριγωνομετρικά Σημεία
	displayPoints: function (){
	var pointsOl=document.getElementById("pointList");
	pointsOl.innerHTML='';
	for (i=0; i<pointList.length; i++){
		var li = document.createElement("li");
		var text = document.createTextNode (pointList[i].name + "  ");
		li.id = i;
		li.appendChild(text);
		li.appendChild(createButtons.createSelectButton());
		pointsOl.appendChild(li);
	}
	buttonHandlers.setUpSelectButton();
	
    },
   	
    //Εμφανιζει τα σημεια που βρίσκονται μεσα στον πινακα selTrigonPointList με το delete button δίπλα τους.
    
    showSelectedPoints : function(){
    	
    	var selectedPointsOl = document.getElementById('selPointList');
    	selectedPointsOl.innerHTML =('');
    	for (i=0; i<selTrigonPointList.length; i++){
    		var li = document.createElement('li');
    		li.id=i;
    		var text = document.createTextNode(selTrigonPointList[i].name + "  ");
    		li.appendChild(text);
    		selectedPointsOl.appendChild(li);
    		li.appendChild(createButtons.createDeleteButton());
    		
        }
        buttonHandlers.setUpDeleteButton();
        createButtons.createAngle();
    },
    // Emfanizei ta apotelesmata ston browser

    showResults: function(coords){
    	var results = document.getElementById('results');
    	xround=Math.round(coords[0]*1000)/1000;
    	yround=Math.round(coords[1]*1000)/1000;
    	results.innerHTML ="Results: " +"<br>"+'X: '+ xround+ "<br>" + 'Y:  '+yround;;
   


    }
}




//  EVENT HANDLING

var buttonHandlers = {

	// Ορίζει τι κάνει το select button και εμφανίζει την αρχική λίστα.
	//Ειναι η συναρτηση που κανει initiate το rendering.
    setUpSelectButton : function (){
    	var pointsOl = document.querySelector('ol');
    	pointsOl.addEventListener ('click', function(event){
    		
    		var elementClicked = event.target;
    		if (elementClicked.className === 'selectButton'){
    			selTrigonPointList.push(pointList[elementClicked.parentNode.id]);
        	 }
       	view.showSelectedPoints();
       	});
    },

    // orizei ti kanei to deletebutton. Prepei na energopoiithei apo prin gia na exoume to epithumito apotelesma. 
  	setUpDeleteButton : function(){
  		var selPointsOl = document.getElementById('selPointList');
  		selPointsOl.addEventListener ('click', function(event){
  			var elementClicked = event.target;
  			if (elementClicked.className === 'deleteButton'){
  				selTrigonPointList.splice(parseInt(elementClicked.parentNode.id), 1);
  		     }
  		view.showSelectedPoints();
        });
  	 },
  	 setUpCalculateButton:function(){
  	 	var angleA = document.getElementById('angleA').valueAsNumber;
  	 	var angleB = document.getElementById('angleB').valueAsNumber;
  	 	var coords = georesection(selTrigonPointList, angleA, angleB);
  	 	view.showResults(coords);
  	 }

  	
  	}	






//  Αντικείμενο που περιέχει τις συνάρτησεις για τη δημιουργίας των κουμπιών

var createButtons = {
	//dhmiourgei to delete button
	createDeleteButton : function() {
    	var deleteButton = document.createElement('button');
    	deleteButton.textContent = 'Delete';
    	deleteButton.className = 'deleteButton';
    	return deleteButton;
  },
  //dhmiourgei to select button 
	createSelectButton : function() {
    	var selectButton = document.createElement('button');
    	selectButton.textContent = 'Select';
    	selectButton.className = 'selectButton';
    	return selectButton;
    },	
    // Dimiourgei to calculate button kai orizei ti ginetai otan clickaristei
    createCalculateButton : function() {
    	var calculateButton = document.createElement('button');
    	calculateButton.textContent = 'Calculate';
    	calculateButton.id = 'calculateButton';
    	calculateButton.addEventListener('click',function(event){
    		if (calculateButton.id ==='calculateButton'){
    			buttonHandlers.setUpCalculateButton();
    		}

    	});
    	return calculateButton;


    },
    // Συνάρτηση Δημιουργίας πλαισίων για εισαγωγή γωνίων Α κ Β
    createAngle : function(){
    	var inputSelect = document.getElementById('angleInput');
    	if (selTrigonPointList.length===3){
		inputSelect.innerHTML=("Give angles A and B");
		var inputa = document.createElement('input');
		var inputb = document.createElement('input');
		inputa.setAttribute("type", "number");
		inputb.setAttribute("type", "number");
		inputa.setAttribute('placeholder', "Angle a (grad)")
		inputb.setAttribute('placeholder', "Angle b (grad)")
		inputa.id="angleA"
		inputb.id="angleB"
		inputSelect.appendChild(inputa);
		inputSelect.appendChild(inputb);
		inputSelect.appendChild(this.createCalculateButton());
	}else{
		inputSelect.innerHTML=("");
     }
   }
 }


   






