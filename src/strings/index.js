//split
const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}
  // write code for strings.pairs
const pairs = (str) => {
  let strArr = Array.from(str)

  let joinedArray = []
  while(strArr.length > 0) {
    console.log("COUNT")
    let chunks = [strArr[0], strArr[1]]
    strArr = strArr.slice(2, strArr.length)
    let joinedChunks = chunks.join('')
    joinedArray.push(joinedChunks)
  }
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

module.exports = {
  split,
  pairs,
  reverse
}