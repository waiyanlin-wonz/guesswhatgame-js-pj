const arrQuesMedium = {
  medium1: [
    {
      id: 1,
      question: "The President of US in 2023?",
      hint: "Starts with J ",
      answer: "Joe Biden",
    },
    {
      id: 2,
      question: "The President of China in 2023 ?",
      hint: "started with Xi ",
      answer: "Xi Jinping",
    },
    {
      id: 3,
      question: "The President of South Korea in 2023 ?",
      hint: "Starts with Yoon ",
      answer: "Yoon Suk Yeol",
    },
    {
      id: 4,
      question: "The President of Japan in 2023 ?",
      hint: "started with Fumio ",
      answer: "Fumio Kishida",
    },
    {
      id: 5,
      question: "The President of UK in 2023 ?",
      hint: "started with Rishi ",
      answer: "Rishi Sunak",
    },
  ],
  medium2: [
    {
      id: 1,
      question: "Who invented electric bulb?",
      hint: "started with T ",
      answer: "Thomas Alva Edison",
    },
    {
      id: 2,
      question: "Who invented? Airplane",
      hint: "started with W",
      answer: "Wright Brothers",
    },
    {
      id: 3,
      question: "Who invented Telephone ?",
      hint: "Starts with A",
      answer: "Alexander Graham Bell",
    },
    {
      id: 4,
      question: "Who invented Exam ?",
      hint: "Starts with H",
      answer: "Henry Fischel",
    },
    {
      id: 5,
      question: "Who invented Computer ?",
      hint: "started with C",
      answer: "Charles Babbage",
    },
  ],
  medium3: [
    {
      id: 1,
      question: "Which country is famous for Pizza?",
      hint: "It is situated in Europe",
      answer: "Italy",
    },
    {
      id: 2,
      question: "Which country is famous for Wine?",
      hint: "It was called Gaul during Roman ",
      answer: "France",
    },
    {
      id: 3,
      question: "Which country is famous for chesses and chocolate?",
      hint: "It has a fantastic place for winter sports and starts with S",
      answer: "Switzerland",
    },
    {
      id: 4,
      question: "South Korea is famous for ?",
      hint: "It's related with vocal,dance and rap",
      answer: "KPop",
    },
    {
      id: 5,
      question: "Which country is famous for bread?",
      hint: "Starts with G",
      answer: "Germany",
    },
  ],
  medium4: [
    {
      id: 1,
      question: "In what country Justin Bieber was born ?",
      hint: "Famous for Maple",
      answer: "Canada",
    },
    {
      id: 2,
      question: "In what country Adolf Hitler was born?",
      hint: "Famous for castles, palaces and buildings, among other architectural works ",
      answer: "Austria",
    },
    {
      id: 3,
      question: "In what country Issac Newton was born?",
      hint: "Famous for Royal Family ",
      answer: "United Kingdom",
    },
    {
      id: 4,
      question: "In what country Elon Musk was born?",
      hint: "It has three capitals, eleven official languages, 21 National Parks and ten UNESCO World Heritage Sites.",
      answer: "South Africa",
    },
    {
      id: 5,
      question: "In what country Vasco da Gama was born?",
      hint: "Famous for Fado Music and Cristiano Ronaldo's birthplace",
      answer: "Portugal",
    },
  ],
  medium5: [
    {
      id: 1,
      question: "How many members are there in KPop Group,SEVENTEEN ?",
      hint: "Many assume that number is unlucky",
      answer: "13",
    },
    {
      id: 2,
      question: "Which crew is the winner of Street Men Fighter?",
      hint: "Just J**k",
      answer: "Just Jerk",
    },
    {
      id: 3,
      question: "The pre debut title track of Stray Kids is",
      hint: "ellevator to Hell",
      answer: "Hellevator",
    },
    {
      id: 4,
      question: "ZEROBASEONE is From which Entertainment?",
      hint: "Starts with W",
      answer: "WakeOne",
    },
    {
      id: 5,
      question: "Kim HongJoong is which group's leader?",
      hint: "Starts with A and ends with Z",
      answer: "Ateez",
    },
  ],
};
//medium question 1
const mediumOnePlay = document.querySelector("#mediumOnePlay");
const mediumOneQues = document.querySelector("#mediumOneQues");
const mediumOneHint = document.querySelector("#mediumOneHint");
const mediumOneAnswer = document.querySelector("#mediumOneAnswer");
const mediumOneNoti = document.querySelector("#mediumOneNoti");
const mediumOneScore = document.querySelector("#mediumOneScore");
const mediumOneCorrectAnswer = document.querySelector(
  "#mediumOneCorrectAnswer"
);
const mediumOneCheck = document.querySelector("#mediumOneCheck");
const mediumOnePlayAgin = document.querySelector("#mediumOnePlayAgin");
const mediumOneStartAgin = document.querySelector("#mediumOneStartAgin");
const mediumModalOne = document.querySelector("#mediumModalOne");
const speechToTextmedium = document.querySelector("#speechToTextmedium");
const openmediumTwo = document.querySelector("#openmediumTwo");
const unloackModalmediumTwo = document.querySelector("#unloackModalmediumTwo");

