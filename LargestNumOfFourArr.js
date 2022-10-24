
const array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr){
	let result = []
  for (let i=0; i<array.length; i++){
	let max = array[i][0]
		for(let x= 0; x< array[i].length; x++){
			if (array[i][x]> max){
				max = array[i][x]
			}
		}
	result[i] = max
  }

	return result;
}
 console.log(largestOfFour(array));

