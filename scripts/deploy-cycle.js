import { execSync } from "child_process";


// Git 명령 실행 함수
function run(command) {
  console.log(`\n> ${command}`);

  execSync(command, {
    stdio: "inherit"
  });
}


try {

  // 변경 파일 추가
  run("git add .");


  // Commit
  run(
    'git commit -m "Complete Ouroboros Cycle"'
  );


  // Push
  run("git push");


  console.log(
    "\nCycle 배포 완료"
  );


} catch (error) {

  console.error(
    "\nGit 배포 중 오류 발생"
  );

  console.error(
    error.message
  );

  process.exit(1);
}
