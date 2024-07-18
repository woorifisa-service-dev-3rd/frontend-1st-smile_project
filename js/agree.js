// 전체 동의 버튼
const allAgreement = document.getElementById('allAgreement');
// 개인 정보 동의 버튼
const personalInformationAgreement = document.getElementById('personalInformationAgreement');
// 제3자 정보 제공 동의 버튼
const thirdPartyInformationAgreement = document.getElementById('thirdPartyInformationAgreement');

allAgreement.addEventListener('change', (event) => {

  // 전체 동의 버튼 눌렀을 경우, 다른 동의 버튼 2개 자동 체크
  if(event.target.checked == true) {
    personalInformationAgreement.checked = true;
    thirdPartyInformationAgreement.checked = true;
  }
  // 전체 동의 버튼 해제했을 경우, 다른 동의 버튼 2개 자동 해제
  else {
    personalInformationAgreement.checked = false;
    thirdPartyInformationAgreement.checked = false;
  }
})

personalInformationAgreement.addEventListener('change', (event) => {

  // 다른 동의 버튼 두개 모두 체크했을 경우, 전체 동의 버튼도 자동 체크
  if(event.target.checked == true && thirdPartyInformationAgreement.checked == true) {
    allAgreement.checked = true;
  }
  // 다른 동의 버튼 중 어느 하나 체크를 풀었을 경우, 전체 동의 버튼 체크 해제
  else {
    allAgreement.checked = false;
  }
})
thirdPartyInformationAgreement.addEventListener('change', (event) => {

  // 다른 동의 버튼 두개 모두 체크했을 경우, 전체 동의 버튼도 자동 체크
  if(personalInformationAgreement.checked == true && event.target.checked == true) {
    allAgreement.checked = true;
  }
  // 다른 동의 버튼 중 어느 하나 체크를 풀었을 경우, 전체 동의 버튼 체크 해제
  else {
    allAgreement.checked = false;
  }
})