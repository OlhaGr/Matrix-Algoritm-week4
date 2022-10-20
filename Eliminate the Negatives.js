Array = [2, -1, 4, -3]
for (i = 0; i < Array.length; i++) {
   if (Array[i] < 0) {
      Array.splice(i, 1);
   }
}
console.log(Array)