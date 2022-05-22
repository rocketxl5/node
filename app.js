// const validator = require('validator');

// import chalk from 'chalk';

const chalk = require('chalk');

const log = console.log;
const success = chalk.bold.inverse.red;

log(success('Error!'));

const getNotes = require('./notes.js');

const msg = getNotes();

// console.log(msg);

// console.log(validator.isEmail('maxgaillard@gmail.com'));

// const add = require('./utils');

// const sum = add(3, 7);

// console.log(sum);
