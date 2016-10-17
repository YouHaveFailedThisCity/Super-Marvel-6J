function consultaMarvel(player1, player2){

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

 

    var hashStr = dataSt + privatekey + apikey;
    var hash = CryptoJS.MD5(hashStr);

    var uri1 = urlbase + "?nameStartsWith=" + player1 + "&ts=" + dataSt + "&apikey=" + apikey + "&hash=" + hash;
    var uri2 = urlbase + "?nameStartsWith=" + player2 + "&ts=" + dataSt + "&apikey=" + apikey + "&hash=" + hash;

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open( "GET", uri1, false ); // false for synchronous request
    xmlHttp.send( null );
    var p1 = JSON.parse(xmlHttp.responseText);

    xmlHttp.open( "GET", uri2, false ); // false for synchronous request
    xmlHttp.send( null );
    var p2 = JSON.parse(xmlHttp.responseText);

    if(p1.code == 200 && p2.code ==200){
       // alert("Consulta OK");
        
        var eventsp1 = p1.data.results[0].events.available;
        var comicsp1 = p1.data.results[0].comics.available;
        var seriesp1 = p1.data.results[0].series.available;
        
        var eventsp2 = p2.data.results[0].events.available;
        var comicsp2 = p2.data.results[0].comics.available;
        var seriesp2 = p2.data.results[0].series.available;
        
        if(player1.includes("%20")){
            player1 = player1.replace("%20", " ");
        }
        
        
        if(player2.includes("%20")){
            player2 = player2.replace("%20", " ");
        }
        
        
        var tabela = "<table border = 1>"+
            "<th></th>"+
            "<th>"+player1+"</th>"+
            "<th>"+player2+"</th>"+
            "<tr><td>Comics</td><td>"+comicsp1+"</td><td>"+comicsp2+"</td></tr>"+
            "<tr><td>Series</td><td>"+seriesp1+"</td><td>"+seriesp2+"</td></tr>"+
            "<tr><td>Events</td><td>"+eventsp1+"</td><td>"+eventsp2+"</td></tr>"+
        "</table>";
        
        
        var countp1 = 0;
        var countp2 = 0;
        
        if(eventsp1 > eventsp2){
            countp1++;
        }else if(eventsp2 > eventsp1){
            countp2++;
        }
        
        
        if(comicsp1 > comicsp2){
            countp1++;
        }else if(comicsp2 > comicsp1){
            countp2++;
        }
        
        
        if(seriesp1 > seriesp2){
            countp1++;
        }else if(seriesp2 > seriesp1){
            countp2++;
        }
        
        var winner = "";
        var foto = "";
        
        if(countp1 > countp2){
            foto =  p1.data.results[0].thumbnail.path+".jpg";
            winner = "<h1>"+ player1 + " Venceu!</h1><br /><img src='"+foto + "' alt='player1' width = '25%' height='25%'/>";
        }else if(countp1 < countp2){
            foto =  p2.data.results[0].thumbnail.path+".jpg";
            winner = "<h1>"+ player2 + " Venceu!</h1><br /><img src='"+foto + "' alt='player2' width = '25%' height='25%'/>";
        }else{
            winner = "<h1>Nesta batalha não houveram vencedores!</h1>";
        }
                
        document.getElementById("resultado").innerHTML = winner + tabela;
        
        
        
    
    
    }else{
        var errrow="..\\img\\errow.jpg";
         document.getElementById("resultado").innerHTML = "<img src='"+errrow+"' alt='errrow' width='90%' height='90%'>";
    }
};
