# GOAL.md

## Current Cycle

Cycle 4


---

# Goal

사용자가 원하는 지역의 전시만 확인할 수 있도록
지역 필터 기능을 구현한다.

현재 JSON 데이터의 city 값을 기반으로
Home 화면의 전시 목록을 동적으로 필터링한다.


---

# Success Criteria

- 지역 선택 State 구현
- LocationSelector Component 연결
- 선택한 지역 데이터 필터링
- 전체 지역 보기 기능 추가
- 전시 카드 정상 출력
- 기존 UI 유지


---

# Functional Requirements

지역 목록:

- 전체
- 서울
- 부산
- 인천
- 대구
- 대전


동작:

전체 선택
→ 모든 전시 표시


서울 선택
→ city가 서울인 전시만 표시


---

# Component Requirements

수정 가능:

src/components/LocationSelector.jsx

src/pages/Home.jsx

src/components/ExhibitionPreviewCard.jsx


필요하면 생성:

src/hooks/useExhibitions.js


---

# Technical Requirements

사용:

- React useState
- Array.filter()


예:

exhibitions.filter(
 item => item.city === selectedCity
)


---

# Constraints

반드시 준수:

- React + Vite 유지
- JavaScript 사용
- Tailwind CSS 사용
- 서버 사용 금지
- API 사용 금지
- 기존 Cycle 기능 삭제 금지
- JSON 데이터 구조 유지


---

# Testing

확인:

- 전체 선택 시 전체 출력
- 서울 선택 시 서울만 출력
- 부산 선택 시 부산만 출력
- 콘솔 오류 없음


---

# Deliverables

완료 후 출력:

1. 변경 파일 목록
2. 구현 기능 설명
3. 테스트 결과
4. 실행 방법
5. 다음 Cycle 추천