// let name ="Dinesh";
// let age = 19;
// let city = "cbe";
// let obj={name:name, age:age, city:city};
// console.log(obj);

// let obj = { name: "Dinesh", age: 19, city: "cbe" };
// const { name, age, city } = obj
// console.log(name);


let obj ={
    name1:name1,    
    name2:name2,
    age:age,
    city:city,
    fullname: function() {
        return this.name1 + " " + this.name2;
    }
}
console.log(fullname());

