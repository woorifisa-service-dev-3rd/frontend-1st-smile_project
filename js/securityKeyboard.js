// security keyboard
const inputBirthElement = document.querySelector("#birth");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".button-close");
const screen = document.querySelector(".screen");

// security keyboard modal
// input box과 close button에 이벤트 리스너 추가
inputBirthElement.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);

// security keyboard 켜기
function showModal(params) {
  modal.style.display = "block";
}

// security keyboard 끄기
function closeModal(params) {
  modal.style.display = "none";
}

// security keyboard button -> number input box insert
// button 배열로 만들기
const buttonList = document.getElementsByClassName("securityKeyboard-button");
const buttonListArray = Array.from(buttonList);
const backspaceButton = document.getElementsByClassName("backspace-button");
const backspaceButtonArray = Array.from(backspaceButton);

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
    buttonElement.style.backgroundColor = "#f2f2f2";
    setTimeout(() => {
      buttonElement.style.backgroundColor = "";
    }, 100);
  });
});

// backspace button click -> 기입력된 값 삭제
backspaceButtonArray.forEach((backspaceElement) => {
  backspaceElement.addEventListener("click", backspaceFunction);
});
function backspaceFunction(params) {
  inputBirthElement.value = inputBirthElement.value.slice(0, -1);
}
