

var moves = 0;
var wins = 0;
var games = 0;
var cards = [

"<img src='img/default/monsters-01.png'>",
"<img src='img/default/monsters-02.png'>",
"<img src='img/default/monsters-03.png'>",
"<img src='img/default/monsters-04.png'>",
"<img src='img/default/monsters-05.png'>",
"<img src='img/default/monsters-06.png'>",
"<img src='img/default/monsters-07.png'>",
"<img src='img/default/monsters-08.png'>",
"<img src='img/default/monsters-09.png'>",
"<img src='img/default/monsters-11.png'>",
"<img src='img/default/monsters-13.png'>",
"<img src='img/default/monsters-14.png'>",
"<img src='img/default/monsters-15.png'>",
"<img src='img/default/monsters-16.png'>" 
];

var gridSize;
var gameTiles;
var gridArray;
var rowSize;

$(document).ready(function() {

	$("input").click(function() {
		var diff = $(this).val();
		if (diff == "easy"){
			rowSize = 5;
			gridSize = rowSize * 2;
		}else if(diff == "med"){
			rowSize = 5;
			gridSize = rowSize * 4;
		}else if(diff == "hard"){
			rowSize = 7;
			gridSize = rowSize * 4;
		}
		$("#button-bucket").toggle();
		gameTiles = cards.slice(0, gridSize/2);

		gridArray = $.merge(gameTiles, gameTiles);
		shuffle();


		//shuffle here
		//place here
	function shuffle() {
		for(i=1; i<10;i++) {
			card1 = Math.floor(Math.random() * gridArray.length);
			card2 = Math.floor(Math.random() * gridArray.length);
			if(card1 !== card2) {
				temp = gridArray[card1];
				gridArray[card1] = gridArray[card2];
				gridArray[card2] = temp;
			}
		}
	}

		for (var i = 0; i < gridArray.length; i++){
			var html = "<div class ='mg-tile'>";
					html += "<div class='mg-tile-inner unmatched flipped'>";
						html += "<div class='mg-tile-outside'>" + "</div>";
						html += "<div class='mg-tile-inside'>" + gridArray[i] + "</div>";
					html += "</div>";
				html += "</div>";
				$("#mg-contents").append(html);

		}

		setTimeout(function() {
			$(".mg-tile-inner").removeClass("flipped");
		},1500);

		$(".mg-tile").click(function() {
			$(this).find(".mg-tile-inner").addClass("flipped");
			if ($(".flipped.unmatched").length == 2){

				moves++;
				$("#move-counter").html(moves);
			}
				var upCards = $(".flipped.unmatched img");
				if (upCards[0].src == upCards[1].src){
					$(".flipped.unmatched").addClass("matched");
					$(".flipped.unmatched").removeClass("unmatched");
					}else {
						setTimeout(function() {
							$(".flipped.unmatched").removeClass("flipped");
						},1000);
					}
					// $(".flipped.unmatched").addClass("unmatched");
					// $(".flipped.unmatched").removeClass("matched");
					// $(".mg-tile-inner").removeClass("flipped");

				if($(".flipped.matched").length == gridArray.length){
					wins++;
					$("#wins-counter").html(wins);
					var response = prompt("You won! Play again?");
						if (response == "yes"){
							reset();
						}else{
							if (wins == 1) {
								alert("OK, you completed 1 game!");
							}else{
								alert("OK!, You completed" + wins + " games!");
							}
						}



				}

				});

						
		
	});
					function reset() {
					moves = 0;
					$("#move-counter").html(moves);
					$(".mg-tile").remove();
					$("#button-bucket").toggle();
				}

				function quit() {

				}



});