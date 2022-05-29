// const validator = require('validator');
// import chalk from 'chalk';
// const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      // type is boolean by default
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing a note');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function () {
    console.log('List notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Remove a note',
  handler: function () {
    console.log('Read a note');
  }
});

// console.log(yargs.argv);
yargs.parse();
