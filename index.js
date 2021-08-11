const { pipeline } = require("stream");
const program = require("./src/commander");
const validate = require("./src/validateArgs");
const myStreams = require('./src/streams')
const chalk = require('chalk');
const shift = +program.shift;
const action = program.action;
const input = program.input;
const output = program.output;

validate(shift, action);

const readStream = myStreams.readStreamFunc(input)
const writeStream = myStreams.writeStreamFunc(output)
const transformStream = myStreams.transformStreamFunc(shift, action)

pipeline(
  readStream,
  transformStream,
  writeStream,
  (err) => {
    if (err) {
      console.error(chalk.red('Failed.'), err);
    } else {
      console.log(chalk.green('The program completed successfully!'))
    }
  }
)
