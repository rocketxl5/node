// const validator = require('validator');

// import chalk from 'chalk';
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note');
  }
});

console.log(yargs.argv);
