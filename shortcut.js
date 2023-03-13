// false: '', 0, null, undefined
// Trutey: 'alam', 5, true, {}, [],


// check Truthy
let myVar = 5;
// chekc any Truthy
if(myVar){
myVar = myVar * 100;
}
else{
  myVar = 0;
}

let myMoney = 5;
// you Check negative or falsy anything
if(!myMoney){
  console.log('d')
}else{
  console.log('n')
}
const money = 800;
let food;
if(money > 100){
  food = 'Briyani'
}
else{
  food = 'chabiskot kabo'
}

// ternary

let food1 = money > 100 ? 'Briayanai' : 'chabiscut';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'cokke' : 'filter water';
console.log(drink);

// number to sting converstion 
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// stirng to number 
const input = '502';
const inputNum = +input;
console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ?  showUser () :  hideUser();

// use && if the left side the true then right side will be executed 
isActive && showUser();

// use || if the left side is false then right side will be executed

isActive || hideUser();

// toggle boolean
isActive = !isActive