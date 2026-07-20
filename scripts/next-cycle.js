import fs from "fs";

const cyclePath = "./docs/CYCLE.json";
const goalPath = "./docs/GOAL.md";

// CYCLE.json 읽기
const cycle = JSON.parse(
  fs.readFileSync(cyclePath, "utf-8")
);

// 다음 Cycle 증가
cycle.currentCycle += 1;
cycle.nextCycle = cycle.currentCycle + 1;
cycle.status = "ready";

// CYCLE 저장
fs.writeFileSync(
  cyclePath,
  JSON.stringify(cycle, null, 2)
);


// GOAL 생성
const goalContent = `# GOAL.md

## Current Cycle

Cycle ${cycle.currentCycle}


---

# Goal

다음 Roadmap Cycle 기능 구현


---

# Success Criteria

- 기능 구현 완료
- 기존 기능 유지
- npm run build 성공
- 콘솔 오류 없음


---

# Constraints

- React + Vite 유지
- JavaScript 사용
- 서버 사용 금지
- 기존 기능 삭제 금지


---

# Deliverables

완료 후:

1. 변경 파일 목록
2. 구현 내용
3. 테스트 결과
4. 다음 Cycle 추천
`;

fs.writeFileSync(
  goalPath,
  goalContent
);

console.log(
  `Cycle ${cycle.currentCycle} GOAL 생성 완료`
);