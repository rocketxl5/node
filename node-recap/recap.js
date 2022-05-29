const yargs = require('yargs');
const fs = require('fs');
const engine = require('./util.js');
// const argv = process.argv.slice(2);

yargs.version('1.1.0');

const engineJSON = JSON.stringify(engine);

fs.writeFileSync('technical-sheet.json', engineJSON);

const dataBuffer = fs.readFileSync('technical-sheet.json');
const data = JSON.parse(dataBuffer);

// add, remove, read, list all supported by yargs

// Create add commanc
yargs.command({
  command: 'add',
  describe: 'Add a new entry',
  builder: {
    title: {
      describe: 'Entry title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'New entry',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title} | Body: ${argv.body}`);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove an entry',
  handler: function () {
    console.log('Removing an entry');
  }
});

yargs.command({
  command: 'list',
  describe: 'List entries',
  handler: function () {
    console.log('Listing entries');
  }
});

yargs.command({
  command: 'read',
  describe: 'Reand an entry',
  handler: function () {
    console.log('Read an entry');
  }
});

// console.log(yargs.argv);
yargs.parse();
