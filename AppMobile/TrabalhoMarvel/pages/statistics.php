<!DOCTYPE html>
 
<html>
<head>
    <meta charset="ISO-8859-1">
    <link href="..\css\style.css" rel="stylesheet">
    <script src="..\js\md5.js"></script>
    <script src="..\js\appMarvel.js"></script>
</head>
    <?php   
        $player1 = ($_POST['player1']);
        $player2 = ($_POST['player2']);
        
    ?>
<body onload="consultaMarvel('<?php echo $player1?>' , '<?php echo $player2 ?>')">
    
	<div class="main">

		<div class="head">
            <a href = "home.html"><img class="logo" src="..\img\marvellogo.png" alt="logo" /></a>
		</div>

        <div id="resultado">
	   </div>
        
        
        <div id="resultado-table">
	   </div>
        
         <form  method="post" action="playerfile.php">
                <div class="play-cons">
                    <img class="player-icon-cons" src="..\img\search.png" alt="player" />
                    <h3 class="p-name-cons">Consulta</h3>
                </div>
               <br>
                <select class="pick-cons" name="player1File">
                    <option value="Captain%20America">Capitao America</option>
                    <option value="Hulk">Hulk</option>
                    <option value="Thor">Thor</option>
                    <option value="Iron%20Man">Iron Man</option>
                    <option value="Ultron">Ultron</option>
                    <option value="Thanos">Thanos</option>
                    <option value="Loki">Loki</option>
                    <option value="Red%20Skull">Caveira Vermelha</option>
                </select>
                
               <br> <br>
                
                <button class="btn">PICK FILE</button>
            </form>
    </div>
</body>
</html>