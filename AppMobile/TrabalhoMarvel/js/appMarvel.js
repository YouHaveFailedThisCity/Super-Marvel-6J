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
    
    console.log("uri1: " + uri1);
    console.log("uri2: " + uri2);

    xmlHttp.open( "GET", uri2, false ); // false for synchronous request
    xmlHttp.send( null );
    var p2 = JSON.parse(xmlHttp.responseText);

    if(p1.code == 200 && p2.code ==200){
    
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
        
    
        
        var tabela = "<table border='1px' border-radius: 5px>"+
            "<th>Attributes</th>"+
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
            winner = "<h1>"+ player1 + " Wins!</h1><img src='"+foto + "' alt='player1' width = '25%' height='25%'/>";
        }else if(countp1 < countp2){
            foto =  p2.data.results[0].thumbnail.path+".jpg";
            winner = "<h1>"+ player2 + " Wins!</h1><br /><img src='"+foto + "' alt='player2' width = '25%' height='25%'/>";
        }else{
            winner = "<h1>we have a tie! No winners.</h1>";
        }
                
        
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = winner;
        
        document.getElementById("resultado-table").innerHTML = tabela;
    
    
    }else{
        var errrow="..\\img\\errow.jpg";
         document.getElementById("resultado").innerHTML = "<img src='"+errrow+"' alt='errrow' width='90%' height='90%'>";
    }
};


function consultaMarvelFile(player1){

    
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
    
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open( "GET", uri1, false ); // false for synchronous request
    xmlHttp.send( null );
    var p1 = JSON.parse(xmlHttp.responseText);

    console.log(player1);
    if(p1.code == 200 || player1 != null || player1 != ""){
        
        
        var eventsp1 = p1.data.results[0].events.available;
        var eventsArray = p1.data.results[0].events.items;
        var eventsR  ="<b>Total:</b> <i>" + eventsp1 + "</i> <b>Principais:</b> ";
        for(i = 0; i < eventsArray.length && i < 5; i++){
            if(i == 4){
                 eventsR += "<i>" +eventsArray[i].name +"</i>";
            }else{
                 eventsR += "<i>" +eventsArray[i].name +" | </i>";
            }
           
        }
        document.getElementById("eventsR").innerHTML = eventsR;
        
        
        var comicsp1 = p1.data.results[0].comics.available;
        var comicsArray = p1.data.results[0].comics.items;
        var comicsR   ="<b>Total:</b> <i>" + comicsp1 + "</i> <b>Principais:</b> ";
        for(i = 0; i < comicsArray.length && i < 5; i++){
            if(i == 4){
                 comicsR += "<i>" +comicsArray[i].name +"</i>";
            }else{
                 comicsR += "<i>" +comicsArray[i].name +" | </i>";
            }
           
        }
        document.getElementById("comicsR").innerHTML = comicsR;
        
        var seriesp1 = p1.data.results[0].series.available;
        var seriesArray = p1.data.results[0].series.items;
         var seriesR  ="<b>Total:</b> <i>" + seriesp1 + "</i> <b>Principais:</b> ";
        for(i = 0; i < seriesArray.length && i < 5; i++){
            if(i == 4){
                 seriesR += "<i>" +seriesArray[i].name +"</i>";
            }else{
                 seriesR += "<i>" +seriesArray[i].name +" | </i>";
            }
           
        }
        document.getElementById("seriesR").innerHTML = seriesR;
        
        
        var storiesp1 = p1.data.results[0].stories.available;
        var storiesArray = p1.data.results[0].events.items;
         var storiesR  ="<b>Total:</b> <i>" + storiesp1 + "</i> <b>Principais:</b> ";
        for(i = 0; i < storiesArray.length && i < 5; i++){
            if(i == 4){
                 storiesR += "<i>" +storiesArray[i].name +"</i>";
            }else{
                 storiesR += "<i>" +storiesArray[i].name +" | </i>";
            }
           
        }
        document.getElementById("storiesR").innerHTML = storiesR;        
        
        var foto = p1.data.results[0].thumbnail.path+".jpg";
        var nome = p1.data.results[0].name;
        var description = p1.data.results[0].description;
        document.getElementById("descR").innerHTML = description;
        
        var tabela = "<table>"+
            "<th><img src='"+foto + "' alt='player1' width = '50%' height='10%'/></th>"+
            "<th><h3>"+nome+"</h3></th>"+
        "</table>";
        

        
        document.getElementById("resultado-heroi").innerHTML = tabela;
         
    }else{
        var errrow="..\\img\\errow.jpg";
         document.getElementById("resultado").innerHTML = "<img src='"+errrow+"' alt='errrow' width='90%' height='90%'>";
       
    }
};
