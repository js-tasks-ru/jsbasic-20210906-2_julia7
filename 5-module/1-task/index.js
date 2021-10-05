function hideSelf() {
  const btnHidden = document.querySelector('.hide-self-button')
  btnHidden.addEventListener('click', () => {
    btnHidden.hidden = !btnHidden.hidden
  }, {once: true})
}
