/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (n > 0) {
    return m ** n;
  }
}
const m = prompt('Введите значение m');
const n = prompt('Введите значение n');
if (n > 0) { 
  alert(`m c тепени n = ` + pow(m, n));
} else {
  alert('n должно быть больше нуля');
}