openmediumTwo.addEventListener("click", () => {
  unloackModalmediumTwo.classList.add("d-none");
});

// let score = 5;
const insertAnswermedium = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesMedium.medium1[randomNum].hint);
  mediumOneQues.textContent = arrQuesMedium.medium1[randomNum].question;
  mediumOneHint.textContent = arrQuesMedium.medium1[randomNum].hint;
  mediumOneCorrectAnswer.textContent = arrQuesMedium.medium1[randomNum].answer;
  score = 5;
  mediumOneScore.textContent = score;
  mediumOneCheck.disabled = false;
  mediumOnePlay.classList.add("d-none");
};

mediumOnePlay.addEventListener("click", insertAnswermedium);

const checkingAnswermediumOne = () => {
  if (mediumOneAnswer.value.trim()) {
    if (
      mediumOneAnswer.value.toUpperCase().trim() ===
      mediumOneCorrectAnswer.textContent.toUpperCase()
    ) {
      mediumOneNoti.textContent = "Correct";
      mediumOneCorrectAnswer.classList.remove("d-none");
      mediumOnePlayAgin.classList.remove("d-none");
      mediumOneCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openmediumTwo.disabled = false;
    } else {
      if (score > 1) {
        mediumOneNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        mediumOneScore.textContent = score;
      } else {
        mediumOneScore.textContent = 0;
        mediumOneNoti.textContent = "You Lost";
        mediumModalOne.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

mediumOneCheck.addEventListener("click", (e) => {
  checkingAnswermediumOne();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswermediumOne();
  }
});

const toPlaymediumOneAgain = () => {
  score = 5;
  mediumOneScore.textContent = score;
  mediumModalOne.classList.add("d-none");
  mediumOneQues.textContent = null;
  mediumOneHint.textContent = null;
  mediumOneNoti.textContent = "Start Guessing";
  mediumOneCorrectAnswer.textContent = null;
  mediumOneCorrectAnswer.classList.add("d-none");
  mediumOneAnswer.value = null;
  mediumOneCheck.disabled = true;
  mediumOnePlay.classList.remove("d-none");
};
mediumOnePlayAgin.addEventListener("click", toPlaymediumOneAgain);
mediumOneStartAgin.addEventListener("click", toPlaymediumOneAgain);

const listenmediumOne = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTextmedium.classList.add("active");
    speechToTextmedium.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only"></span>
      </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTextmedium.classList.remove("active");
    speechToTextmedium.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    mediumOneAnswer.value = transcript;
  });
};

speechToTextmedium.addEventListener("click", listenmediumOne);

//medium question 2
const mediumTwoPlay = document.querySelector("#mediumTwoPlay");
const mediumTwoQues = document.querySelector("#mediumTwoQues");
const mediumTwoHint = document.querySelector("#mediumTwoHint");
const mediumTwoAnswer = document.querySelector("#mediumTwoAnswer");
const mediumTwoNoti = document.querySelector("#mediumTwoNoti");
const mediumTwoScore = document.querySelector("#mediumTwoScore");
const mediumTwoCorrectAnswer = document.querySelector( "#mediumTwoCorrectAnswer");
const mediumTwoCheck = document.querySelector("#mediumTwoCheck");
const mediumTwoPlayAgin = document.querySelector("#mediumTwoPlayAgin");
const mediumTwoStartAgin = document.querySelector("#mediumTwoStartAgin");
const mediumModalTwo = document.querySelector("#mediumModalTwo");
const speechToTextmediumTwo = document.querySelector("#speechToTextmediumTwo");
const openmediumThree = document.querySelector("#openmediumThree");
const unloackModalmediumThree = document.querySelector("#unloackModalmediumThree");

openmediumThree.addEventListener("click", () => {
  unloackModalmediumThree.classList.add("d-none");
});

