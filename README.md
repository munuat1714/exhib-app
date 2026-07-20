# Exhibition Finder

지역과 관람료에 따라 전시를 찾고 저장할 수 있는 모바일 우선 전시 정보 웹 앱 프로토타입입니다.

## 배포 주소

https://exhib-app.vercel.app/

## 주요 기능

- 서울·부산·인천·대구·대전 지역 필터
- 전체·무료·유료 관람료 필터
- 전시 제목 검색 및 복합 필터
- JSON 데이터 기반 전시 목록
- 전시 상세 페이지와 뒤로가기
- LocalStorage 기반 즐겨찾기 및 저장 목록
- 모바일·태블릿·데스크톱 반응형 UI
- 화면·카드·즐겨찾기 인터랙션 애니메이션
- 모션 감소 접근성 설정 지원

## 기술 스택

- React 19
- Vite 8
- JavaScript
- React Router
- CSS
- LocalStorage
- Local JSON

## 시작하기

Node.js가 설치된 환경에서 다음 명령을 실행합니다.

```bash
npm install
npm run dev
```

PowerShell 실행 정책으로 `npm` 명령이 차단되는 경우 다음 명령을 사용합니다.

```powershell
npm.cmd install
npm.cmd run dev
```

Vite가 출력하는 로컬 주소로 접속합니다.

## 빌드

```bash
npm run build
npm run preview
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 프로젝트 구조

```text
src/
├── components/   재사용 UI 컴포넌트
├── data/         전시 JSON 데이터
├── hooks/        LocalStorage 즐겨찾기 로직
├── pages/        Home 및 전시 상세 페이지
├── App.jsx       HashRouter 경로 구성
├── App.css       UI와 반응형 스타일
└── index.css     전역 스타일과 디자인 토큰
```

## 데이터 및 저장 구조

전시 정보는 `src/data/exhibitions.json`에서 관리합니다. 즐겨찾기는 브라우저 LocalStorage의 `exhibition-favorites` 키에 전시 ID 배열로 저장됩니다.

```json
[1, 5, 12]
```

서버나 데이터베이스 없이 브라우저에서 동작합니다.

## 배포

`main` 브랜치에 push된 코드는 Vercel 배포 프로젝트와 연동됩니다. `HashRouter`를 사용해 정적 호스팅에서도 상세 경로와 새로고침이 동작하도록 구성했습니다.
