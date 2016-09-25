function consultaMarvel (){
    
var apikey = "62cc7f7bd41e3346a1af737e0449428b";
		var privatekey = "a9e5cccf7acc7f9ce2555471b5b6fc51d5725df6";
		var urlbase = "http://gateway.marvel.com/v1/public/characters";
		var today= 	new Date();


		var dd = today.getDate();
		var mm = today.getMonth()+1; //Janeiro é 0
		var yyyy = today.getFullYear();
		var hh = today.getHours();
		var min = today.getMinutes();
		var sec = today.getSeconds();

		if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		} 

		var dataSt = mm+""+dd+""+yyyy+""+hh+""+min+""+sec;


		var player1 = document.getElementById("player1");
		var player2 = document.getElementById("player2");
	
		var crypto  = require('crypto');
		var preHash = dataSt + privatekey + apikey;
		var hashStr = crypto.createHash('md5').update(preHash).digest('hex');

		var uri1 = urlbase + "?nameStartsWith=" + player1 + "&ts=" + dataSt + "&apikey=" + apikey + "&hash=" + hashStr;


}
