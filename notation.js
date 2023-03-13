const person = {
  name: 'lal Nil Holod Mia',
  profession: 'Traffic Surgeon',
  age: 45,
  25: 'summer',
  'son-name': 'Sunnay',

  address: 'Mymenshingh'
}
// dot notation 

const prof1 = person.profession;

// barket notation 
const prof2 = person["profession"];
const pName = "profession";
const prof3 = person[pName];
console.log(prof3);
console.log(prof2);

const season = person[25];
console.log(season);

const son = person['son-name'];
console.log(son);