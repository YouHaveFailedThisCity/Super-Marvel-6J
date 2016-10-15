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
			<img class="logo" src="..\img\marvellogo.png" alt="logo" />
		</div>
        
        <p id="teste"></p>




	</div>
</body>
</html>
