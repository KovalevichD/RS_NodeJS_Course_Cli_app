const exitProcess = require('./exitProcess.js')

function validate(shift, actionType) {
  let message;

  if (!Number.isInteger(shift))
    message = "Shift value must be a positive integer!";

  if (actionType !== "decode" && actionType !== "encode")
    message = "Please enter the required valid action argument ( decode/encode )!";

  if (message) exitProcess(message, 1);

}

module.exports = validate;
