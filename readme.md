# 개인 블로그

[duck-Blog](http://duck-blog.info)

포트폴리오 및 공부기록을 꾸준히 올리고 싶어서 만들게 된 웹 서비스입니다.

현재 개인 블로그 프로젝트는 AWS-EC2를 이용하여 배포 진행중에 있으며

추후에 태그 리스트 기능과 같은 새로운 기능과 CSS 변경과 코드 리팩토링할 예정입니다.

---

## 성능 개선 & 버그 수정

1. [코드 리팩토링] LoadPost saga action 코드 수정 → google Page Inside 기준
   “**78 → 85”** 성능 상승

---

## 기능 추가

- [x] 반응형 구현
- [x] 도메인 연결
- [x] http 배포
- [ ] https 인증서 발급
- [ ] css SSR
- [ ] 태그 리스트 기능
- [ ] Lamda 적용

---

## 🛠️ 사용 기술 및 라이브러리

<img width="333" alt="image" src="https://user-images.githubusercontent.com/72850354/177609703-bbfcf46e-11d9-4728-9921-d94562215475.png">

---

## 🛠️ 주요 기능

1. 로그인 회원가입

   - React-Hook-Form을 이용하여 불 필요하게 많은 hooks를 방지함.
   - PassPort 미들웨어를 이용하여 쿠키와 세션을 설계함.

#

2. 블로그 게시물 작성 및 뷰어

   - Markdown 형식으로 게시물을 작성하고 보기 위해서 toast ui 라이브러리를 활용하여 개발함.

#

3. Next.js

   - 검색엔진 최적화 (SEO) 가능 & 초기 로딩 속도 개선을 위해 서버사이드렌더링 방식으로 바꿔줌.
   - 다이나믹 라우팅을 이용하여 상세 게시물 페이지 구현
   - 해당 해시태그를 포함하고 있는 게시물 구현
   - 초기 게시물 목록을 미리 렌더링하여 바로 게시물 목록을 볼 수 있게 해줌.

#

4. Redux & Redux-saga

   - 리덕스를 이용하여 상태관리를 했고, 비동기적 기능과 효율적인 데이터 패칭을 위해 리덕스 사가를 이용함.

#

5. 인피니티 스크롤링
   - 인피니티 스크롤링을 통해 블로그 게시물을 볼 때 스크롤을 통해 데이터를 불러올 수 있게 해줌.

#

---

## 💻  실행화면

### 메인화면

![Duck-Blog](https://user-images.githubusercontent.com/72850354/177379081-282b1971-a34f-4ef4-b3e4-caa9a7c2819a.png)

### 로그인화면

![login](https://user-images.githubusercontent.com/72850354/177379694-ad31b92b-b686-447d-a2f1-764b2509ce06.png)

### 회원가입

![register](https://user-images.githubusercontent.com/72850354/177379759-cb69ee5a-85ec-4382-a512-fdac4455b229.png)

### 프로젝트 화면

![project](https://user-images.githubusercontent.com/72850354/177379584-bc2e513e-016f-4931-aa1f-ffc64e5c2819.png)

### 블로그 메인화면

![blog_main](https://user-images.githubusercontent.com/72850354/177379853-0f11c387-b1d8-4dda-8f3c-89cb5251a19b.png)

## 블로그 상세페이지

![blog page](https://user-images.githubusercontent.com/72850354/177379921-fd568bab-dc33-41f7-a1c9-900f0fa5c620.png)

### 블로그 글쓰기(toast ui)

![localhost_3000_login](https://user-images.githubusercontent.com/72850354/177380178-6dc7319d-5e94-4a88-90f3-5d266db7df19.png)

### 해시태그 기능 화면

(태그 클릭시 해시태그 포함 글 출력)
![blog hashtag](https://user-images.githubusercontent.com/72850354/177380326-90d6e42a-6297-426c-af9f-035e7a203746.png)

### Contact 화면

![intro](https://user-images.githubusercontent.com/72850354/177380400-b9cab1dc-7319-4fb7-bfff-0c73a53c6171.png)
