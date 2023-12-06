const charCount = document.getElementById("charCount");
const charDiv = document.getElementById("charDiv");
const expInput = document.getElementById("expInput");
const expDiv = document.getElementById("expDiv");

expInput.oninput = () => updateCount(expInput.value.length);

function updateCount(expLength) {
  charCount.innerText = `${expLength}/400`;
}

function setCount() {
  charDiv.style.left =
    (expInput.clientWidth - charDiv.clientWidth) / 16 - 1 + "em";
}

window.onload = () => {
  document.getElementById("form").reset();
  setCount();
};

window.onresize = () => {
  setCount();
};
