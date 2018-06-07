
function map(words, func){
	var array = [];
	for (var i = 0; i< words.length; i++){
		array[i] = func(words[i])
	}
		console.log(array)
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
