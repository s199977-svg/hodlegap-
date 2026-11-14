const situations = [
  "선생님의 ‘잠깐 남아’: 아무 말도 안 했는데 교무실 가는 30초 동안 최근 한 달 치 행적을 자체 감사함.",
  "시험 한 문제 틀림: 한 문제 틀렸는데 실시간 등급 컷 계산하고 대학 갔다가 취업 걱정하며 돌아옴.",
  "시험 전날의 깨달음: 평소엔 잘 살다가 시험 전날 새벽 1시면 지난 한 달의 삶이 잘못됐음을 깨달음.",
  "친구의 ‘할 말 있어’: 친구가 입 떼기도 전에 머릿속으로 최근 말실수 리플레이하며 사과문 준비함.",
  "단톡방 무반응: 톡 올렸는데 반응 없으면 반에서의 내 사회적 위치부터 성찰함.",
  "수행평가 오타 발견: 제출 후 오타 하나 발견하면 그게 내 전체 학업 역량을 결정지을 것처럼 보임.",
  "조별과제 답장 없음: 답장 10분 늦었을 뿐인데 혼자 PPT 만들고 발표까지 하는 미래가 보임.",
  "친구 둘의 귓속말: 세상에 비밀이 수만 가지인데 내 근처에서 속닥거리면 99% 내 얘기 같음.",
  "급식 같이 안 먹음: 친구가 다른 애랑 밥 먹었을 뿐인데 우리 우정에 위기가 왔는지 돌아봄.",
  "‘이거 누가 했어?’: 분명 내가 범인이 아닌데 선생님이 범인 찾으면 괜히 숨소리까지 죽임.",
  "발표 중에 누가 웃음: 딴짓하다 웃었을 텐데 일단 내 발표 자료에 오타 있나 의심부터 함.",
  "발표 후 질문 없음: 많아도 불안, 없어도 불안! 딱 짜 맞춘 듯 질문 두 개 나와야 마음이 편함.",
  "갑작스러운 상담: 선생님은 그냥 진로 얘기하려는데 나는 이미 부모님 호출까지 생각함.",
  "‘ㅋㅋㅋㅋ’가 ‘ㅇㅇ’이 됨: 글자 딱 두 개 속 자음의 온도 차이에서 손절 징후를 분석함.",
  "카톡 숫자 1: 답장 안 오는 시간보다 왜 안 오는지 추리한 시간이 훨씬 길어짐.",
  "읽씹: 보낸 건 나인데 답장 없으면 내가 보낸 문장을 내가 제일 많이 복기함.",
  "처음 듣는 시험 범위: 친구가 내가 모르는 걸 공부하고 있으면 출제 여부도 모르고 동공부터 흔들림.",
  "‘나 공부 하나도 안 했어’: 매번 속으면서도 이번엔 진짜일 거라는 실낱같은 희망으로 또 믿음.",
  "시험 직후 정답 확인: 이미 제출해서 못 바꾸는데 쉬는 시간 누구보다 빠르게 틀린 문제를 찾아냄.",
  "성적 한 번 떨어짐: 한 번 떨어졌을 뿐인데 공부 방법이 아니라 내 뇌 구조와 지능부터 의심함.",
  "모의고사 등급표: 종이 한 장에 찍힌 숫자 몇 개로 아직 안 온 몇 년 뒤 인생을 미리 살아봄.",
  "친구가 먼저 문제를 풂: 한 문제 먼저 풀었을 뿐인데 걔는 천재가 되고 나는 개념 기초부터 다시 해야 할 것 같음.",
  "수행평가 1점 감점: 받은 99점보다 날아간 1점의 빈자리가 하루 종일 머릿속을 맴돌음.",
  "생활기록부 한 문장: 세특 네 줄 읽으면서 몇 달 뒤 입학사정관의 미간 주름까지 상상함.",
  "희망학과 경쟁률: 지원할지 결정도 안 했는데 작년 경쟁률 보고 혼자 미리 불합격해 봄.",
  "AI가 문제를 너무 잘 품: AI가 3초 만에 문제 푸는 걸 보고 ‘그럼 나는 왜 공부하지?’ 철학자가 됨.",
  "친구가 모르는 AI를 쓰고 있음: 무슨 기능인지도 모르는데 남들이 쓴다는 이유만으로 도태된 기분이 듦.",
  "공부법 영상 시청: 공부하기 싫어서 켠 공부법 영상을 2시간 보고 나면 공부를 많이 한 듯 뿌듯함.",
  "새 문제집 구매: 안 되는 원인을 내 의지에서 찾다가 새 문제집 표지를 보고 해결책을 발견함.",
  "공부 계획 하루 실패: 화요일 계획 못 지켰는데 이상하게 금요일까지 한 세트로 묶어 망한 처리함.",
  "진로를 아직 못 정함: 친구가 꿈을 말하는 순간 나만 아무 생각 없이 살아온 사람처럼 느껴짐.",
  "친구의 대회·프로그램 합격: 진심으로 축하해 주다가 집에 가는 길에 ‘근데 난 뭐 하고 있지?’ 현타가 옴."
];

