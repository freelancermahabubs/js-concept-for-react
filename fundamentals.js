const fatherName = 'Mahabub';
let season = 'raniny';
season = 'winter';

// condition: >, <, ====, !==, <=, >=
// multiple conditions: &&, ||
if(fatherName === 'mahabub' || season === 'raniny'){
  console.log()
}

else if(fatherName === 'Mahabub'){

}
else{

}

// Array
// index,deya value change
//length
//push
const numbers = [1, 2, 5, 8, 9];
numbers.length
numbers[0] = 25;

// loop
for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  console.log(number)
};

// function
function multiplication(num1, num2){
const result = num1 * num2;
return result;
};
const outPut = multiplication(2, 2);
console.log(outPut);

// Object
const student = {
  id: 28, name: 'jibon', age: 21,
  movies: ['king khan', 'Dhakar Mastan']
};
const myVariable = 'age';
// 3 ways to access property by name 
console.log(student.id); // direct by property
console.log(student["age"]); // access via property name String
// console.log(student[myVariable]); acss via property name is a variable 



