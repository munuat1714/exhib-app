# GOAL.md

## Current Cycle

Cycle 3


---

# Goal

전시 정보를 JSON 데이터 기반으로 관리하도록 구조를 변경한다.

현재 Home 화면의 임시 Mock 데이터를 제거하고,
src/data/exhibitions.json 데이터를 React에서 불러와
전시 카드를 동적으로 출력한다.


---

# Success Criteria

- exhibitions.json 생성
- 최소 20개의 전시 Mock 데이터 생성
- ExhibitionCard Component 데이터 연결
- Home 화면에서 JSON 데이터 출력
- 하드코딩된 전시 데이터 제거
- 데이터 구조 문서화


---

# Data Location

생성:

src/data/exhibitions.json


데이터 구조:

{
  id,
  title,
  city,
  museum,
  priceType,
  price,
  startDate,
  endDate,
  image,
  description,
  category
}


---

# Sample Data Requirements

20개 이상의 데이터 생성


지역:

- 서울
- 부산
- 인천
- 대구
- 대전


가격:

- 무료
- 유료


카테고리:

- 회화
- 사진
- 조각
- 미디어아트
- 디자인


---

# Component Requirements

기존 Component 유지

수정 가능:

- ExhibitionPreviewCard.jsx
- Home.jsx


필요하면 생성:

- ExhibitionCard.jsx


---

# UI Requirements

현재 디자인 유지

조건:

- 기존 Card 스타일 유지
- 이미지 영역 유지
- 제목 표시
- 장소 표시
- 가격 표시
- 날짜 표시


---

# Constraints

반드시 준수:

- React + Vite 유지
- JavaScript 사용
- Tailwind CSS 사용
- 서버 사용 금지
- API 사용 금지
- 기존 Cycle 기능 삭제 금지
- 불필요한 라이브러리 추가 금지


---

# Testing

완료 후 확인:

1. npm run dev 실행
2. Home 화면 표시
3. 20개 전시 데이터 정상 출력
4. 콘솔 오류 없음


---

# Deliverables

완료 후 출력:

1. 변경 파일 목록
2. 데이터 구조 설명
3. 구현 내용
4. 테스트 결과
5. 다음 Cycle 추천