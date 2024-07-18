// security keyboard
const inputBirthElement = document.querySelector("#birth");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".button-close");
const screen = document.querySelector(".screen");
const keyboard_modal = document.getElementById("keyboard-modal-bg");

// security keyboard modal
// input box과 close button에 이벤트 리스너 추가
inputBirthElement.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);

function randomIndex(totalIndex) {
  let randomIndexArray = [];
  while (randomIndexArray.length < totalIndex) {
    let randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    }
  }
  return randomIndexArray;
}

// security keyboard 켜기
function showModal(params) {
  modal.style.display = "block";
  const randomIndexs = randomIndex(10);
  keyboard_modal.insertAdjacentHTML(
    "beforeend",
    `<p>보안 키패드를 이용하세요</p>`
  );
  randomIndexs.forEach((index) => {
    keyboard_modal.insertAdjacentHTML(
      "beforeend",
      `<button class="securityKeyboard-button" value="${index}">${index}</button>`
    );
  });

  // security keyboard button -> number input box insert
  // button 배열로 만들기
  const buttonList = document.getElementsByClassName("securityKeyboard-button");
  const buttonListArray = Array.from(buttonList);

  // 각 button 요소에 클릭 이벤트 리스너 추가
  // button click -> 해당하는 숫자 input box 입력
  buttonListArray.forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
      // 클릭된 button의 value 속성 가져오기
      const buttonValue = Number(buttonElement.value);
      // 8자리 미만이면 input birth에 button value 입력
      if (
        inputBirthElement.value.length <
        inputBirthElement.getAttribute("maxlength")
      ) {
        inputBirthElement.value += buttonValue;
      }
    });
  });
}

// security keyboard 끄기
function closeModal(params) {
  modal.style.display = "none";
  keyboard_modal.replaceChildren();
}

inputBirthElement.addEventListener("keyup", (e) => {
  e.target.value = "";
});
