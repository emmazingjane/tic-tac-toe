// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('java')

  var currentTurn = 'X' 

  function alternate(){
  	if (currentTurn === 'X'){
  		currentTurn = 'O'
  		return 
  	} else if (currentTurn === 'O') {
  		currentTurn = 'X'
  		return
  	}
  	
  }

  var checkIfThereIsAWinner = function() {
    var boxes = $('.box');

    var firstHorizWinner = boxes.eq(0).text() !== '' && (boxes.eq(0).text() === boxes.eq(1).text() && boxes.eq(1).text() === boxes.eq(2).text());
        // has to have a string AND then check if the first and second horizontal boxes are the same string AND then the second and third horizontal have the same string
        // basially if the second and third are === then the third and first are === because all of them do not equal an equal string
    var secondHorizWinner = boxes.eq(3).text() !== '' && (boxes.eq(3).text() === boxes.eq(4).text() && boxes.eq(4).text() === boxes.eq(5).text());
    var thirdHorizWinner = boxes.eq(6).text() !== '' && (boxes.eq(6).text() === boxes.eq(7).text() && boxes.eq(7).text() === boxes.eq(8).text());

    var firstVertWinner = boxes.eq(0).text() !== '' && (boxes.eq(0).text() === boxes.eq(3).text() && boxes.eq(3).text() === boxes.eq(6).text());
    var secondVertWinner = boxes.eq(1).text() !== '' && (boxes.eq(1).text() === boxes.eq(4).text() && boxes.eq(4).text() === boxes.eq(7).text());
    var thirdVertWinner = boxes.eq(2).text() !== '' && (boxes.eq(2).text() === boxes.eq(5).text() && boxes.eq(5).text() === boxes.eq(8).text());

    var firstDiagWinner = boxes.eq(0).text() !== '' && (boxes.eq(0).text() === boxes.eq(4).text() && boxes.eq(4).text() === boxes.eq(8).text());
    var secondDiagWinner = boxes.eq(2).text() !== '' && (boxes.eq(2).text() === boxes.eq(4).text() && boxes.eq(4).text() === boxes.eq(6).text());

    if (firstHorizWinner || 
      secondHorizWinner ||
      thirdHorizWinner ||
      firstVertWinner ||
      secondVertWinner ||
      thirdVertWinner ||
      firstDiagWinner ||
      secondDiagWinner) {
      alert('Winner')
    }
  }
  

  // var checkIfThereIsAWinner = function (){
  //   // look at indexes of boxes
  //   var boxes = $('.box');
  //   // check what the winning would be if all the boxes are the same
  //   // if (boxes.eq(0).text() === boxes.eq(1).text() === boxes.eq(2).text()){
  //   //   alert ('winner')
  //   // } else if (boxes.eq(3).text(); === boxes.eq(4).text(); === boxes.eq(5).text();) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(6).text(); === boxes.eq(7).text(); === boxes.eq(8).text();) {
  //   //   alert('winner');
  //   // }else if (boxes.eq(0).text(); === boxes.eq(3).text(); === boxes.eq(6).text()) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(1).text(); === boxes.eq(4).text(); === boxes.eq(7).text();) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(2).text(); === boxes.eq(5).tex();=== boxes.eq(8).text();) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(0).text(); === boxes.eq(3).text();=== boxes.eq(6).text();) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(0).text(); === boxes.eq(4).text( );=== boxes.eq(8).text();) {
  //   //   alert ('winner')
  //   // }else if (boxes.eq(2).text(); === boxes.eq(4).text( ;=== boxes.eq(6).text();) {
  //   //   alert ('winner')
  //   // }
  //    // 012
  //    // 345
  //    // 678
  //    // 036
  //    // 147
  //    // 258
  //    // 048
  //    // 246

  // }

  var checkIfBoardIsFilled = function(){
      var filledBoxes = $('.box').filter(function(idx, eachBox) {
        return $(eachBox).text() !== '';
        // getting all of the boxes that are filled
      });
      if (filledBoxes.length === 9) {
        alert('board is filled- GAME OVER');
        // if all of the boxes (9 boxes) are filled then the game is over
      }
  }
 

  $('.box').on('click', function(){
			if (this.textContent !== "") {
				return
        // checking to see if the box is empty
			}
    	$(this).text(currentTurn);
    	alternate();
      // check if board is filled
      checkIfThereIsAWinner();
      checkIfBoardIsFilled();
  
  })




  	// $('#a').html('<img src="http://i61.tinypic.com/faz9g3.png"/>')
  $("#reset").click(function() {
    $('.box').empty();
    currentTurn = 'X';
  });
 







});
