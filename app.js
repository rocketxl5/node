// Node file module needs to be loaded with require()
const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Fred.\n');

fs.appendFileSync('notes.txt', 'This is a new line');
