// 1. array destructuring 
const numbers = [45, 21];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const [x, y] = [45, 21];

const [x, y] = numbers
console.log(x);

function boxify (num1, num2){
  const nums = [num1, num2];
  return nums;
};
// const [first, second] = [78, 52]
const [first, second] = boxify(78, 52)
console.log(boxify(78, 52));

const student = {
  id: 28, name: 'jibon', age: 21,
  movies: ['king khan', 'Dhakar Mastan']
};

const [firstMovei, secondMovei] = student.movies;
console.log(firstMovei, secondMovei);

// Object Destructuring 

const {name, age} = {name: 'alu', age: 14};

const employee = {
  id: 'Vs Code',
  designation: 'Developer',
  machine: 'mac',
  languages: ['html', 'css', 'js'],
  specification: {
    height: 66,
    weight: 67,
    address: 'KhumerKahali',
    drink: 'Water',
    watch: {
      color: 'Black',
      price: 213,
      brand: 'grami'
    }
  }
};
const {id, machine} = employee;
const {weight, address} = employee.specification;
const [firstLung, secondLung, thirdLung] = employee.languages
console.log(firstLung);
const {brand} = employee?.specification?.watch;
console.log(brand)

