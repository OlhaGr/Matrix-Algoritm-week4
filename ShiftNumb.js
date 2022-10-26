  //ShiftNumber
let x = [2, 1, 6, 4, -7];
let xy = []
shift = x.length - 1
for (let i = 0; i < x.length; i++) {
   xy[shift - i] = x[i]
}
console.log(x);
console.log(xy);  