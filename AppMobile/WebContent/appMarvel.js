function rola (){

var apikey = "62cc7f7bd41e3346a1af737e0449428b";
var privatekey = "a9e5cccf7acc7f9ce2555471b5b6fc51d5725df6";
var urlbase = "http://gateway.marvel.com/v1/public/characters";
var today= 	new Date(year, month, day, hours, minutes, seconds, milliseconds);


var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
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



}