# GOAL.md

## Current Cycle

Cycle 2


---

# Goal

Exhibition Finder의 Home 화면 UI를 구현한다.

Cycle 1에서 만든 Landing Page 구조를 유지하고,
사용자가 실제 전시 앱처럼 느낄 수 있는 메인 화면을 제작한다.


---

# Success Criteria

- Home Page Component 생성
- Header 영역 구현
- 앱 이름 표시
- 사용자 환영 문구 표시
- 지역 선택 UI 구현
- 무료 / 유료 선택 UI 구현
- 인기 전시 카드 UI 구현
- 모바일 화면 기준 레이아웃 적용
- Component 단위로 분리


---

# Components

생성할 Component:

src/components/

- Header.jsx
- LocationSelector.jsx
- PriceFilter.jsx
- ExhibitionPreviewCard.jsx


src/pages/

- Home.jsx


---

# UI Requirements

디자인은 DESIGN.md 규칙을 따른다.

조건:

- 모바일 우선
- 카드 기반 UI
- 둥근 모서리
- 부드러운 그림자
- 충분한 여백
- 깔끔한 전시 앱 스타일


---

# Data

아직 실제 JSON 데이터는 사용하지 않는다.

전시 카드는 Mock Data를 Component 내부 또는 별도 임시 데이터로 생성한다.


---

# Constraints

반드시 준수:

- React + Vite 유지
- JavaScript 사용
- Tailwind CSS 사용
- 기존 기능 삭제 금지
- 불필요한 라이브러리 추가 금지
- 서버 코드 작성 금지
- 기존 docs 문서 규칙 준수


---

# Testing

작업 완료 후:

- npm run dev 실행 확인
- 화면 오류 확인
- 모바일 크기 확인


---

# Deliverables

완료 후 아래 내용을 출력한다.

1. 변경한 파일 목록
2. 구현한 기능 설명
3. 실행 방법
4. 테스트 결과
5. 다음 Cycle 추천