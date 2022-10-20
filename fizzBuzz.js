let Ar = [];
for (let i = 1; i <= 135; i++) {
   if (i % 3 == 0 & i % 5 == 0) {
      Ar.push('FizzBuzz')
   } else if (i % 3 == 0) {

      Ar.push("Fizz")
   } else if (i % 5 == 0) {

      Ar.push("Buzz")
   } else {
      Ar.push(i)
   }
   console.log(Ar);
}






