# ROADMAP.md

## Ouroboros 개발 로드맵

---

# Cycle 1

## Goal

프로젝트 기본 구조 구축 및 실행 환경 완성

## Tasks

* React + Vite 프로젝트 구성
* 기본 Landing Page 구현
* 프로젝트 폴더 구조 정리
* 실행 확인
* Git Commit

---

# Cycle 2

## Goal

전시 앱 기본 Home UI 구현

## Tasks

* Header 구현
* Hero 영역 구현
* Navigation 구성
* 모바일 기본 레이아웃 적용
* Git Commit

---

# Cycle 3

## Goal

Mock 데이터를 기반으로 전시 목록 출력 구조 구현

## Tasks

* exhibitions.json 생성
* 전시 데이터 구조 정의
* Exhibition Card Component 구현
* JSON 데이터 연결
* 전시 목록 출력

---

# Cycle 4

## Goal

지역 기반 전시 필터 기능 구현

## Tasks

* 지역 선택 UI 구현
* React State 연결
* city 데이터 기반 필터링
* 전체 지역 보기 기능 추가

---

# Cycle 5

## Goal

무료 / 유료 전시 가격 필터 기능 구현

## Tasks

* 가격 필터 UI 구현
* 무료 선택 기능
* 유료 선택 기능
* priceType 데이터 필터링
* 지역 필터 기능 유지

---

# Cycle 6

## Goal

전시 검색 기능 구현

## Tasks

* 검색 Input 구현
* 전시 제목 검색
* 검색 결과 표시
* 기존 필터 기능 유지

---

# Cycle 7

## Goal

전시 상세 페이지 구현

## Tasks

* 상세 페이지 Routing
* 전시 상세 정보 표시
* 이미지 영역 추가
* 뒤로가기 기능 구현

---

# Cycle 8

## Goal

즐겨찾기 기능 구현

## Tasks

* 즐겨찾기 버튼 추가
* LocalStorage 저장
* 즐겨찾기 목록 표시
* 데이터 유지 확인

---

# Cycle 9

## Goal

서비스 완성도를 위한 UI 개선

## Tasks

* 애니메이션 적용
* 반응형 UI 개선
* 모바일 UX 개선
* 디자인 통일

---

# Cycle 10

## Goal

최종 배포 및 프로토타입 공개

## Tasks

* 배포 환경 확인
* GitHub 저장소 정리
* 최종 Build 테스트
* 외부 공유 링크 확인

---

# Ouroboros Cycle Rules

각 Cycle은 아래 순서를 따른다.

1. next-cycle 실행
2. GOAL.md 자동 생성
3. Codex 실행
4. 코드 구현
5. npm run dev 테스트
6. npm run build 테스트
7. 오류 수정
8. Git Commit
9. GitHub Push
10. 다음 Cycle 진행

---

# Development Constraints

모든 Cycle은 아래 조건을 유지한다.

* React + Vite 유지
* JavaScript 사용
* 서버 코드 작성 금지
* API 연결은 별도 Cycle에서 진행
* 기존 기능 삭제 금지
* Component 기반 구조 유지
* 모바일 우선 개발

---

# Cycle Completion Criteria

각 Cycle 종료 시 반드시 만족한다.

* npm run dev 정상 실행
* npm run build 성공
* 콘솔 오류 없음
* 기존 기능 정상 유지
* Git Commit 완료
* GitHub Push 완료
* Vercel 배포 정상 확인
