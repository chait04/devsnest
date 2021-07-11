let items = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
  ];
  
  items.sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < 16; i++) {
    container = document.getElementById("container");
    let card = document.createElement("div");
    card.addEventListener("click", checkFlip);
    card.className = items[i];
    card.classList.add("basic");
    card.innerText = items[i].toUpperCase();
    // card.classList.add('flip');
    container.appendChild(card);
  }
  
  let clicked = [];
  function checkFlip(e) {
    if (clicked.length == 1) {
      clicked.append(e.target);
      card.classList.add("flip");
      if (clicked[0].classList[1] == clicked[1].classList) {
        clicked[0].classList.add("verified");
        clicked[1].classList.add("verified");
        clicked = [];
      } else {
        clicked = [];
      }
    } else {
      clicked.append(e.target);
    }
  }