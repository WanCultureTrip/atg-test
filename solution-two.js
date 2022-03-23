function runLengthEncoding(str) {
    const stringArray = str.split("");
    return stringArray.reduce(
      (acc, value, index) => {
        if (acc.currentLetter === value) {
          acc.letterCounter++;
        } else {
          acc.output = `${acc.output}${acc.letterCounter}${acc.currentLetter}`;
          acc.currentLetter = value;
          acc.letterCounter = 1;
        }
  
        if (index === stringArray.length - 1) {
          acc.output = `${acc.output}${acc.letterCounter}${acc.currentLetter}`;
        }
  
        return acc;
      },
      { currentLetter: stringArray[0], letterCounter: 0, output: "" }
    ).output;
  }
  
  export default runLengthEncoding;
  