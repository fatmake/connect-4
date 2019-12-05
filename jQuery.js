
var turn = 1;

$('document').ready(function(){


	var j1 = 4; //rows
	

	$('#col1').click(function(){

		var i = 1; //columns


		if($("#coin"+j1+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
			if( turn % 2 == 0){ 
				$("#coin"+j1+"-"+i).css('background-color','yellow');
				$("#coin"+j1+"-"+i).addClass("player2");
				$('#p1').addClass('t'); //highlight the current players name
				$('#p2').removeClass('t');
				turn++;
				}
				else{
					$("#coin"+j1+"-"+i).css('background-color','red');
					$("#coin"+j1+"-"+i).addClass("player1");
					$('#p2').addClass('t');//highlight the current players name
					$('#p1').removeClass('t');
					turn++;
				}
				checkWinner();//check for the winner player

			}
		
		j1--;//next row
});



	var j2 = 4; //rows

	$('#col2').click(function(){

			var i = 2; //columns

					if($("#coin"+j2+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j2+"-"+i).css('background-color','yellow');
							$("#coin"+j2+"-"+i).addClass("player2");
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j2+"-"+i).css('background-color','red');
							$("#coin"+j2+"-"+i).addClass("player1");
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}
						
						checkWinner();
					}
			
			j2--;
				


	});

	var j3 = 4; //rows

	$('#col3').click(function(){

			var i = 3; //columns

					if($("#coin"+j3+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j3+"-"+i).css('background-color','yellow');
							$("#coin"+j3+"-"+i).addClass("player2");
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j3+"-"+i).css('background-color','red');
							$("#coin"+j3+"-"+i).addClass("player1");
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}
						checkWinner();

					}
			
			j3--;
				


	});

	var j4 = 4; //rows

	$('#col4').click(function(){

			var i = 4; //columns

					if($("#coin"+j4+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j4+"-"+i).css('background-color','yellow');
							$("#coin"+j4+"-"+i).addClass("player2");
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j4+"-"+i).css('background-color','red');
							$("#coin"+j4+"-"+i).addClass("player1");
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}
						checkWinner();

					}
					
			j4--;
				


	});

	function checkWinner(){
		var yellowCounter;
		var redCounter;
		/////columns//////
		
		for (var i = 1;i <= 4;i++){
		
			yellowCounter = 0;
			redCounter = 0;
		
			for (var j = 1;j <= 4;j++){
				
				if($("#coin"+j+"-"+i).hasClass('player2')){
					yellowCounter++;
				}
				if($("#coin"+j+"-"+i).hasClass('player1')){
					redCounter++;
				}

			}
			if(yellowCounter == 4 ){
				alert('Player 2 WINS (col)!!');
			}
			if(redCounter == 4 ){
				alert('Player 1 WINS (col)!!');
			}
			

		}
			

		//////rows/////
		    
		for (var j = 1;j <= 4;j++){
		
			yellowCounter = 0;
			redCounter = 0;
			
			for (var i = 1;i <= 4;i++){
				
				if($("#coin"+j+"-"+i).hasClass('player2')){//increament the counter if the coin is yellow colored 
					yellowCounter++;
				}
				if($("#coin"+j+"-"+i).hasClass('player1')){//increament the counter if the coin is red colored
					redCounter++;
				}

			}
			if(yellowCounter == 4 ){//if the total number of the colored coins = 4 (same color)
				alert('Player 2 WINS (rows)!!');
			}
			else if(redCounter == 4 ){
				alert('Player 1 WINS (rows)!!');
			}	

		}
			


		///////tie/////
		var flag;
		//nested for loop to go through all the grid
		for (var i = 1; i<=4 ;i++){
			for (var j = 4; j >= 1; j--){
				
				if($("#coin"+j+"-"+i).hasClass('player1') || $("#coin"+j+"-"+i).hasClass('player2')){//if the coins are already colored
					flag = true;
				}
				else{
					flag = false;
				}

			}
		}
		if(flag == true){//if all the grid is fully colored
			alert("It's a tie");
		}

		////diagonal (left-right)////
		var flag2 = 0;
		var flag1 = 0;
		var col = 1;
		var row = 4;

		while(row >= 1){
			
				if($("#coin"+row+"-"+col).hasClass('player2')){//yellow
					flag2++;
				}
				if($("#coin"+row+"-"+col).hasClass('player1')){//red
					flag1++;
				}
				row--;
				col++;

		}
		

		if(flag1 == 4){
			alert("Player 1 WINS (diagonal)!!");
		}
		if(flag2 == 4){
			alert("Player 2 WINS (diagonal)!!");
		}

		////diagonal(right-left)////
		flag2 = 0;
		flag1 = 0;
		col = 4;
		row = 4;

		while(row >= 1){
			
				if($("#coin"+row+"-"+col).hasClass('player2')){//yellow
					flag2++;
				}
				if($("#coin"+row+"-"+col).hasClass('player1')){//red
					flag1++;
				}
				row--;
				col--;

		}
		

		if(flag1 == 4){
			alert("Player 1 WINS (diagonal)!!");
		}
		if(flag2 == 4){
			alert("Player 2 WINS (diagonal)!!");
		}

	}


	
	$('button').click(function(){// to restart the game
	
		{location.reload(true);}

		/*for (var i = 1; i<=4 ;i++){
			for (var j = 4; j >= 1; j--){
				//set all the cells to the original color=white
				$("#coin"+j+"-"+i).css('background-color','rgb(255, 255, 255)');

			}
		}*/

	});

});

