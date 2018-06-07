// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(element,index){
  	if (element==="Waldo"){found(index)}
  }
  	)

}

function actionWhenFound(i) {
	
 return console.log("Found waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