const totalMatches = situations.length - 1;
const startPanel = document.querySelector("#start-panel");
const gamePanel = document.querySelector("#game-panel");
const winnerPanel = document.querySelector("#winner-panel");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const playAgainButton = document.querySelector("#play-again-button");
const choiceButtons = [
  document.querySelector("#choice-one"),
  document.querySelector("#choice-two")
];
const roundKicker = document.querySelector("#round-kicker");
const roundTitle = document.querySelector("#round-title");
const matchCount = document.querySelector("#match-count");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const gameFootnote = document.querySelector("#game-footnote");

let contestants = [];
let currentMatches = [];
let roundWinners = [];
let currentMatchIndex = 0;
let completedMatches = 0;
let roundNumber = 0;

document.querySelector("#entry-count").textContent = String(situations.length);

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function startGame() {
  contestants = shuffle(situations);
  currentMatches = [];
  roundWinners = [];
  currentMatchIndex = 0;
  completedMatches = 0;
  roundNumber = 0;

  startPanel.hidden = true;
  winnerPanel.hidden = true;
  gamePanel.hidden = false;
  beginRound();
}

function beginRound() {
  roundNumber += 1;
  currentMatches = [];
  roundWinners = [];

  for (let index = 0; index < contestants.length; index += 2) {
    if (index + 1 < contestants.length) {
      currentMatches.push([contestants[index], contestants[index + 1]]);
    } else {
      roundWinners.push(contestants[index]);
    }
  }

  currentMatchIndex = 0;
  showMatch();
}

function showMatch() {
  const [first, second] = currentMatches[currentMatchIndex];
  const roundMatchNumber = currentMatchIndex + 1;

  roundKicker.textContent = `ROUND ${String(roundNumber).padStart(2, "0")}`;
  roundTitle.textContent = roundNumber === 1 ? "첫 번째 비교" : `${contestants.length}강 대결`;
  matchCount.textContent = `${roundMatchNumber} / ${currentMatches.length}`;
  progressTrack.setAttribute("aria-valuenow", String(completedMatches));
  progressFill.style.width = `${(completedMatches / totalMatches) * 100}%`;
  gameFootnote.textContent = "고르면 다음 대결로 넘어가요.";

  choiceButtons[0].querySelector(".choice-text").textContent = first;
  choiceButtons[1].querySelector(".choice-text").textContent = second;
}

function chooseWinner(index) {
  roundWinners.push(currentMatches[currentMatchIndex][index]);
  completedMatches += 1;
  currentMatchIndex += 1;

  if (currentMatchIndex < currentMatches.length) {
    showMatch();
    return;
  }

  contestants = roundWinners;
  if (contestants.length === 1) {
    showWinner(contestants[0]);
    return;
  }

  beginRound();
}

function showWinner(winner) {
  gamePanel.hidden = true;
  winnerPanel.hidden = false;
  document.querySelector("#winner-text").textContent = winner;
  document.querySelector("#winner-title").textContent = "호들값 왕의 탄생!";
  document.querySelector("#progress-track").setAttribute("aria-valuenow", String(totalMatches));
  progressFill.style.width = "100%";
  winnerPanel.focus?.();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
choiceButtons.forEach((button, index) => {
  button.addEventListener("click", () => chooseWinner(index));
});
