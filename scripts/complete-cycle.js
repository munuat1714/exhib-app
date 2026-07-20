import fs from "fs";

const cyclePath = "./docs/CYCLE.json";


// CYCLE.json 읽기
const cycle = JSON.parse(
  fs.readFileSync(cyclePath, "utf-8")
);


// 완료 처리
cycle.status = "complete";

cycle.completedAt =
  new Date()
    .toISOString()
    .split("T")[0];


// 저장
fs.writeFileSync(
  cyclePath,
  JSON.stringify(cycle, null, 2)
);


console.log(
  `Cycle ${cycle.currentCycle} 완료`
);