// let score = 5;
const insertAnswermediumTwo = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesMedium.medium2[randomNum].hint);
  mediumTwoQues.textContent = arrQuesMedium.medium2[randomNum].question;
  mediumTwoHint.textContent = arrQuesMedium.medium2[randomNum].hint;
  mediumTwoCorrectAnswer.textContent = arrQuesMedium.medium2[randomNum].answer;
  score = 5;
  mediumTwoScore.textContent = score;
  mediumTwoCheck.disabled = false;
  mediumTwoPlay.classList.add("d-none");
};

mediumTwoPlay.addEventListener("click", insertAnswermediumTwo);

const checkingAnswermediumTwo = () => {
  if (mediumTwoAnswer.value.trim()) {
    if (
      mediumTwoAnswer.value.toUpperCase().trim() ===
      mediumTwoCorrectAnswer.textContent.toUpperCase()
    ) {
      mediumTwoNoti.textContent = "Correct";
      mediumTwoCorrectAnswer.classList.remove("d-none");
      mediumTwoPlayAgin.classList.remove("d-none");
      mediumTwoCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openmediumThree.disabled = false;
    } else {
      if (score > 1) {
        mediumTwoNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        mediumTwoScore.textContent = score;
      } else {
        mediumTwoScore.textContent = 0;
        mediumTwoNoti.textContent = "You Lost";
        mediumModalTwo.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

mediumTwoCheck.addEventListener("click", (e) => {
  checkingAnswermediumTwo();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswermediumTwo();
  }
});

const toPlaymediumTwoAgain = () => {
  score = 5;
  mediumTwoScore.textContent = score;
  mediumModalTwo.classList.add("d-none");
  mediumTwoQues.textContent = null;
  mediumTwoHint.textContent = null;
  mediumTwoNoti.textContent = "Start Guessing";
  mediumTwoCorrectAnswer.textContent = null;
  mediumTwoCorrectAnswer.classList.add("d-none");
  mediumTwoAnswer.value = null;
  mediumTwoCheck.disabled = true;
  mediumTwoPlay.classList.remove("d-none");
};
mediumTwoPlayAgin.addEventListener("click", toPlaymediumTwoAgain);
mediumTwoStartAgin.addEventListener("click", toPlaymediumTwoAgain);

const listenmediumTwo = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTextmediumTwo.classList.add("active");
    speechToTextmediumTwo.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only"></span>
      </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTextmediumTwo.classList.remove("active");
    speechToTextmediumTwo.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    mediumTwoAnswer.value = transcript;
  });
};

speechToTextmediumTwo.addEventListener("click", listenmediumTwo);

//medium Question three
const mediumThreePlay = document.querySelector("#mediumThreePlay");
const mediumThreeQues = document.querySelector("#mediumThreeQues");
const mediumThreeHint = document.querySelector("#mediumThreeHint");
const mediumThreeAnswer = document.querySelector("#mediumThreeAnswer");
const mediumThreeNoti = document.querySelector("#mediumThreeNoti");
const mediumThreeScore = document.querySelector("#mediumThreeScore");
const mediumThreeCorrectAnswer = document.querySelector(
  "#mediumThreeCorrectAnswer"
);
const mediumThreeCheck = document.querySelector("#mediumThreeCheck");
const mediumThreePlayAgin = document.querySelector("#mediumThreePlayAgin");
const mediumThreeStartAgin = document.querySelector("#mediumThreeStartAgin");
const mediumModalThree = document.querySelector("#mediumModalThree");
const speechToTextmediumThree = document.querySelector(
  "#speechToTextmediumThree"
);
const openmediumFour = document.querySelector("#openmediumFour");
const unloackModalmediumFour = document.querySelector(
  "#unloackModalmediumFour"
);

openmediumFour.addEventListener("click", () => {
  unloackModalmediumFour.classList.add("d-none");
});

// let score = 5;
const insertAnswermediumThree = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesMedium.medium3[randomNum].hint);
  mediumThreeQues.textContent = arrQuesMedium.medium3[randomNum].question;
  mediumThreeHint.textContent = arrQuesMedium.medium3[randomNum].hint;
  mediumThreeCorrectAnswer.textContent = arrQuesMedium.medium3[randomNum].answer;
  score = 5;
  mediumThreeScore.textContent = score;
  mediumThreeCheck.disabled = false;
  mediumThreePlay.classList.add("d-none");
};

mediumThreePlay.addEventListener("click", insertAnswermediumThree);

