console.log(`henlo frnds`);

let btnEl = document.querySelector(`.buttons`);
let screen = document.querySelector(`#display`);
screenValue = '';

btnEl.addEventListener(`click`, (e) => {
  let btnText = e.target.innerText;

  if (btnText == 'C') {
    screen.value = '';
  } else if (btnText == '=') {
    screen.value = eval(screen.value);
  } else if (btnText == '←') {
    screen.value = screen.value.slice(0, -1);
  } else {
    screen.value += btnText;
  }
});
