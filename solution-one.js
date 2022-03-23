function runLengthEncoding(str) {
  let charAt = str.charAt(0);
  let returnStr = "";
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (charAt !== str.charAt(i)) {
      // save
      returnStr += `${counter}${charAt}`;
      // reset
      charAt = str.charAt(i);
      counter = 0;
    }
    if (i === str.length - 1) {
      returnStr += `${(counter + 1)}${charAt}`;
    }
    counter++;
  }
  return returnStr;
}

export default runLengthEncoding;