for (let i = 0; i < 400; i++) {
  addElement();
}

function addElement() {
  const newButton = document.createElement('div');
  newButton.className = 'box redbox';
  const currentDiv = document.querySelector('.container');
  currentDiv.appendChild(newButton);
}
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('redbox');
  });
});
