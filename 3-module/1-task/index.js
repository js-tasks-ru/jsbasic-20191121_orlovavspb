/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let user = data.filter(item => item.age <= age);
  let user1 = user.map(item => `${item.name}, ${item.balance}`); 
  let str = user1.join('\n');
  return str;
}
