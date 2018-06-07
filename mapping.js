var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(element){
	var sum = element.x * element.x + element.y*element.y;
	return Math.sqrt(sum)
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
