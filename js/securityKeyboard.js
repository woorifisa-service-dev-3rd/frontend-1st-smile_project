// input.birth click -> security keyboard
// input.birth click ->  security keyboard event
const inputBirthElement = document.querySelector("#birth");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".button-close");
const screen = document.querySelector(".screen");

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

// button 배열로 만들기
const buttonList = document.getElementsByClassName("securityKeyboard-button");
const buttonListArray = Array.from(buttonList);

// 각 button 요소에 클릭 이벤트 리스너 추가
// button click -> 해당하는 숫자 input box 입력
buttonListArray.forEach((buttonElement) => {
  buttonElement.addEventListener("click", () => {
    // 클릭된 button의 value 속성 가져오기
    const buttonValue = Number(buttonElement.value);
    console.log(buttonValue);
    inputBirthElement.value += buttonValue;
    // input birth에 button value 입력
  });
});
