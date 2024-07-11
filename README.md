# 우리FISA frontend 1st project - 우서 프로젝트(smile project:D)

## 💡프로젝트 소개

간편인증(민간인증서)를 우리금융그룹 스타일로 클론 코딩한 프로젝트입니다.

### 개인정보 입력
![개인정보입력](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/d7bb5edd-6a2e-40b8-b7d6-3c063eb93f89)
### 서비스 이용에 대한 동의
![서비스이용에대한동의](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/68517303/45cb5682-97ff-4be7-87e9-ab31c23184a8)

## 👨‍💻팀원 소개

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bw02184">
        <img src="https://github.com/bw02184.png" alt="팀장 신원섭" width="200" height="200"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seonmin56">
        <img src="https://github.com/seonmin5.png" alt="오선민" width="200" height="200"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SeungAh-Yoo99">
        <img src="https://github.com/SeungAh-Yoo99.png" alt="유승아" width="200" height="200"/>
      </a>
    </td>
  </tr>
   <tr>
    <td align="center">
      <a href="https://github.com/bw02184">
        <b>신원섭</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seonmin5">
        <b>오선민</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SeungAh-Yoo99">
        <b>유승아</b>
      </a>
    </td>
  </tr>
</table>

UI 스타일 가이드라인

1. 폰트 서체 및 사이즈

- 제목: WooridaumB, 그외: WooridaumL
- font-size: 17 15 13

2. 컬러 배색
   포인트 색상

- 간편인증 진한 컬러: #253a71
- 인증요청 등 하늘색 컬러: #0067ac

* 기본 색상

- 검정: #222222
- 회색: #5A5A5A
- 연한회색: #f2f2f2

3. 여백 및 정렬 여부

- 페이지 전체 크기 : (w: 838px, h: 642px)
- 페이지 좌측 크기 : 338px, 우측 크기: 500px
- 테두리 여백: padding 20px
- 정렬: 13만 가운데 정렬, 그외: 좌측 정렬

4. iframe 태그 사용 -> Lighthouse 점수 문제로 통합

![Untitled](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/60f35a5e-0ab5-4caa-8525-ef6d4ceb0d3d)

![Untitled (1)](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/e97a0c60-1caf-447f-b20b-f2c6bab0c121)

## 코드

### 변수사용

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

```
 <details>
      <summary>CSS!!</summary>
      <p>Welcome</p>b
    </details>
```

![인증서1](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/46b8138c-1e2a-487a-9590-b9b4699edc43)

![인증서2](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/23e9894e-ca66-41d2-ac31-0e35d263e29c)

### 이미지 색상 변경

https://codepen.io/sosuke/pen/Pjoqqp  
![화살표들](https://github.com/woorifisa-service-dev-3rd/frontend-1st-smile_project/assets/102367393/b5317b89-1c16-466f-820d-5a89758d7948)

```
.img{
  filter: invert(51%) sepia(97%) saturate(1765%) hue-rotate(157deg) brightness(89%) contrast(101%);
}
```
