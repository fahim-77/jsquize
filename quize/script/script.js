const play = document.querySelector(".play");
play.disabled = true;

const select = localStorage.getItem("select");
const parseSelect = JSON.parse(select);
localStorage.removeItem("select");
if (parseSelect === 1) {
  play.innerHTML = null;
  const link = document.createElement("a");
  link.href = "./play.html";
  link.innerHTML = "play";
  play.appendChild(link);
}
