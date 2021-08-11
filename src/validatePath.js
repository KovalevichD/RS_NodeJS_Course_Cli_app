const path = require("path");
const fs = require("fs");

function isPathCorrect(pathToCheck) {
    let validatedPath = pathToCheck;
  
    if (!path.isAbsolute(pathToCheck))
      validatedPath = path.resolve(validatedPath);
  
    return fs.existsSync(validatedPath);
  }
  
  module.exports = isPathCorrect;
  