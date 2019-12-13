/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  if (typeof str !== 'string') {
    return false;
  }
  else {
    let newstr = str.replace(/[^-.\d]/g, ' ');
    let newstr2 = newstr.replace(/\s+/g, ' ');
    let newarr = newstr2.split(' ');    
    let MinMaxArr = { min: Math.min.apply(null, newarr), max: Math.max.apply(null, newarr) };
    return MinMaxArr;
  } 
}




/* function getMinMax(str) {
  if (typeof str === 'string') {
    let newstr = inputData.replace(/[^\-\.\d]/g, ' ');
    let newstr2 = newstr.replace(/\s+/g, ' ');
    let newarr = newstr2.split(' ');
    let MinMaxArr = [Math.min.apply(null, newarr), Math.max.apply(null, newarr)];
    let MinMaxArr = { min: Math.min.apply(null, newarr), max: Math.max.apply(null, newarr) };
    return MinMaxArr;
  }
  else {
    return false;
  }
}
*/
