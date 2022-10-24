
const string = "The quick brown fox jumped over the lazy dog"

function findLongWord (str){
split = string.split(" ")
let result = 0
for (let i=0; i< split.length; i++){
result = (split[i].length > result)? split[i].length : result;

}
return result;
}
const l = findLongWord (string)
console.log(split);
console.log(l);
