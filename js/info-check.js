// 입력된 정보 변수
let certificateTypeId = null; // 선택된 인증서 종류
let name = null; // 이름
let birthDate = null; // 생년월일

// DOM
// 인증서 선택 리스트
const appListDOM = document.getElementsByClassName("app-icon");
const appListArrayDOM = Array.from(appListDOM);
// 이름
const nameDOM = document.getElementById("name");
// 생년월일
const birthDOM = document.getElementById("birth");
// // 휴대폰 번호(뒷자리)
const lastPhoneNumberDOM = document.getElementById("phone");
// 개인정보 이용 동의 체크 박스
const personalInformationAgreementDOM = document.getElementById(
  "personalInformationAgreement"
);
// 제3자 정보 제공 동의 체크 박스
const thirdPartyInformationAgreementDOM = document.getElementById(
  "thirdPartyInformationAgreement"
);
// 인증 요청 버튼
const authenticationRequestButton = document.getElementById(
  "authenticationRequestButton"
);
// 정보 입력 안내 팝오버
const infoWarningPopover = document.getElementById("infoWarningPopover");
// 정보 입력 안내 팝오버 클로저 버튼
const infoWarningPopoverCloseBottom = document.getElementById(
  "infoWarningPopoverCloseBottom"
);
// 정보 입력 안내 팝오버 백그라운드
const popoverBackdrop = document.getElementById("popoverBackdrop");

// 인증서 종류 선택 -> 선택된 인증서 종류 변수에 할당
appListArrayDOM.forEach((iconElement) => {
  iconElement.addEventListener("click", () => {
    certificateTypeId = iconElement.id;
  });
});
// 이름 입력 -> 이름 변수에 할당
nameDOM.addEventListener("change", () => {
  name = nameDOM.value;
});
// 생년월일 입력 -> 생년월일 변수에 할당
birthDOM.addEventListener("blur", () => {
  birthDate = birthDOM.value;
});

// 테스트 -> 휴대폰 번호 아무거나 일단 입력하면 인증됐다 치기
lastPhoneNumberDOM.addEventListener("change", () => {
  lastPhoneNumberDOM.readOnly = true;
});

// 인증 요청 버튼 클릭 시 정보 유효성 검사
authenticationRequestButton.addEventListener("click", (event) => {
  // 인증서 선택 x
  if (certificateTypeId === null)
    infoWarningPopoverOpen("인증서비스를 선택하여 주십시오.");
  // 이름 입력 x
  else if (name === null) infoWarningPopoverOpen("이름을 입력하여 주십시오.");
  // 생년월일 입력 x
  else if (birthDate === null)
    infoWarningPopoverOpen("생년월일을 입력하여 주십시오.");
  // 생년월일 양식 잘못 입력
  else if (!moment(birthDOM.value).isValid())
    infoWarningPopoverOpen("생년월일을 다시 입력하여\n 주십시오.");
  // // 휴대폰 인증 x
  else if (lastPhoneNumberDOM.readOnly === false)
    infoWarningPopoverOpen("휴대폰번호 인증을 진행하여\n 주십시요.");
  // 개인정보 이용 동의 체크 x
  else if (personalInformationAgreementDOM.checked === false)
    infoWarningPopoverOpen(
      "개인정보 이용 동의에 대한\n 필수항목 동의 하여야 합니다."
    );
  // 제3자 정보 제공 동의 체크 x
  else if (thirdPartyInformationAgreementDOM.checked === false)
    infoWarningPopoverOpen(
      "제3자 정보제공 동의에 대한\n 필수항목 동의를 하여야 합니다."
    );
  // 인증 요청 가능
  else {
    alert("인증 요청 가능~~");
  }
});

// 팝오버 열기
const infoWarningPopoverOpen = (message) => {
  // 안내문
  const warningInfo = document.getElementById("warningInfo");
  warningInfo.innerText = message;

  infoWarningPopover.classList.add("show");
  popoverBackdrop.style.display = "block";
};

// 팝오버 닫기
infoWarningPopoverCloseBottom.addEventListener("click", (event) => {
  infoWarningPopover.classList.remove("show");
  popoverBackdrop.style.display = "none";
});
