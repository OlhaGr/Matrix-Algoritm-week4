// function elimination (eliminate){
// let finalResult = [];
//     for(let i=0; i< eliminate.length;i++){
//         if(eliminate[i]<0){
//             finalResult.push(0)
//         }else{
//             finalResult.push(eliminate[i])
//         }
//     }
//     console.log(finalResult);
// }

// function replace(replaced){
//    let last = [];
//    for (let i =0;i <replaced.length; i++ ){
//        if(array[i] === 'Program'){
//            last.push('******')
//        }else{last.push(replaced[i])}
//    }
//    console.log(last)
// }
// let array=['Man', 'I','love','Matrix','Program'];
// replace(array);
//fibbonaci
// let x=[];
// x[0]=0;
// x[1]=1;
// for( let i=2; i <10; i++){
//     x[i]=x[i-2]+x[i-1];
//     
// }
// console.log(x);

const arr = [1, -2, 4, -21, 3];

for (x=0; x < arr.length; x++) {
   if (arr[x] < 0)
      arr.splice(x, 1);
}

console.log(arr);
