const body = document.querySelector('body');
const questions = [
  {
    question: "What is Divine's Favourite Food?",
    options: ['Yess', 'No'],
  },
];
questions.map((question) => {
  let newQuestion = document.createElement('div');
  newQuestion.classList.add('container');
  let questionText = document.createElement('div');
  questionText.classList.add('question');
  questionText.innerHTML = question.question;
  newQuestion.appendChild(questionText);
  question.options.map((option) => {
    let optionText = document.createElement('div');
    if (option === 'Yess') {
      optionText.addEventListener('click', () => {
        optionText.style.backgroundColor = 'green';
        alert('You Won');
      });
    } else {
      optionText.addEventListener('click', () => {
        optionText.style.backgroundColor = 'red';
        alert('You Lost');
      });
    }
    optionText.classList.add('option');
    optionText.innerHTML = option;
    newQuestion.appendChild(optionText);
  });
  body.appendChild(newQuestion);
});
