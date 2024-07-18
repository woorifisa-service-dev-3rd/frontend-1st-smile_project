// 입력된 정보 변수
let certificateTypeId = null; // 선택된 인증서 종류
let name = null; // 이름
let birthDate = null; // 생년월일
let newsAgency = null; // 통신사
let phoneNumber = null; // 휴대폰 번호
let personalInformationCheckBox = false; // 개인정보 동의 체크박스
let thirdPartyInformationCheckBox = false; // 제3자 정보 제공 동의 체크박스

// DOM
// 인증서 선택 리스트
const appListDOM = document.getElementsByClassName("app-icon");
const appListArrayDOM = Array.from(appListDOM);
// 이름
const nameDOM = document.getElementById('name');
// 생년월일
const birthDOM = document.getElementById('birth');
// // 통신사
// const newsAgencyDOM = document.getElementById('telecom');
// // 휴대폰 번호(앞자리)
// const firstPhoneNumberDOM = document.getElementById('firstPhone');
// // 휴대폰 번호(뒷자리)
// const lastPhoneNumberDOM = document.getElementById('phone');
// 개인정보 이용 동의 체크 박스
const personalInformationAgreementDOM = document.getElementById('personalInformationAgreement');
// 제3자 정보 제공 동의 체크 박스
const thirdPartyInformationAgreementDOM = document.getElementById('thirdPartyInformationAgreement');
// 인증 요청 버튼
const authenticationRequestButton = document.getElementById('authenticationRequestButton');
// 정보 입력 안내 팝오버
const infoWarningPopover = document.getElementById('infoWarningPopover');
// 정보 입력 안내 팝오버 클로저 버튼
const infoWarningPopoverCloseBottom = document.getElementById('infoWarningPopoverCloseBottom');
// 정보 입력 안내 팝오버 백그라운드
const popoverBackdrop = document.getElementById('popoverBackdrop');

// 인증서 종류 선택 -> 선택된 인증서 종류 변수에 할당
appListArrayDOM.forEach((iconElement) => {
  iconElement.addEventListener("click", () => {
    certificateTypeId = iconElement.id;
  });
});
// 이름 입력 -> 이름 변수에 할당
nameDOM.addEventListener('change', () => {
  name = nameDOM.value;
})
// 생년월일 입력 -> 생년월일 변수에 할당
birthDOM.addEventListener('change', () => {
  birthDate = birthDOM.value;
})
// // 통신사 입력 -> 통신사 변수에 할당
// newsAgencyDOM.addEventListener('change', () => {
//   newsAgency = newsAgencyDOM.value;
// })
// // 휴대폰 번호 앞자리 변경
// firstPhoneNumberDOM.addEventListener('change', () => {
//   phoneNumber = firstPhoneNumberDOM.value + lastPhoneNumberDOM.value;
//   console.log(phoneNumber);
// })
// // 휴대폰 번호 뒷자리 변경
// lastPhoneNumberDOM.addEventListener('change', () => {
//   phoneNumber = firstPhoneNumberDOM.value + lastPhoneNumberDOM.value;
//   console.log(phoneNumber);
// })
// 개인정보 이용 동의
personalInformationAgreementDOM.addEventListener('change', () => {
  personalInformationCheckBox = personalInformationAgreementDOM.checked;
})
// 제3자 정보 제공 동의 동의
thirdPartyInformationAgreementDOM.addEventListener('change', () => {
  thirdPartyInformationCheckBox = thirdPartyInformationAgreementDOM.checked;
})

// 인증 요청 버튼 클릭 시 정보 유효성 검사
authenticationRequestButton.addEventListener('click', (event) => {

  // 인증서 선택 x
  if(certificateTypeId === null) infoWarningPopoverOpen('인증서비스를 선택하여 주십시오.');
  // 이름 입력 x
  else if(name === null) infoWarningPopoverOpen('이름을 입력하여 주십시오.');
  // 생년월일 입력 x
  else if(birthDate === null) infoWarningPopoverOpen('생년월일을 입력하여 주십시오.');
  // 생년월일 양식 잘못 입력
  else if(!moment(birthDate).isValid()) infoWarningPopoverOpen('생년월일을 다시 입력하여\n 주십시오.');
  // // PASS 인증서인데 통신사 선택 x
  // else if(certificateTypeId === 'certificate-7' && newsAgency === null)
  //   infoWarningPopoverOpen('통신사를 선택해 주십시오.');
  // // 휴대폰 번호 입력 x
  // else if(phoneNumber === null || phoneNumber.length === 3) infoWarningPopoverOpen('휴대폰번호를 입력하여 주십시오.');
  // // 휴대폰 번호 8자리 미입력
  // else if(phoneNumber.length !== 11 && /^\d+$/.test(phoneNumber)) infoWarningPopoverOpen('휴대폰번호를 다시 입력하여\n 주십시오.');
  // 개인정보 이용 동의 체크 x
  else if(personalInformationCheckBox === false) infoWarningPopoverOpen('개인정보 이용 동의에 대한\n 필수항목 동의 하여야 합니다.');
  else if(thirdPartyInformationCheckBox === false) infoWarningPopoverOpen('제3자 정보제공 동의에 대한\n 필수항목 동의를 하여야 합니다.');
})

// 팝오버 열기
const infoWarningPopoverOpen = (message) => {
  
  // 안내문
  const warningInfo = document.getElementById('warningInfo');
  warningInfo.innerText = message;

  infoWarningPopover.classList.add('show');
  popoverBackdrop.style.display = 'block';
}

// 팝오버 닫기
infoWarningPopoverCloseBottom.addEventListener('click', (event) => {
  infoWarningPopover.classList.remove('show');
  popoverBackdrop.style.display = 'none';
})