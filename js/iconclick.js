// icon click -> right main header name & icon change

// li를 배열로 만들기
const appList = document.getElementsByClassName("app-icon");
const appListArray = Array.from(appList);

// // appIcon 클래스를 가진 요소 선택
// const appIconElement = document.querySelector(".app-icon");

// 각 app-icon 요소에 클릭 이벤트 리스너 추가
appListArray.forEach((iconElement) => {
  iconElement.addEventListener("click", () => {
    // right-main header 요소 선택
    const rightMainHeader = document.querySelector(".right-main-header");

    // 클릭된 아이콘의 src, alt 속성 가져오기
    const imgElement = iconElement.querySelector("img");
    const imgSrc = imgElement.src;
    const imgAlt = imgElement.alt;

    // 이미지 생성
    let iconImage = document.createElement("img");
    iconImage.src = imgSrc;
    iconImage.alt = imgAlt;
    Image.style.width = "70px";
    Image.style.height = "70px";

    // right-main header 이미지 추가
    rightMainHeader.innerHTML = "";
    rightMainHeader.appendChild(iconImage);
  });
});
