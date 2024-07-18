import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
const auth = getAuth();
window.confirmationResult = null;
auth.languageCode = "ko";

// 버튼 중복 클릭 방지(디바운싱)
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
      if (!timer) { // 이전에 설정된 타이머가 없는 경우에만 함수 호출 = 가장 처음에만 함수 호출
          func.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => { // 일정 시간이 지난 후 timer 변수를 undefined로 설정해 다음 호출에 대비
          timer = undefined;
      }, timeout);
  };
}

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "invisible",
  callback: (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  },
});
document
  .getElementById("phoneNumberButton")
  .addEventListener("click", debounce((event) => {
    event.preventDefault();
    const first_phone_element = document.getElementById("first-phone");
    const first_phone_number =
      first_phone_element.options[first_phone_element.selectedIndex].value;
    const last_phone_number = document.getElementById("phone").value;
    const phoneNumber = first_phone_number + last_phone_number;
    const appVerifier = window.recaptchaVerifier;
    if(phoneNumber.length <8) {
      alert("전화번호를 제대로 입력해 주세요.");
      return;
    }

    signInWithPhoneNumber(auth, "+82" + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        // ...
      })
      .catch((error) => {
        console.log(error);
        alert(error.code);
        // Error; SMS not sent
        // ...
      });
  }));

document
  .getElementById("confrimCodeButton")
  .addEventListener("click", debounce((event) => {
    event.preventDefault();
    const code_element = document.getElementById("phone_check");
    const code = code_element.value;

    if (code_element.disabled === true) return;
    else {
      confirmationResult
        ?.confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(result);

          code_element.disabled = true;
          document.getElementById("telecom").disabled = true;
          document.getElementById("first-phone").disabled = true;
          document.getElementById("phone").readOnly = true;
          document
            .getElementById("confrimCodeButton")
            .setAttribute("disabled", true);
        })
        .catch((error) => {
          console.log(error);
          alert("다시 입력하세요.");
          // User couldn't sign in (bad verification code?)
        });
    }
  }));