const checkingAnswermediumThree = () => {
  if (mediumThreeAnswer.value.trim()) {
    if (
      mediumThreeAnswer.value.toUpperCase().trim() ===
      mediumThreeCorrectAnswer.textContent.toUpperCase()
    ) {
      mediumThreeNoti.textContent = "Correct";
      mediumThreeCorrectAnswer.classList.remove("d-none");
      mediumThreePlayAgin.classList.remove("d-none");
      mediumThreeCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openmediumFour.disabled = false;
    } else {
      if (score > 1) {
        mediumThreeNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        mediumThreeScore.textContent = score;
      } else {
        mediumThreeScore.textContent = 0;
        mediumThreeNoti.textContent = "You Lost";
        mediumModalThree.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

mediumThreeCheck.addEventListener("click", (e) => {
  checkingAnswermediumThree();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswermediumThree();
  }
});

const toPlaymediumThreeAgain = () => {
  score = 5;
  mediumThreeScore.textContent = score;
  mediumModalThree.classList.add("d-none");
  mediumThreeQues.textContent = null;
  mediumThreeHint.textContent = null;
  mediumThreeNoti.textContent = "Start Guessing";
  mediumThreeCorrectAnswer.textContent = null;
  mediumThreeCorrectAnswer.classList.add("d-none");
  mediumThreeAnswer.value = null;
  mediumThreeCheck.disabled = true;
  mediumThreePlay.classList.remove("d-none");
};
mediumThreePlayAgin.addEventListener("click", toPlaymediumThreeAgain);
mediumThreeStartAgin.addEventListener("click", toPlaymediumThreeAgain);

const listenmediumThree = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTextmediumThree.classList.add("active");
    speechToTextmediumThree.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only"></span>
      </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTextmediumThree.classList.remove("active");
    speechToTextmediumThree.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    mediumThreeAnswer.value = transcript;
  });
};

speechToTextmediumThree.addEventListener("click", listenmediumThree);

//medium Question Four
const mediumFourPlay = document.querySelector("#mediumFourPlay");
const mediumFourQues = document.querySelector("#mediumFourQues");
const mediumFourHint = document.querySelector("#mediumFourHint");
const mediumFourAnswer = document.querySelector("#mediumFourAnswer");
const mediumFourNoti = document.querySelector("#mediumFourNoti");
const mediumFourScore = document.querySelector("#mediumFourScore");
const mediumFourCorrectAnswer = document.querySelector(
  "#mediumFourCorrectAnswer"
);
const mediumFourCheck = document.querySelector("#mediumFourCheck");
const mediumFourPlayAgin = document.querySelector("#mediumFourPlayAgin");
const mediumFourStartAgin = document.querySelector("#mediumFourStartAgin");
const mediumModalFour = document.querySelector("#mediumModalFour");
const speechToTextmediumFour = document.querySelector(
  "#speechToTextmediumFour"
);
const openmediumFive = document.querySelector("#openmediumFive");
const unloackModalmediumFive = document.querySelector(
  "#unloackModalmediumFive"
);

openmediumFive.addEventListener("click", () => {
  unloackModalmediumFive.classList.add("d-none");
});

// let score = 5;
const insertAnswermediumFour = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesMedium.medium4[randomNum].hint);
  mediumFourQues.textContent = arrQuesMedium.medium4[randomNum].question;
  mediumFourHint.textContent = arrQuesMedium.medium4[randomNum].hint;
  mediumFourCorrectAnswer.textContent = arrQuesMedium.medium4[randomNum].answer;
  score = 5;
  mediumFourScore.textContent = score;
  mediumFourCheck.disabled = false;
  mediumFourPlay.classList.add("d-none");
};

mediumFourPlay.addEventListener("click", insertAnswermediumFour);

const checkingAnswermediumFour = () => {
  if (mediumFourAnswer.value.trim()) {
    if (
      mediumFourAnswer.value.toUpperCase().trim() ===
      mediumFourCorrectAnswer.textContent.toUpperCase()
    ) {
      mediumFourNoti.textContent = "Correct";
      mediumFourCorrectAnswer.classList.remove("d-none");
      mediumFourPlayAgin.classList.remove("d-none");
      mediumFourCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openmediumFive.disabled = false;
    } else {
      if (score > 1) {
        mediumFourNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        mediumFourScore.textContent = score;
      } else {
        mediumFourScore.textContent = 0;
        mediumFourNoti.textContent = "You Lost";
        mediumModalFour.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

mediumFourCheck.addEventListener("click", (e) => {
  checkingAnswermediumFour();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswermediumFour();
  }
});

const toPlaymediumFourAgain = () => {
  score = 5;
  mediumFourScore.textContent = score;
  mediumModalFour.classList.add("d-none");
  mediumFourQues.textContent = null;
  mediumFourHint.textContent = null;
  mediumFourNoti.textContent = "Start Guessing";
  mediumFourCorrectAnswer.textContent = null;
  mediumFourCorrectAnswer.classList.add("d-none");
  mediumFourAnswer.value = null;
  mediumFourCheck.disabled = true;
  mediumFourPlay.classList.remove("d-none");
};
mediumFourPlayAgin.addEventListener("click", toPlaymediumFourAgain);
mediumFourStartAgin.addEventListener("click", toPlaymediumFourAgain);

const listenmediumFour = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTextmediumFour.classList.add("active");
    speechToTextmediumFour.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only"></span>
      </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTextmediumFour.classList.remove("active");
    speechToTextmediumFour.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    mediumFourAnswer.value = transcript;
  });
};

