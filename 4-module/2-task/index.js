function makeDiagonalRed(table) {
  const len = table.rows.length;
  for(let i = 0; i < len; i++) {
    let el = table.rows[i].cells[i];
    el.style.backgroundColor = 'red'
  }
}
