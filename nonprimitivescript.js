console.log("Non-Primitive Data Types in JavaScript");
console.log("Object Data Type");
let student={
    id:101,
    name:"Rashmi",
    grade:'A',
    marks:95.5
};
console.log(student);

console.log("Array Data Type");
let numarr=[3,4,5,9,6,7];
console.log(numarr);

let chararr=['a','e','i','o','u'];
console.log(chararr);

let stringarr=["Rashmi","Gauri","Aarti","vaishnavi","Ashwini"];
console.log(stringarr);

let decarr=[98.7,65,8,88.45,79.5];
console.log(decarr);


console.log("Nested Object data type");
let employee={
    id:101,
    name:"Rashmi",
    address:"Hinjewadi,Pune",
    salary:50000,
    department:{
        id:1,
        name:"IT"
    }
};
console.log(employee);