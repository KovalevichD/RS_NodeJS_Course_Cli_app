const exitProcess = require("./exitProcess.js");
const shiftChunk = require("./shiftChunk.js")

function encryption(chunk, shift, actionType) {
  if (shift < 0) exitProcess("Shift value must be a positive integer!", 1);

  const range = 26;
  const amountOfRanges = Math.floor(shift / range);
  const editedShift = shift - range * amountOfRanges;

  if (actionType === "encode") {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] >= 65 && chunk[i] <= 90) {
        chunk[i] = shiftChunk.shiftChunkEncode( chunk[i], shift, editedShift, range, 65, 90 );
      }

      if (chunk[i] >= 97 && chunk[i] <= 122) {
        chunk[i] = shiftChunk.shiftChunkEncode( chunk[i], shift, editedShift, range, 97, 122 );
      }
    }
  } else {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] >= 65 && chunk[i] <= 90) {
        chunk[i] = shiftChunk.shiftChunkDecode( chunk[i], shift, editedShift, range, 65, 90 );
      }

      if (chunk[i] >= 97 && chunk[i] <= 122) {
        chunk[i] = shiftChunk.shiftChunkDecode( chunk[i], shift, editedShift, range, 97, 122 );
      }
    }
  }

  return chunk;
}

module.exports = encryption;
