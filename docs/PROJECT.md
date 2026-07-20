# PROJECT.md

## 프로젝트명

Exhibition Finder

---

## 프로젝트 소개

Exhibition Finder는 사용자가 원하는 지역의 무료 및 유료 전시 정보를 쉽게 탐색할 수 있는 모바일 우선 웹 애플리케이션이다.

현재 프로젝트는 **프로토타입 제작**을 목표로 하며, 백엔드 서버 없이 React와 JSON 데이터를 이용하여 구현한다.

---

## 목표

* 모바일 앱처럼 동작하는 UI 구현
* 서버 없이 실행 가능한 구조
* GitHub Pages를 통한 무료 배포
* 포트폴리오 수준의 완성도
* 추후 API 및 백엔드 연동이 가능한 구조 유지

---

## 기술 스택

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* LocalStorage
* GitHub Pages

---

## 개발 원칙

1. Component 기반 개발
2. 모바일 우선(Mobile First)
3. 작은 단위의 반복 개발(Ouroboros)
4. 항상 실행 가능한 상태 유지
5. 기능 추가 후 즉시 Git Commit
6. 불필요한 라이브러리 추가 금지
7. 코드 가독성 우선

---

## 폴더 구조

```text
src/
 ├── assets/
 ├── components/
 ├── data/
 ├── hooks/
 ├── pages/
 ├── router/
 ├── styles/
 ├── utils/
 └── App.jsx
```

---

## 완료 목표

사용자는 다음 기능을 사용할 수 있어야 한다.

* 지역 선택
* 무료/유료 필터
* 전시 검색
* 전시 상세 조회
* 즐겨찾기
* 반응형 UI
* GitHub Pages 배포
