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


		//var player1 = document.getElementById("Captain%20America");
		var player1 = "Iron%20Man";
		var player2 = document.getElementById("player2");
		var hashStr = dataSt + privatekey + apikey;
		var hash = CryptoJS.MD5(hashStr); //alert(hash.toString(CryptoJS.enc.Base64)); // 

		var uri1 = urlbase + "?nameStartsWith=" + player1 + "&ts=" + dataSt + "&apikey=" + apikey + "&hash=" + hash;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", uri1, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);

}
