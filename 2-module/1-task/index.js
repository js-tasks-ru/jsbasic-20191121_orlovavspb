/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let a1 = 0;
  let a2 = 0;
  for (let prop in obj) {
    a1++;
    if (typeof obj[prop] == 'undefined' || obj[prop] == null || typeof obj[prop] == 'object') {
      a2++;
    }
  }
  if (a1 > 0 && a2 === 0) {
    let copy = Object.assign({}, obj);
    return copy;
  }  
  else {
    return false;
  }
}
  