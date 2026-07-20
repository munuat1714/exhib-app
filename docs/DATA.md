# DATA.md

## 데이터 저장 방식

초기 버전은 JSON 파일을 사용한다.

```text
src/data/exhibitions.json
```

---

## 데이터 구조

```json
{
  "id": 1,
  "title": "모네 특별전",
  "city": "서울",
  "museum": "예술의전당",
  "priceType": "유료",
  "price": 20000,
  "startDate": "2026-01-01",
  "endDate": "2026-03-31",
  "image": "/images/monet.jpg",
  "description": "인상주의 거장 모네의 대표 작품을 소개하는 특별전",
  "category": "회화",
  "favorite": false
}
```

---

## 필수 필드

* id
* title
* city
* museum
* priceType
* price
* startDate
* endDate
* image
* description
* category

---

## 샘플 데이터

초기 버전에서는 20개의 샘플 전시 데이터를 생성한다.

지역

* 서울
* 부산
* 인천
* 대구
* 대전

가격

* 무료
* 유료

---

## 향후 확장

추후 API 연동 시에도 동일한 데이터 구조를 최대한 유지한다.

---

## 데이터 관리 원칙

* id는 중복되지 않는다.
* 날짜는 ISO 형식을 사용한다.
* 이미지는 상대 경로를 사용한다.
* 가격이 무료인 경우 price는 0으로 저장한다.
