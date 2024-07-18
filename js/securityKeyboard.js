// input.birth click -> security keyboard

// input.birth click ->  security keyboard 모달창 띄우기
const inputBirthElement = document.querySelector("#birth");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".button-close");
const screen = document.querySelector(".screen");

inputBirthElement.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);

function showModal(params) {
  modal.style.display = "block";
}

function closeModal(params) {
  modal.style.display = "none";
}
