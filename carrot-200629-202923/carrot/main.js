// TODO:
// 1. 시간이 10초 미만으로 남으면 텍스트 빨간색으로 바꾸기
// 2. 벌레, 당근 랜덤 배치
//

// 카운트다운 할 시간을 담은 변수(1분)
let count = 60;

// 당근 수
// 0이 되어야 게임 성공
let carrot_count = 10;

// 벌레 수
// 수가 줄어들면 게임 실패
let bug_count = 10;

// *************************************** //
// 랜덤 숫자 생성 함수
// *************************************** //
const randomNum = (lower, upper) => {
  //   for (let i = 0; i < 10; i++) {
  let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  //   console.log(myRandom);
  return myRandom;
  //   }
};

// *************************************** //
// 객체 랜덤 위치 배치 함수
// *************************************** //
const obj_create = () => {
  console.group("random_placing");
  const main = document.querySelector("main");

  const docHeight = window.innerWidth,
    docWidth = window.outerWidth;
  console.log("docHeight: ", docHeight);
  console.log("docWidth: ", docWidth);

  id = 0;
  for (let i = 0; i < bug_count; i++) {
    // Math.random()
    const random_top = randomNum(docHeight / 2 - 500, docHeight / 2 - 200);
    const random_left = randomNum(0, docWidth - 200);

    //   벌레 생성
    const bug = document.createElement("div");
    const bug_img = document.createElement("img");
    bug_img.setAttribute("src", "img/bug.png");
    bug_img.setAttribute("alt", "bug");
    bug_img.setAttribute("class", "bug");
    bug_img.setAttribute("id", "bug_" + id);

    const divWidth = bug.clientWidth,
      divHeight = bug.clientHeight,
      heightMax = docHeight - divHeight,
      widthMax = docWidth - divWidth;

    // bug_img.style.top = Math.floor(Math.random() * heightMax) + 500 + "px";
    // bug_img.style.left = Math.floor(Math.random() * widthMax) + "px";
    bug_img.style.top = random_top + "px";
    bug_img.style.left = random_left + "px";

    bug.appendChild(bug_img);
    main.appendChild(bug);

    // 당근 생성
    const carrot = document.createElement("div");
    const carrot_img = document.createElement("img");
    carrot_img.setAttribute("src", "img/carrot.png");
    carrot_img.setAttribute("alt", "carrot");
    carrot_img.setAttribute("id", "carrot_" + id);
    carrot_img.setAttribute("class", "carrot");

    // const random_top2 = randomNum(docHeight / 2, docHeight / 2 - 300);
    const random_top2 = randomNum(docHeight / 2 - 500, docHeight / 2 - 200);
    const random_left2 = randomNum(0, docWidth - 200);

    carrot_img.style.top = random_top2 + "px";
    carrot_img.style.left = random_left2 + "px";

    carrot.appendChild(carrot_img);
    main.appendChild(carrot);

    id++;
  }

  console.groupEnd();
};

// *************************************** //
// timer 시행 함수
// *************************************** //
const timer = () => {
  count--;

  if (count <= 0) {
    // 타이머 종료
    clearInterval(counter);

    // TODO: 끝났다는 문구 & 결과 &리플레이버튼 띄우기
  } else {
    // 남은 시간 계산
    let left_time = Math.floor(count / 60) + ":" + (count % 60);
    console.log("left_time: ", left_time);

    const timer_text = document.querySelector(".timer > span");
    timer_text.innerText = left_time;
  }
};

const start_btn = document.querySelector(".play");

start_btn.addEventListener("click", (event) => {
  const counter = setInterval(timer, 1000);
});

window.onload = () => {
  obj_create();
};
