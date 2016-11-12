<!DOCTYPE html>
 
<html>
<head>
    <meta charset="ISO-8859-1">
    <link href="..\css\style.css" rel="stylesheet">
    <script src="..\js\md5.js"></script>
    <script src="..\js\appMarvel.js"></script>
</head>
    <?php   
        $player1 = ($_POST['player1File']);        
?>
<body onload="consultaMarvelFile('<?php echo $player1?>')">
    
	<div class="main">

		<div class="head">
            <a href = "home.html"><img class="logo" src="..\img\marvellogo.png" alt="logo" /></a>
		</div>
        
        <p id="resultado">
        </p>
        
       
        <button class="accordion">Description</button>
        <div class="panel">
            <p id="descR"></p>
        </div>
        
        <button class="accordion">Comics</button>
        <div class="panel">
            <p id="comicsR"></p>
        </div>

        <button class="accordion">Series</button>
        <div class="panel">
            <p id="seriesR"></p>
        </div>
        
        <button class="accordion">Events</button>
        <div class="panel">
            <p id="eventsR"></p>
        </div>

        <button class="accordion">Stories</button>
        <div class="panel">
            <p id="storiesR"></p>
        </div>
        
        

 <script>
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        </script>


	</div>
    
    <footer id="copyright">
    </footer>
</body>
</html>