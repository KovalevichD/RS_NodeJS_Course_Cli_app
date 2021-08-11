const chalk = require("chalk");

function exitProcess(message, code) {
  process.stderr.write(chalk.red(message + "\n"));
  process.exit(code);
}

module.exports = exitProcess;
