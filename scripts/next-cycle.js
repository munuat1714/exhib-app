import fs from "fs";

const cyclePath = "./docs/CYCLE.json";
const roadmapPath = "./docs/ROADMAP.md";
const goalPath = "./docs/GOAL.md";


// 1. 현재 Cycle 읽기
const cycleData = JSON.parse(
  fs.readFileSync(cyclePath, "utf-8")
);


const nextCycle = cycleData.currentCycle + 1;


// 2. ROADMAP 읽기
const roadmap = fs.readFileSync(
  roadmapPath,
  "utf-8"
);


// 3. 다음 Cycle 영역 찾기
const cycleRegex = new RegExp(
  `# Cycle ${nextCycle}([\\s\\S]*?)(?=# Cycle \\d+|$)`
);


const match = roadmap.match(cycleRegex);


if (!match) {
  console.error(
    `Cycle ${nextCycle} 내용을 ROADMAP에서 찾을 수 없습니다.`
  );
  process.exit(1);
}


const cycleContent = match[0];


// 4. GOAL.md 생성
const goalContent = `# GOAL.md


## Current Cycle

Cycle ${nextCycle}


---

${cycleContent}


---

# Execution Rules

- 기존 기능 유지
- React + Vite 유지
- npm run dev 테스트
- npm run build 테스트
- Git Commit 진행

`;


fs.writeFileSync(
  goalPath,
  goalContent
);


// 5. CYCLE 업데이트
cycleData.currentCycle = nextCycle;
cycleData.status = "ready";


fs.writeFileSync(
  cyclePath,
  JSON.stringify(cycleData, null, 2)
);


console.log(
  `Cycle ${nextCycle} GOAL 생성 완료`
);