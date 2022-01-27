module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  for (let i = 0; i < arrStr.length; i++) {
    bracketsConfig.forEach((bracketsPare) => {
      if (arrStr[i] === bracketsPare[0] && arrStr[i + 1] === bracketsPare[1]) {
        arrStr.splice(i, 2);
        i = -1;
      }
    })
  }

  return !arrStr.length
}
