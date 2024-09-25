const button = document.querySelectorAll("button");
const quize = { item: [], difficulty: null, score: 0, high_score: 0 };

let select = 0;
function loadLocalStorage() {
  const unParsed = localStorage.getItem("Quize");
  if (unParsed) {
    const parsed = JSON.parse(unParsed);
    quize["high_score"] = parsed["high_score"];
    quize.difficulty = parsed.difficulty;
  }
}

const clickHandler = (event) => {
  if (event.target.dataset.category === "easy") {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean"
    )
      .then((res) => res.json())
      .then((data) => {
        quize.item = data.results;
        quize.difficulty = event.target.dataset.category;
        localStorage.setItem("Quize", JSON.stringify(quize));
      });
    console.log("first");
  } else if (event.target.dataset.category === "medium") {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean"
    )
      .then((res) => res.json())
      .then((data) => {
        quize.item = data.results;
        localStorage.setItem("Quize", JSON.stringify(quize));
        quize.difficulty = event.target.dataset.category;
      });
    console.log("first2");
  } else {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=boolean"
    )
      .then((res) => res.json())
      .then((data) => {
        quize.item = data.results;
        quize.difficulty = event.target.dataset.category;
        localStorage.setItem("Quize", JSON.stringify(quize));
      });
    console.log("first3");
  }
  select = 1;
  localStorage.setItem("select", JSON.stringify(select));
  localStorage,
    localStorage.setItem(
      "difficulty",
      JSON.stringify(event.target.dataset.category)
    );
  event.target.style.backgroundColor = "green";
};
console.log(quize);
window.addEventListener("load", () => {
  loadLocalStorage();
  button.forEach((item) => item.addEventListener("click", clickHandler));
});
