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


  // 

  $('.col-md-4.box').on('click', function(){
  	// $('#a').html('<img src="http://i61.tinypic.com/faz9g3.png"/>')
  	$(this).text(currentTurn);
  	alternate()
  })







});
