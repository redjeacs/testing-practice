export default function caesarCipher(string, indexShift) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    const regex = /[a-zA-Z]/;
    let base = 0;
    if (regex.test(currentChar)) {
      let charCode = currentChar.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        base = 'A'.charCodeAt(0);
      } else {
        base = 'a'.charCodeAt(0);
      }

      let shiftedCharCode =
        ((((charCode - base + indexShift) % 26) + 26) % 26) + base;
      result += String.fromCharCode(shiftedCharCode);
    } else {
      result += currentChar;
    }
  }

  return result;
}
