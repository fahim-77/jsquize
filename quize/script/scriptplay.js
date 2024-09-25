// async function getPost() {
//   try {
//     const request = await fetch(
//       "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean"
//     );
//     const json = await request.json();
//     localStorage.setItem("easyQuestions", JSON.stringify(json));
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getPost();

// //////////////////////////////////////////////////////

const link = document.querySelector("a");
link.style.display = "none";
const downButton = document.querySelector(".down-buttons");
const question = document.querySelector(".question");
const questionText = document.querySelector(".question-text");
const questionAnswer = document.querySelector(".question-answer");
const trueButton = document.querySelector(".correct-answer");
const falseButton = document.querySelector(".incorrect-answer");
const previous = document.querySelector(".previous-question");
const next = document.querySelector(".next-question");

const easyQuestions = localStorage.getItem("Quize");
const quize = JSON.parse(easyQuestions);

let index = 0;

questionText.innerText = `${index + 1}. ${quize.item[index].question}`;
previous.disabled = true;
next.disabled = true;

const chekHandler = (event) => {
  trueButton.disabled = true;
  falseButton.disabled = true;
  if (event.target.dataset.category === quize.item[index]["correct_answer"]) {
    quize.score += 10;
    console.log("true");
  } else {
    quize.score -= 2;
    console.log("false");
  }
  previous.addEventListener("click", previousHandler);
  next.disabled = false;
  next.addEventListener("click", nextHandler);
  if (quize.score > quize["high_score"]) {
    quize["high_score"] = quize.score;
  }
  localStorage.setItem("Quize", JSON.stringify(quize));
};

const previousHandler = () => {
  index--;
  questionText.innerText = `${index + 1}. ${quize.item[index].question}`;
  trueButton.addEventListener("click", chekHandler);
  falseButton.addEventListener("click", chekHandler);
};
const nextHandler = () => {
  trueButton.disabled = false;
  falseButton.disabled = false;
  previous.disabled = false;
  next.disabled = true;
  index++;
  questionText.innerText = `${index + 1}. ${quize.item[index].question}`;
  if (index === 9) {
    previous.style.display = "none";
    next.innerHTML = "Finish";
    if (next.innerHTML === "Finish") {
      const end = () => {
        questionText.style.display = "none";
        questionAnswer.style.display = "none";
        question.innerHTML = `difficulty : ${quize.difficulty} ------- score : ${quize.score}`;
        link.style.display = "flex";
      };
      next.addEventListener("click", end);
    }
  }
  trueButton.addEventListener("click", chekHandler);
  falseButton.addEventListener("click", chekHandler);
};

window.addEventListener("load", () => {
  trueButton.addEventListener("click", chekHandler);
  falseButton.addEventListener("click", chekHandler);
});
