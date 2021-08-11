const { program } = require("commander");

program
  .storeOptionsAsProperties(true)
  .option("-s | --shift <number>", "number of shift characters")
  .option("-i | --input <path>", "path to readable file")
  .option("-a | --action <string>", "decode or encode cipher")
  .option("-o | --output <path>", "path to writable file")
  .parse(process.argv);

const programOptions = program.opts();

module.exports = programOptions;
