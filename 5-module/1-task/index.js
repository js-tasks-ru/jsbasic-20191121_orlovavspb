/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[2].innerHTML == 'm') {
      rows[i].classList.add('male');
    }
    else if (rows[i].cells[2].innerHTML == 'f') {
      rows[i].classList.add('female');
    }
  }
  for (let j = 1; j < rows.length; j++) {
    if (rows[j].cells[1].innerHTML < 18) {
      rows[j].style.textDecoration = 'line-through';
    }
  }
  for (let l = 1; l < rows.length; l++) {
    if (!rows[l].cells[3].hasAttribute('data-available')) {
      rows[l].setAttribute('hidden', 'true');
    }
  } 
  for (let m = 1; m < rows.length; m++) {
    if (rows[m].cells[3].getAttribute('data-available') == 'true') {
      rows[m].classList.add('available');
    }
    else if (rows[m].cells[3].getAttribute('data-available') == 'false') {
      rows[m].classList.add('unavailable'); 
    } 
  } 
}
/*
for (let el1 of table.getElementsByTagName('tr')) {
    if (el1.hasAttribute('hidden') != "true") {
      el1.setAttribute('hidden');
    }
  }
*/