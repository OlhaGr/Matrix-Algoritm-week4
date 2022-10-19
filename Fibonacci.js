let d = 0;
let v = 1;
let r = 0;
while (d < 1000) {
   d = v + r;
   r = v;
   v = d;
   console.log(d)
}

