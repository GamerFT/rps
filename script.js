function getComputerChoice() {
  let a = Math.random();
  if (a < 0.33) {
    return "Rock";
  } else if (a < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
let cscore = 0;
let pscore = 0;

function score(pchoice, cchoice) {
  pchoice =
    pchoice.substring(0, 1).toUpperCase() + pchoice.substring(1).toLowerCase();
  const feed = document.querySelector("#feed");
  const content = document.createElement("div");
  content.classList.add("scores");
  if (pchoice == cchoice) {
    content.textContent = "Tie";
  } else if (pchoice == "Rock") {
    if (cchoice == "Paper") {
      content.textContent = "You Lose! Paper beats Rock";
      cscore++;
    } else {
      content.textContent = "You Win! Rock beats Scissors";
      pscore++;
    }
    document.getElementById("pscore").innerHTML = pscore;
    document.getElementById("cscore").innerHTML = cscore;
  } else if (pchoice == "Paper") {
    if (cchoice == "Rock") {
      content.textContent = "You Win! Paper beats Rock";
      pscore++;
    } else {
      content.textContent = "You Lose! Scissors beats Paper";
      cscore++;
    }
    document.getElementById("pscore").innerHTML = pscore;
    document.getElementById("cscore").innerHTML = cscore;
  } else if (pchoice == "Scissors") {
    if (cchoice == "Rock") {
      content.textContent = "You Lose! Rock beats Scissors";
      cscore++;
    } else {
      content.textContent = "You Win! Scissors beats Paper";
      pscore++;
    }
    document.getElementById("pscore").innerHTML = pscore;
    document.getElementById("cscore").innerHTML = cscore;
  } else {
    return 0;
  }
  feed.appendChild(content);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    score(button.id, getComputerChoice());
  });
});
