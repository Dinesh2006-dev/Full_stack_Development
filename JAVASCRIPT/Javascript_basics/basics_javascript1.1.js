let a=10;
let b=20;
let sum =function(x,y){
  return x+y;
}
let sum2 = (x,y) => x+y;
let greater = (x,y) => x>y ? x : y;

console.log(greater(a,b));
console.log(sum2(a,b));
console.log(sum(a,b));


