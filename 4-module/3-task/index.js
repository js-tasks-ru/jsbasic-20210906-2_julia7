function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let el = table.rows[i]

    // Status
    el.cells[3].dataset.available == 'true' ? el.classList.add('available') :
    el.cells[3].dataset.available == 'false' ? el.classList.add('unavailable') : el.setAttribute('hidden', '');

    //Gender
    el.cells[2].innerHTML == 'm' ? el.classList.add('male') : el.classList.add('female')

    //Age
    if (+el.cells[1].innerHTML < 18) el.style.textDecoration = 'line-through';
  }
}
