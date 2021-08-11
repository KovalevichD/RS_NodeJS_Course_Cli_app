function shiftChunkEncode( chunk, shift, editedShift, range, startCode, endCode ) {
    if (chunk >= startCode && chunk <= endCode) {
      if (chunk + shift > endCode) {
        if (chunk + editedShift > endCode) {
          chunk += editedShift;
          chunk -= range;
        } else {
          chunk += editedShift;
        }
      } else {
        chunk += shift;
      }
    }
    return chunk;
  }
  
  function shiftChunkDecode( chunk, shift, editedShift, range, startCode, endCode ) {
    if (chunk >= startCode && chunk <= endCode) {
      if (chunk - shift < startCode) {
        if (chunk - editedShift < startCode) {
          chunk -= editedShift;
          chunk += range;
        } else {
          chunk -= editedShift;
        }
      } else {
        chunk -= shift;
      }
    }
    return chunk;
  }

  module.exports = {
    shiftChunkEncode,
    shiftChunkDecode
  };