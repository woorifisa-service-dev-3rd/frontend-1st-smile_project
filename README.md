# 우서 프로젝트 - smile project:D
[Live Demo](https://woorifisa-service-dev-3rd.github.io/frontend-1st-smile_project/)
<br><br>

## 💡프로젝트 소개

간편인증(민간인증서)를 우리금융그룹 스타일로 클론 코딩한 프로젝트입니다.

### 개인정보 입력
![개인정보입력](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/d7bb5edd-6a2e-40b8-b7d6-3c063eb93f89)
### 서비스 이용에 대한 동의
![서비스이용에대한동의](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/45cb5682-97ff-4be7-87e9-ab31c23184a8)
### 문자 인증 요청
### 가상 키보드로 생년월일 입력
### 정보 입력 유효성 확인

<br>

## 👨‍💻팀원 소개

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bw02184">
        <img src="https://github.com/bw02184.png" alt="신원섭" width="150" height="150"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seonmin5">
        <img src="https://github.com/seonmin5.png" alt="오선민" width="150" height="150"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SeungAh-Yoo99">
        <img src="https://github.com/SeungAh-Yoo99.png" alt="유승아" width="150" height="150"/>
      </a>
    </td>
  </tr>
   <tr>
    <td align="center">
      <a href="https://github.com/bw02184">
        <b>팀장 신원섭</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seonmin5">
        <b>팀원 오선민</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SeungAh-Yoo99">
        <b>팀원 유승아</b>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      본인인증 정보 입력<br>
      HTML, CSS 구현<br>
      문자인증 기능 구현
    </td>
    <td align="center">
      민간 인증서 선택<br>
      HTML, CSS 구현<br>
      보안키보드 기능 구현
    </td>
    <td align="center">
      서비스 이용 동의<br>
      HTML, CSS 구현<br>
      인증 정보 유효성 검사 기능 구현
    </td>
  </tr>
</table>

<br>

## 🖼️UI 스타일 가이드라인

### 폰트 서체 및 사이즈

<table>
  <caption>우리다움체 사용</caption>
  <tr>
    <td>font-family</td>
    <td>font-size</td>
  </tr>
  <tr>
    <td>WooridaumB</td>
    <td>17</td>
  </tr>
  <tr>
    <td>WooridaumL</td>
    <td>15, 13</td>
  </tr>
</table>
<img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/60f35a5e-0ab5-4caa-8525-ef6d4ceb0d3d" alt="폰트 사이즈" width="600" height="400"/>

### 컬러 배색

<table>
  <caption>포인트 색상</caption>
  <tr>
    <td>main-color</td>
    <td>#253a71</td>
  </tr>
  <tr>
    <td>sub-color</td>
    <td>#0067ac</td>
  </tr>
</table>

<table>
  <caption>기본 색상</caption>
  <tr>
    <td>main-color</td>
    <td>#222222</td>
  </tr>
  <tr>
    <td>sub-color</td>
    <td>#5A5A5A</td>
  </tr>
  <tr>
    <td>sub2-color</td>
    <td>#f2f2f2</td>
  </tr>
</table>

### 여백 및 정렬 여부

<table>
  <tr>
    <td>페이지 전체 크기</td>
    <td>w: 838px(좌 338px + 우 500px)<br>h: 642px</td>
  </tr>
  <tr>
    <td>테두리 여백</td>
    <td>padding: 20px</td>
  </tr>
  <tr>
    <td>정렬</td>
    <td>기본 좌측 정렬<br>민간인증서 리스트는 가운데 정렬</td>
  </tr>
</table>

<br>

## <img src="https://github.com/user-attachments/assets/3d0453e2-123d-4fe0-b5ca-c04b75cc8e8c" width=30px hieght=30px align="top"> ESLint

<table>
  <tr>
    <td>추가한 Rules</td>
    <td>설명</td>
    <td>적용한 이유</td>
  </tr>
  <tr>
    <td><code>no-var</code></td>
    <td><code>var</code> 키워드로 변수를 선언하는 것을 금지</td>
    <td>더 안전하고 예측 가능한 코드를 작성하도록 함</td>
  </tr>
  <tr>
    <td><code>id-length</code></td>
    <td>식별자(identifier) 이름 길이를 제한</td>
    <td>코드의 가독성과 유지보수성을 높임</td>
  </tr>
  <tr>
    <td><code>dot-notation</code></td>
    <td>대괄호 표기법(<code>obj['property']</code>)보다는<br>점 표기법(<code>obj.property</code>)을 사용하도록 강제</td>
    <td>더 간결하고 명확하게 작성하여 코드의 가독성을 높임</td>
  </tr>
</table>

<br>

## ⚙️구현 특이 사항

### 변수사용

컬러 변수를 선언하여 사용하여, 컬러 지정 및 변경의 편의성을 높임

```
:root {
  --main-color: #253a71;
  --sub-color: #0067ac;
  --sub2-color: #f2f2f2;
  --font-main-color: #222222;
  --font-sub-color: #5a5a5a;
}


div{
  background-color: var(--main-color);
}
```

### html 팝오버

약관 확인을 위한 토글을 Javascript 없이 HTML 태그로 구현

```
<button popovertarget="personalInformationAgreementPopover">></button>
<div id="personalInformationAgreementPopover" popover>
  우리FISA 3기에 오신걸 환영합니다 ^^
</div>
```
<img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/46b8138c-1e2a-487a-9590-b9b4699edc43" alt="popover 사용 예시1" width="600" height="400"/>
<img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/23e9894e-ca66-41d2-ac31-0e35d263e29c" alt="popover 사용 예시2" width="600" height="400"/>

<br><br>

### 이미지 색상 변경

[CSS filter를 통한 이미지 색상 변경](https://codepen.io/sosuke/pen/Pjoqqp)

```
.img{
  filter: invert(51%) sepia(97%) saturate(1765%) hue-rotate(157deg) brightness(89%) contrast(101%);
}
```

<img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/b5317b89-1c16-466f-820d-5a89758d7948" alt="이미지 색상 변경" width="100" height="50"/>
<br>
<p>before&nbsp&nbsp&nbspafter</p>
<br>

## 📊Lighthouse를 통한 성능 개선

### Performance

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/78a008b4-ba6f-47d6-9d93-6e699f4959bc" alt="performance err" width="200" height="200"/>
    </td>
    <td align="center">
      <img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/9881c075-2edc-4df8-ba10-8c5e3dd65377" alt="performance" width="200" height="200"/>
    </td>
  </tr>
    <tr>
    <td align="center">각자의 구현 영역을<br>별도의 html 파일에 작성 후<br>index.html에 iframe 태그를 통해<br>병합하는 방식으로 구현</td>
    <td align="center">index.html에 코드 병합</td>
  </tr>
</table>

<br>

### Accessibility

* li 태그를 ol 태그나 ul 태그와 함께 사용하지 않음 -> ul 태그로 감싸줌
* img 태그 alt 속성 수정
* png 파일 압축

<img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/0fa162c0-f936-42ef-ad0f-19f6f41f6d6e" alt="performance" width="500" height="80"/>

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/ac74d6d4-18e4-4fad-9118-c7ef63a73483" alt="performance err" width="200" height="200"/>
    </td>
    <td align="center">
      <img src="https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/7ef29084-cb3e-4a01-81d0-fa2de2a09e52" alt="performance" width="200" height="200"/>
    </td>
  </tr>
    <tr>
    <td align="center">수정 전</td>
    <td align="center">수정 후</td>
  </tr>
</table>
