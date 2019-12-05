
var turn = 1;

$('document').ready(function(){

	var redArray = [];
	var yellowarray = [];

	var j1 = 4; //rows

	$('.col').click(function(){

		var i = 1; //columns


		if($("#coin"+j1+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
			if( turn % 2 == 0){ 
				$("#coin"+j1+"-"+i).css('background-color','yellow');
				$('#p1').addClass('t'); //highlight the current players name
				$('#p2').removeClass('t');
							//yellowArray.push(j1+''+i);
				turn++;
				}
				else{
					$("#coin"+j1+"-"+i).css('background-color','red');
					$('#p2').addClass('t');//highlight the current players name
					$('#p1').removeClass('t');
					$("#coin"+j1+"-"+i).slideDown('slow');
					redArray.push(j1+'-'+i);
					turn++;
				}

			}
					console.log(redArray);//output: ["4-1", "3-1", "2-1", "1-1"]
		j1--;//next row
		i++;
		if (redArray == ["4-1", "3-1", "2-1", "1-1"]){//it doesn't go inside this if
			alert('Player 1 WINS !!');
		}

});

	/*var j2 = 4; //rows

	$('.col2').click(function(){

			var i = 2; //columns

					if($("#coin"+j2+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j2+"-"+i).css('background-color','yellow');
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j2+"-"+i).css('background-color','red');
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}

					}
			j2--;	


	});

	var j3 = 4; //rows

	$('.col3').click(function(){

			var i = 3; //columns

					if($("#coin"+j3+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j3+"-"+i).css('background-color','yellow');
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j3+"-"+i).css('background-color','red');
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}

					}
			j3--;	


	});

	var j4 = 4; //rows

	$('.col4').click(function(){

			var i = 4; //columns

					if($("#coin"+j4+"-"+i).css('background-color') == 'rgb(255, 255, 255)'){
						
						if( turn % 2 == 0){ 
							$("#coin"+j4+"-"+i).css('background-color','yellow');
							$('#p1').addClass('t');
							$('#p2').removeClass('t');
							turn++;
						}
						else{
							$("#coin"+j4+"-"+i).css('background-color','red');
							$('#p2').addClass('t');
							$('#p1').removeClass('t');
							turn++;

						}

					}
			j4--;	


	});*/


	
	$('button').click(function(){// to restart the game
		//$(this).removeClass('.col1');

		for (var i = 1; i<=4 ;i++){
			for (var j = 4; j >= 1; j--){
				//set all the cells to the original color=white
				$("#coin"+j+"-"+i).css('background-color','rgb(255, 255, 255)');

			}
		}

	});

	//$('button').off('click');

});

