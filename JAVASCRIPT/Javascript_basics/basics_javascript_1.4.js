class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let obj = new person("Dinesh", 19);
console.log(obj);

const  setA =new Set([1,2,3]);
const  setB =new Set([3,4,5]);
const  union = setA.symmetricDifference(setB);
console.log(union);