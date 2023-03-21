function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyPage = document.querySelector('body');
const spanEl = document.querySelector('.color');

bodyPage.addEventListener('click', (event) => {

  if (event.target.tagName === 'BUTTON') {
    const currentColor = getRandomHexColor();

    event.currentTarget.style.backgroundColor = currentColor;
    spanEl.textContent = currentColor
  }
  console.log(bodyPage)

});
