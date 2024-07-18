// icon click -> right main header name & icon change

// li를 배열로 만들기
const appList = document.getElementsByClassName("app-icon");
const appListArray = Array.from(appList);

// 각 app-icon 요소에 클릭 이벤트 리스너 추가
appListArray.forEach((iconElement) => {
  iconElement.addEventListener("click", () => {
    // right-main header 요소 선택
    const rightMainHeader = document.querySelector(".right-main-header");

    // 클릭된 아이콘의 src, alt 속성 가져오기
    const imgElement = iconElement.querySelector("img");
    const imgSrc = imgElement.src;
    const imgAlt = imgElement.alt;

    // 클릭된 아이콘의 이름 가져오기
    const iconNameElement = iconElement.querySelector("a");
    const iconName = iconNameElement ? iconNameElement.textContent : "";

    // 이미지 생성
    let iconImage = document.createElement("img");
    iconImage.src = imgSrc;
    iconImage.alt = imgAlt;
    iconImage.style.width = "30px";
    iconImage.style.height = "30px";
    iconImage.style.borderRadius = "10px";
    iconImage.style.marginLeft = "5px";

    // 이름 생성
    let iconNameSpan = document.createElement("span");
    iconNameSpan.textContent = iconName;
    iconNameSpan.style.fontFamily = "wooriB";
    iconNameSpan.style.fontSize = "17px";
    iconNameSpan.style.marginLeft = "10px";
    iconNameSpan.style.color = "#FFFFFF";

    // right-main header 이미지 및 이름 추가
    rightMainHeader.innerHTML = ""; // 기존 내용 삭제
    rightMainHeader.appendChild(iconImage); // 새로운 이미지 추가
    rightMainHeader.appendChild(iconNameSpan); // 이름 추가
  });
});
