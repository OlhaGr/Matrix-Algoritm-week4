const array1 = [3, 7, 1, -6, 73, 500, 34]

let i = 0
while (i < array1.length) {
	if (array1[i] < array1[i + 1]){
		temp = array1[i]
		array1[i] = array1[i + 1]
		array1[i + 1] = temp
		
	}
	i = i + 1
}
console.log(array1[3])



