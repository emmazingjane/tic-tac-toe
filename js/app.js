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

 

  $('.col-md-4.box').on('click', function(){
  		// if (.col-md-4.box === " ") {

			if (this.textContent !== "") {
				return
			}
  	$(this).text(currentTurn);
  	alternate();
  
})

  	// $('#a').html('<img src="http://i61.tinypic.com/faz9g3.png"/>')
$(".btn-primary").click(function() {
  $('.col-md-4.box').empty();
  currentTurn = 'X';
});
 







});
