const inputEl = document.querySelector(`input`);
const btDog = document.querySelector(`button`);
const article = document.querySelector(`article`);

btDog.addEventListener(`click`, fetchDogs);

function fetchDogs() {
  let query = inputEl.value;
  article.innerHTML = '';
  fetch(`https://dog.ceo/api/breed/${query}/images/random/10`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.message);
      getResponce(data);
    });
}

function getResponce(data) {
  console.log(data.message);

  if (data.status == 'success') {
    data.message.forEach((dog) => {
    //   console.log(dog);
      let dogDiv = document.createElement(`div`);
      dogDiv.className = 'doggo';
      dogDiv.innerHTML = `<img src=${dog}>`;
      article.append(dogDiv);
    });
  } else {
    const notFound = document.createElement(`div`);
    notFound.innerText = 'dog not found';
    notFound.className = 'notFound';
    article.innerHTML = '';
    article.append(notFound);
  }
}

fetchDogs();

try {
  
} catch (error) {
  console.log(error);
}