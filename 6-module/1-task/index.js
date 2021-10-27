/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {

  constructor(rows) {
    this.elem = document.createElement('table')
      this.elem.innerHTML = `
        <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
        `;

    let tableRows = ''
    rows.forEach(row => {
      tableRows +=
      `<tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      </tr>`
    });

    this.elem.innerHTML += `
    <tbody>
      ${tableRows}
    <tbody>
  `;

  this.elem.addEventListener('click', (event) => {
    if (event.target.innerHTML === 'X') {
      event.target.parentElement.parentElement.remove()
    }
  })

  }
}
