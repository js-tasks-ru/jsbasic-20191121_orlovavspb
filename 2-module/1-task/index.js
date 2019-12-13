/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return null;
  } 
  else {
    let clon = {}; 
    for (let key in obj) {
      if (typeof obj[key] !== 'object') {
        clon[key] = obj[key];
      }
      else {
        clon[key] = clone(obj[key]);
      }
    }
    return clon;
  }
}

