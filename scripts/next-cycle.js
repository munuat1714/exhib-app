import fs from "fs";

const cyclePath = "./docs/CYCLE.json";
const roadmapPath = "./docs/ROADMAP.md";
const goalPath = "./docs/GOAL.md";


// CYCLE.json 읽기
const cycle = JSON.parse(
  fs.readFileSync(cyclePath, "utf-8")
);


// 다음 Cycle 번호
const nextCycle = cycle.currentCycle + 1;


// ROADMAP 읽기
const roadmap = fs.readFileSync(
  roadmapPath,
  "utf-8"
);


// 다음 Cycle 찾기
const cycleRegex = new RegExp(
  `# Cycle ${nextCycle}[\\s\\S]*?(?=# Cycle \\d+|$)`
);


const match = roadmap.match(cycleRegex);


if (!match) {
  throw new Error(
    `ROADMAP.md에서 Cycle ${nextCycle}을 찾을 수 없습니다.`
  );
}


const cycleContent = match[0].trim();


// GOAL.md 생성
const goalContent = `# GOAL.md


## Current Cycle

Cycle ${nextCycle}


---

${cycleContent}


---

# Execution Rules

- React + Vite 유지
- JavaScript 사용
- 서버 사용 금지
- 기존 기능 삭제 금지
- npm run dev 테스트
- npm run build 테스트


---

# Deliverables

완료 후:

1. 변경 파일 목록
2. 구현 내용
3. 테스트 결과
4. 다음 Cycle 추천
`;


// GOAL 저장
fs.writeFileSync(
  goalPath,
  goalContent
);


// CYCLE 업데이트
cycle.currentCycle = nextCycle;
cycle.status = "working";

cycle.startedAt =
  new Date()
    .toISOString()
    .split("T")[0];

cycle.completedAt = null;


fs.writeFileSync(
  cyclePath,
  JSON.stringify(
    cycle,
    null,
    2
  )
);


console.log(
  `Cycle ${nextCycle} GOAL 생성 완료`
);