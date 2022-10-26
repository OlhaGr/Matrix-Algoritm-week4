
let x=[];
x[0]=0;
x[1]=1;
for( let i=2; i <10; i++){
    x[i]=x[i-2]+x[i-1];
    
}
console.log(x);
