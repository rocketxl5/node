// const fs = require('fs');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);
// const fs = require('fs');

const fs = require('fs');

const humanoid = {
  name: 'Little green man',
  planet: 'Mars',
  age: 2000
};

const humanoidJSON = JSON.stringify(humanoid);
fs.writeFileSync('2-json.json', humanoidJSON);

const dataBuffer = fs.readFileSync('2-json.json');
const data = JSON.parse(dataBuffer);

// console.log(data);

data.name = 'Buck Rogers';
data.planet = 'Earth';
data.age = 40;

const mutateHumanoid = JSON.stringify(data);
fs.writeFileSync('2-json.json', mutateHumanoid);

console.log(fs.readFileSync('2-json.json').toString());
