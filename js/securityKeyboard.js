// security keyboard
const inputBirthElement = document.querySelector("#birth");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".button-close");
const screen = document.querySelector(".screen");
const keyboard_modal = document.querySelector(".keyboard-modal-bg");

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

function removeChildForIndex(parent, index) {
  for (let ii = 0; ii < index; ii++) {
    if (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}

// security keyboard 켜기
function showModal(params) {
  modal.style.display = "block";
  const randomIndexs = randomIndex(10);
  randomIndexs.forEach((index) => {
    keyboard_modal.insertAdjacentHTML(
      "afterbegin",
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

      // 클릭된 button 배경색 변경
      buttonElement.style.backgroundColor = "var(--sub-color)";
      buttonElement.style.color = "#FFF";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "";
        buttonElement.style.color = "";
      }, 100);
    });
  });
}

// security keyboard 끄기
function closeModal(params) {
  modal.style.display = "none";
  removeChildForIndex(keyboard_modal, 10);
}

// security keyboard button -> number input box insert
// button 배열로 만들기
const backspaceButton = document.getElementsByClassName("backspace-button");
const backspaceButtonArray = Array.from(backspaceButton);

// button shuffle
const buttons = document.querySelector(".securityKeyboard-button");

function backspaceFunction() {
  inputBirthElement.value = inputBirthElement.value.slice(0, -1);
}
// backspace button click -> 기입력된 값 삭제
backspaceButtonArray.forEach((backspaceElement) => {
  backspaceElement.addEventListener("click", () => {
    backspaceFunction();
    // 클릭된 button 배경색 변경
    backspaceElement.style.backgroundColor = "var(--sub-color)";
    backspaceElement.style.color = "#FFF";
    setTimeout(() => {
      backspaceElement.style.backgroundColor = "";
      backspaceElement.style.color = "";
    }, 100);
  });
});
// keyboard 입력 막기
inputBirthElement.addEventListener("keyup", (e) => {
  e.target.value = "";
});
