const fs = require("fs");
const { Transform } = require("stream");
const chalk = require("chalk");
const encryption = require("./encryption");
const isPathCorrect = require("./validatePath");
const exitProcess = require("./exitProcess.js");

function readStreamFunc(pathInput) {
  if (pathInput === undefined) {
    process.stdout.write(
      chalk.blueBright.bold("Please write the text here!" + " ")
    );
    process.stdout.write(
      chalk.blue("(Enter Control + C if you want to stop the program)" + "\n")
    );
    return process.stdin;
  } else if (isPathCorrect(pathInput)) {
    return fs.createReadStream(pathInput, "utf-8");
  } else {
    exitProcess("You specified an invalid input file path", 1);
  }
}

function writeStreamFunc(pathOutput) {
  if (pathOutput === undefined) {
    return process.stdout;
  } else if (isPathCorrect(pathOutput)) {
    return fs.createWriteStream(pathOutput, { flags: "a" });
  } else {
    exitProcess("You specified an invalid output file path", 1);
  }
}

function transformStreamFunc(shift, action) {
  return new Transform({
    transform(chunk, encoding, callback) {
      const chunkShifted = encryption(chunk, shift, action);

      this.push(chunkShifted + "\n");
      callback();
    }
  });
}

module.exports = {
  readStreamFunc,
  writeStreamFunc,
  transformStreamFunc
};