speechToTextmediumFour.addEventListener("click", listenmediumFour);

//medium Question Five
const mediumFivePlay = document.querySelector("#mediumFivePlay");
const mediumFiveQues = document.querySelector("#mediumFiveQues");
const mediumFiveHint = document.querySelector("#mediumFiveHint");
const mediumFiveAnswer = document.querySelector("#mediumFiveAnswer");
const mediumFiveNoti = document.querySelector("#mediumFiveNoti");
const mediumFiveScore = document.querySelector("#mediumFiveScore");
const mediumFiveCorrectAnswer = document.querySelector(
  "#mediumFiveCorrectAnswer"
);
const mediumFiveCheck = document.querySelector("#mediumFiveCheck");
const mediumFivePlayAgin = document.querySelector("#mediumFivePlayAgin");
const mediumFiveStartAgin = document.querySelector("#mediumFiveStartAgin");
const mediumModalFive = document.querySelector("#mediumModalFive");
const speechToTextmediumFive = document.querySelector(
  "#speechToTextmediumFive"
);
const unloackModalhardOne = document.querySelector("#unloackModalhardOne");
const openhardOne = document.querySelector("#openhardOne");

openhardOne.addEventListener("click", () => {
  unloackModalhardOne.classList.add("d-none");
});

const toHard = document.querySelector("#toHard");
toHard.addEventListener("click", () => {
  hardBtn.click();
});

// let score = 5;
const insertAnswermediumFive = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesMedium.medium5[randomNum].hint);
  mediumFiveQues.textContent = arrQuesMedium.medium5[randomNum].question;
  mediumFiveHint.textContent = arrQuesMedium.medium5[randomNum].hint;
  mediumFiveCorrectAnswer.textContent = arrQuesMedium.medium5[randomNum].answer;
  score = 5;
  mediumFiveScore.textContent = score;
  mediumFiveCheck.disabled = false;
  mediumFivePlay.classList.add("d-none");
  openhardOne.disabled = false;
};

mediumFivePlay.addEventListener("click", insertAnswermediumFive);

const checkingAnswermediumFive = () => {
  if (mediumFiveAnswer.value.trim()) {
    if (
      mediumFiveAnswer.value.toUpperCase().trim() ===
      mediumFiveCorrectAnswer.textContent.toUpperCase()
    ) {
      mediumFiveNoti.textContent = "Correct";
      mediumFiveCorrectAnswer.classList.remove("d-none");
      mediumFivePlayAgin.classList.remove("d-none");
      mediumFiveCheck.disabled = true;
      audioWin.play();
      showScore(score);
      toHard.classList.remove("d-none");
    } else {
      if (score > 1) {
        mediumFiveNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        mediumFiveScore.textContent = score;
      } else {
        mediumFiveScore.textContent = 0;
        mediumFiveNoti.textContent = "You Lost";
        mediumModalFive.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

mediumFiveCheck.addEventListener("click", (e) => {
  checkingAnswermediumFive();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswermediumFive();
  }
});

const toPlaymediumFiveAgain = () => {
  score = 5;
  mediumFiveScore.textContent = score;
  mediumModalFive.classList.add("d-none");
  mediumFiveQues.textContent = null;
  mediumFiveHint.textContent = null;
  mediumFiveNoti.textContent = "Start Guessing";
  mediumFiveCorrectAnswer.textContent = null;
  mediumFiveCorrectAnswer.classList.add("d-none");
  mediumFiveAnswer.value = null;
  mediumFiveCheck.disabled = true;
  mediumFivePlay.classList.remove("d-none");
};
mediumFivePlayAgin.addEventListener("click", toPlaymediumFiveAgain);
mediumFiveStartAgin.addEventListener("click", toPlaymediumFiveAgain);

const listenmediumFive = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTextmediumFive.classList.add("active");
    speechToTextmediumFive.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only"></span>
      </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTextmediumFive.classList.remove("active");
    speechToTextmediumFive.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    mediumFiveAnswer.value = transcript;
  });
};

speechToTextmediumFive.addEventListener("click", listenmediumFive);
