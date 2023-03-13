// JSON

const student = {
  id: 28, name: 'jibon', age: 21,
  movies: ['king khan', 'Dhakar Mastan']
};

const studentJSON = JSON.stringify(student);
console.log(student)
console.log(studentJSON);

const studentOBJ = JSON.parse(studentJSON);
console.log(studentOBJ);

// fetch 
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// keys, values

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys)
console.log(values);

// for 

const numbers = [ 546, 45, 87, 12, 1]
numbers.forEach(number => console.log(number));
numbers.map(number => number * 2);

// for of on array like Object 
// loop on an object using for in on 

// add or remove from an array 
const products = [
  {name: 'laptop', price: 32000, brand: 'Len', color: 'silver'},
  {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
  {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
  {name: 'sunglass', price: 300, brand: 'Ribon', color: 'Black'},
  {name: 'camera', price: 9000, brand: 'cannon', color: 'gray'},
];

const neProduct = {name: 'WebCame', price: 654, brand: 'lal'}

// copy products array and then  add newProduct

const newProducts = [...products, neProduct];
console.log(newProducts);

// create a new array without one specific items 
// remove phone means create a new array without the phone 

const remaing = products.filter(product => product.name !=='phone');
console.log(remaing);
const remaing2 = products.filter(product => product.color !== 'Black');
console.log(remaing2)