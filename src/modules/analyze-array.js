export default function analyzeArray(array) {
  const object = {};
  if (!Array.isArray(array)) return false;
  if (array.every((element) => typeof element == 'number' && !isNaN(element))) {
    array.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      object.average = sum / array.length;
    }
    object.min = array[0];
    object.max = array[array.length - 1];
    object.length = array.length;
    return object;
  } else {
    return false;
  }
}
