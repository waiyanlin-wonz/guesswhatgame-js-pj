const arrQuesHard = {
  hard1: [
    {
      id: 1,
      question: " What word is spelled incorrectly in every single dictionary?",
      answer: "Incorrectly",
    },
    {
      id: 2,
      question: "What goes up and down but can't move?",
      answer: "Staircase",
    },
    {
      id: 3,
      question: " What goes up but never down?",
      answer: "Age",
    },
    {
      id: 4,
      question: "It has one head, one foot, and four legs. What is it?",
      answer: "Bed",
    },
    {
      id: 5,
      question: "If I drink, I die. If I eat, I’m fine. What am I?",
      answer: "Fire",
    },
  ],
  hard2: [
    {
      id: 1,
      question:
        "When Jane was 50 years old, her daughter Vic was half her age. If Jane is 60 years old today, how old is Vic??",
      answer: "35",
    },
    {
      id: 2,
      question:
        "There are 3 positive numbers. You can either add these numbers or multiply them together, getting the same result. Which are the numbers?",
      answer: "1,2,3",
    },
    {
      id: 3,
      question: "Write down the next number in the pattern: 2, 3, 5, 8, 13…?",

      answer: "21",
    },
    {
      id: 4,
      question: "How can you get 23 using only the number 2?",
      answer: "22+2:2=23",
    },
    {
      id: 5,
      question: "What can we call a polygon with 3 sides and 3 vertices?",
      answer: "Triangle",
    },
  ],
  hard3: [
    {
      id: 1,
      question: "Who drew Mona Lisa?",
      answer: "Leonnardo daVinci",
    },
    {
      id: 2,
      question: "Who is the author of the 'Harry Potter'?",
      answer: "J.K Rowling",
    },
    {
      id: 3,
      question: "Who is the author of 'Wuthering Heights'?",
      answer: " Emily Brontë",
    },
    {
      id: 4,
      question: "Who was the first person to step foot on the moon ?",
      answer: "Neil Armstrong",
    },
    {
      id: 5,
      question: "What is the largest mammals on earth",
      answer: "Blue Whale",
    },
  ],
  hard4: [
    {
      id: 1,
      question:
        "The Taj Mahal in India was built by a Mughal Emperor to honor his late____ ?",
      answer: "Wife",
    },
    {
      id: 2,
      question: "Which metal was the statue of Zeus at Olympia made out of?",
      hint: "Its symbol is Au",
      answer: "Gold",
    },
    {
      id: 3,
      question: "What is called the first wonder of the world?",
      answer: "The Pyramids of Egypt",
    },
    {
      id: 4,
      question: "What is the smallest country in the world?",
      answer: "Vatican City",
    },
    {
      id: 5,
      question: "What is the largest country in the world?",
      answer: "Russia",
    },
  ],
  hard5: [
    {
      id: 1,
      question: "Where is Grand Canyon located in?",
      answer: "South western states of America",
    },
    {
      id: 2,
      question: "Where the Great Barrier Reef is located?",
      answer: "Australia's north-eastern coast",
    },
    {
      id: 3,
      question:
        "What is the name of the glowing sheets and waves that appear in the skies of the Northern Hemisphere?",
      hint: "Au**ra Bo**al**",
      answer: "Aurora Borealis",
    },
    {
      id: 4,
      question: "What two countries in Africa share the Victoria Falls?",
      hint: "Zimbabwe and Zam**",
      answer: "Zimbabwe and Zambia",
    },
    {
      id: 5,
      question: "The chemical element uranium was named after what planet?",
      answer: "Uranus",
    },
  ],
};
//hard question 1
const hardOnePlay = document.querySelector("#hardOnePlay");
const hardOneQues = document.querySelector("#hardOneQues");
const hardOneHint = document.querySelector("#hardOneHint");
const hardOneAnswer = document.querySelector("#hardOneAnswer");
const hardOneNoti = document.querySelector("#hardOneNoti");
const hardOneScore = document.querySelector("#hardOneScore");
const hardOneCorrectAnswer = document.querySelector("#hardOneCorrectAnswer");
const hardOneCheck = document.querySelector("#hardOneCheck");
const hardOnePlayAgin = document.querySelector("#hardOnePlayAgin");
const hardOneStartAgin = document.querySelector("#hardOneStartAgin");
const hardModalOne = document.querySelector("#hardModalOne");
const speechToTexthard = document.querySelector("#speechToTexthard");
const openhardTwo = document.querySelector("#openhardTwo");
const unloackModalhardTwo = document.querySelector("#unloackModalhardTwo");

openhardTwo.addEventListener("click", () => {
  unloackModalhardTwo.classList.add("d-none");
});

// let score = 5;
const insertAnswerhard = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesHard.hard1[randomNum].hint);
  hardOneQues.textContent = arrQuesHard.hard1[randomNum].question;
  hardOneHint.textContent = arrQuesHard.hard1[randomNum].hint;
  hardOneCorrectAnswer.textContent = arrQuesHard.hard1[randomNum].answer;
  score = 5;
  hardOneScore.textContent = score;
  hardOneCheck.disabled = false;
  hardOnePlay.classList.add("d-none");
};

hardOnePlay.addEventListener("click", insertAnswerhard);

const checkingAnswerhardOne = () => {
  if (hardOneAnswer.value.trim()) {
    if (
      hardOneAnswer.value.toUpperCase().trim() ===
      hardOneCorrectAnswer.textContent.toUpperCase()
    ) {
      hardOneNoti.textContent = "Correct";
      hardOneCorrectAnswer.classList.remove("d-none");
      hardOnePlayAgin.classList.remove("d-none");
      hardOneCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openhardTwo.disabled = false;
    } else {
      if (score > 1) {
        hardOneNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        hardOneScore.textContent = score;
      } else {
        hardOneScore.textContent = 0;
        hardOneNoti.textContent = "You Lost";
        hardModalOne.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

hardOneCheck.addEventListener("click", (e) => {
  checkingAnswerhardOne();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerhardOne();
  }
});

const toPlayhardOneAgain = () => {
  score = 5;
  hardOneScore.textContent = score;
  hardModalOne.classList.add("d-none");
  hardOneQues.textContent = null;
  hardOneHint.textContent = null;
  hardOneNoti.textContent = "Start Guessing";
  hardOneCorrectAnswer.textContent = null;
  hardOneCorrectAnswer.classList.add("d-none");
  hardOneAnswer.value = null;
  hardOneCheck.disabled = true;
  hardOnePlay.classList.remove("d-none");
};
hardOnePlayAgin.addEventListener("click", toPlayhardOneAgain);
hardOneStartAgin.addEventListener("click", toPlayhardOneAgain);

const listenhardOne = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexthard.classList.add("active");
    speechToTexthard.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only"></span>
        </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexthard.classList.remove("active");
    speechToTexthard.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    hardOneAnswer.value = transcript;
  });
};

speechToTexthard.addEventListener("click", listenhardOne);

//hard question 2
const hardTwoPlay = document.querySelector("#hardTwoPlay");
const hardTwoQues = document.querySelector("#hardTwoQues");
const hardTwoHint = document.querySelector("#hardTwoHint");
const hardTwoAnswer = document.querySelector("#hardTwoAnswer");
const hardTwoNoti = document.querySelector("#hardTwoNoti");
const hardTwoScore = document.querySelector("#hardTwoScore");
const hardTwoCorrectAnswer = document.querySelector("#hardTwoCorrectAnswer");
const hardTwoCheck = document.querySelector("#hardTwoCheck");
const hardTwoPlayAgin = document.querySelector("#hardTwoPlayAgin");
const hardTwoStartAgin = document.querySelector("#hardTwoStartAgin");
const hardModalTwo = document.querySelector("#hardModalTwo");
const speechToTexthardTwo = document.querySelector("#speechToTexthardTwo");
const openhardThree = document.querySelector("#openhardThree");
const unloackModalhardThree = document.querySelector("#unloackModalhardThree");

openhardThree.addEventListener("click", () => {
  unloackModalhardThree.classList.add("d-none");
});

// let score = 5;
const insertAnswerhardTwo = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesHard.hard2[randomNum].hint);
  hardTwoQues.textContent = arrQuesHard.hard2[randomNum].question;
  hardTwoHint.textContent = arrQuesHard.hard2[randomNum].hint;
  hardTwoCorrectAnswer.textContent = arrQuesHard.hard2[randomNum].answer;
  score = 5;
  hardTwoScore.textContent = score;
  hardTwoCheck.disabled = false;
  hardTwoPlay.classList.add("d-none");
};

hardTwoPlay.addEventListener("click", insertAnswerhardTwo);

const checkingAnswerhardTwo = () => {
  if (hardTwoAnswer.value.trim()) {
    if (
      hardTwoAnswer.value.toUpperCase().trim() ===
      hardTwoCorrectAnswer.textContent.toUpperCase()
    ) {
      hardTwoNoti.textContent = "Correct";
      hardTwoCorrectAnswer.classList.remove("d-none");
      hardTwoPlayAgin.classList.remove("d-none");
      hardTwoCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openhardThree.disabled = false;
    } else {
      if (score > 1) {
        hardTwoNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        hardTwoScore.textContent = score;
      } else {
        hardTwoScore.textContent = 0;
        hardTwoNoti.textContent = "You Lost";
        hardModalTwo.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

hardTwoCheck.addEventListener("click", (e) => {
  checkingAnswerhardTwo();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerhardTwo();
  }
});

const toPlayhardTwoAgain = () => {
  score = 5;
  hardTwoScore.textContent = score;
  hardModalTwo.classList.add("d-none");
  hardTwoQues.textContent = null;
  hardTwoHint.textContent = null;
  hardTwoNoti.textContent = "Start Guessing";
  hardTwoCorrectAnswer.textContent = null;
  hardTwoCorrectAnswer.classList.add("d-none");
  hardTwoAnswer.value = null;
  hardTwoCheck.disabled = true;
  hardTwoPlay.classList.remove("d-none");
};
hardTwoPlayAgin.addEventListener("click", toPlayhardTwoAgain);
hardTwoStartAgin.addEventListener("click", toPlayhardTwoAgain);

const listenhardTwo = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexthardTwo.classList.add("active");
    speechToTexthardTwo.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only"></span>
        </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexthardTwo.classList.remove("active");
    speechToTexthardTwo.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    hardTwoAnswer.value = transcript;
  });
};

speechToTexthardTwo.addEventListener("click", listenhardTwo);

//hard Question three
const hardThreePlay = document.querySelector("#hardThreePlay");
const hardThreeQues = document.querySelector("#hardThreeQues");
const hardThreeHint = document.querySelector("#hardThreeHint");
const hardThreeAnswer = document.querySelector("#hardThreeAnswer");
const hardThreeNoti = document.querySelector("#hardThreeNoti");
const hardThreeScore = document.querySelector("#hardThreeScore");
const hardThreeCorrectAnswer = document.querySelector(
  "#hardThreeCorrectAnswer"
);
const hardThreeCheck = document.querySelector("#hardThreeCheck");
const hardThreePlayAgin = document.querySelector("#hardThreePlayAgin");
const hardThreeStartAgin = document.querySelector("#hardThreeStartAgin");
const hardModalThree = document.querySelector("#hardModalThree");
const speechToTexthardThree = document.querySelector("#speechToTexthardThree");
const openhardFour = document.querySelector("#openhardFour");
const unloackModalhardFour = document.querySelector("#unloackModalhardFour");

openhardFour.addEventListener("click", () => {
  unloackModalhardFour.classList.add("d-none");
});

// let score = 5;
const insertAnswerhardThree = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesHard.hard3[randomNum].hint);
  hardThreeQues.textContent = arrQuesHard.hard3[randomNum].question;
  hardThreeHint.textContent = arrQuesHard.hard3[randomNum].hint;
  hardThreeCorrectAnswer.textContent = arrQuesHard.hard3[randomNum].answer;
  score = 5;
  hardThreeScore.textContent = score;
  hardThreeCheck.disabled = false;
  hardThreePlay.classList.add("d-none");
};

hardThreePlay.addEventListener("click", insertAnswerhardThree);

const checkingAnswerhardThree = () => {
  if (hardThreeAnswer.value.trim()) {
    if (
      hardThreeAnswer.value.toUpperCase().trim() ===
      hardThreeCorrectAnswer.textContent.toUpperCase()
    ) {
      hardThreeNoti.textContent = "Correct";
      hardThreeCorrectAnswer.classList.remove("d-none");
      hardThreePlayAgin.classList.remove("d-none");
      hardThreeCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openhardFour.disabled = false;
    } else {
      if (score > 1) {
        hardThreeNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        hardThreeScore.textContent = score;
      } else {
        hardThreeScore.textContent = 0;
        hardThreeNoti.textContent = "You Lost";
        hardModalThree.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

hardThreeCheck.addEventListener("click", (e) => {
  checkingAnswerhardThree();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerhardThree();
  }
});

const toPlayhardThreeAgain = () => {
  score = 5;
  hardThreeScore.textContent = score;
  hardModalThree.classList.add("d-none");
  hardThreeQues.textContent = null;
  hardThreeHint.textContent = null;
  hardThreeNoti.textContent = "Start Guessing";
  hardThreeCorrectAnswer.textContent = null;
  hardThreeCorrectAnswer.classList.add("d-none");
  hardThreeAnswer.value = null;
  hardThreeCheck.disabled = true;
  hardThreePlay.classList.remove("d-none");
};
hardThreePlayAgin.addEventListener("click", toPlayhardThreeAgain);
hardThreeStartAgin.addEventListener("click", toPlayhardThreeAgain);

const listenhardThree = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexthardThree.classList.add("active");
    speechToTexthardThree.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only"></span>
        </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexthardThree.classList.remove("active");
    speechToTexthardThree.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    hardThreeAnswer.value = transcript;
  });
};

speechToTexthardThree.addEventListener("click", listenhardThree);

//hard Question Four
const hardFourPlay = document.querySelector("#hardFourPlay");
const hardFourQues = document.querySelector("#hardFourQues");
const hardFourHint = document.querySelector("#hardFourHint");
const hardFourAnswer = document.querySelector("#hardFourAnswer");
const hardFourNoti = document.querySelector("#hardFourNoti");
const hardFourScore = document.querySelector("#hardFourScore");
const hardFourCorrectAnswer = document.querySelector("#hardFourCorrectAnswer");
const hardFourCheck = document.querySelector("#hardFourCheck");
const hardFourPlayAgin = document.querySelector("#hardFourPlayAgin");
const hardFourStartAgin = document.querySelector("#hardFourStartAgin");
const hardModalFour = document.querySelector("#hardModalFour");
const speechToTexthardFour = document.querySelector("#speechToTexthardFour");
const openhardFive = document.querySelector("#openhardFive");
const unloackModalhardFive = document.querySelector("#unloackModalhardFive");

openhardFive.addEventListener("click", () => {
  unloackModalhardFive.classList.add("d-none");
});

// let score = 5;
const insertAnswerhardFour = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesHard.hard4[randomNum].hint);
  hardFourQues.textContent = arrQuesHard.hard4[randomNum].question;
  hardFourHint.textContent = arrQuesHard.hard4[randomNum].hint;
  hardFourCorrectAnswer.textContent = arrQuesHard.hard4[randomNum].answer;
  score = 5;
  hardFourScore.textContent = score;
  hardFourCheck.disabled = false;
  hardFourPlay.classList.add("d-none");
};

hardFourPlay.addEventListener("click", insertAnswerhardFour);

const checkingAnswerhardFour = () => {
  if (hardFourAnswer.value.trim()) {
    if (
      hardFourAnswer.value.toUpperCase().trim() ===
      hardFourCorrectAnswer.textContent.toUpperCase()
    ) {
      hardFourNoti.textContent = "Correct";
      hardFourCorrectAnswer.classList.remove("d-none");
      hardFourPlayAgin.classList.remove("d-none");
      hardFourCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openhardFive.disabled = false;
    } else {
      if (score > 1) {
        hardFourNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        hardFourScore.textContent = score;
      } else {
        hardFourScore.textContent = 0;
        hardFourNoti.textContent = "You Lost";
        hardModalFour.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

hardFourCheck.addEventListener("click", (e) => {
  checkingAnswerhardFour();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerhardFour();
  }
});

const toPlayhardFourAgain = () => {
  score = 5;
  hardFourScore.textContent = score;
  hardModalFour.classList.add("d-none");
  hardFourQues.textContent = null;
  hardFourHint.textContent = null;
  hardFourNoti.textContent = "Start Guessing";
  hardFourCorrectAnswer.textContent = null;
  hardFourCorrectAnswer.classList.add("d-none");
  hardFourAnswer.value = null;
  hardFourCheck.disabled = true;
  hardFourPlay.classList.remove("d-none");
};
hardFourPlayAgin.addEventListener("click", toPlayhardFourAgain);
hardFourStartAgin.addEventListener("click", toPlayhardFourAgain);

const listenhardFour = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexthardFour.classList.add("active");
    speechToTexthardFour.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only"></span>
        </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexthardFour.classList.remove("active");
    speechToTexthardFour.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    hardFourAnswer.value = transcript;
  });
};

speechToTexthardFour.addEventListener("click", listenhardFour);

//hard Question Five
const hardFivePlay = document.querySelector("#hardFivePlay");
const hardFiveQues = document.querySelector("#hardFiveQues");
const hardFiveHint = document.querySelector("#hardFiveHint");
const hardFiveAnswer = document.querySelector("#hardFiveAnswer");
const hardFiveNoti = document.querySelector("#hardFiveNoti");
const hardFiveScore = document.querySelector("#hardFiveScore");
const hardFiveCorrectAnswer = document.querySelector("#hardFiveCorrectAnswer");
const hardFiveCheck = document.querySelector("#hardFiveCheck");
const hardFivePlayAgin = document.querySelector("#hardFivePlayAgin");
const hardFiveStartAgin = document.querySelector("#hardFiveStartAgin");
const hardModalFive = document.querySelector("#hardModalFive");
const speechToTexthardFive = document.querySelector("#speechToTexthardFive");
const finalModal = document.querySelector("#finalModal");


const insertAnswerhardFive = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQuesHard.hard5[randomNum].hint);
  hardFiveQues.textContent = arrQuesHard.hard5[randomNum].question;
  hardFiveHint.textContent = arrQuesHard.hard5[randomNum].hint;
  hardFiveCorrectAnswer.textContent = arrQuesHard.hard5[randomNum].answer;
  score = 5;
  hardFiveScore.textContent = score;
  hardFiveCheck.disabled = false;
  hardFivePlay.classList.add("d-none");
};

hardFivePlay.addEventListener("click", insertAnswerhardFive);

const checkingAnswerhardFive = () => {
  if (hardFiveAnswer.value.trim()) {
    if (
      hardFiveAnswer.value.toUpperCase().trim() ===
      hardFiveCorrectAnswer.textContent.toUpperCase()
    ) {
      hardFiveNoti.textContent = "Correct";
      hardFiveCorrectAnswer.classList.remove("d-none");
      hardFivePlayAgin.classList.remove("d-none");
      hardFiveCheck.disabled = true;
      audioWin.play();
      finalModal.classList.remove("d-none");
    } else {
      if (score > 1) {
        hardFiveNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        hardFiveScore.textContent = score;
      } else {
        hardFiveScore.textContent = 0;
        hardFiveNoti.textContent = "You Lost";
        hardModalFive.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

hardFiveCheck.addEventListener("click", (e) => {
  checkingAnswerhardFive();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerhardFive();
  }
});

const toPlayhardFiveAgain = () => {
  score = 5;
  hardFiveScore.textContent = score;
  hardModalFive.classList.add("d-none");
  hardFiveQues.textContent = null;
  hardFiveHint.textContent = null;
  hardFiveNoti.textContent = "Start Guessing : ";
  hardFiveCorrectAnswer.textContent = null;
  hardFiveCorrectAnswer.classList.add("d-none");
  hardFiveAnswer.value = null;
  hardFiveCheck.disabled = true;
  hardFivePlay.classList.remove("d-none");
};
hardFivePlayAgin.addEventListener("click", toPlayhardFiveAgain);
hardFiveStartAgin.addEventListener("click", toPlayhardFiveAgain);

const listenhardFive = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexthardFive.classList.add("active");
    speechToTexthardFive.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only"></span>
        </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexthardFive.classList.remove("active");
    speechToTexthardFive.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    hardFiveAnswer.value = transcript;
  });
};

speechToTexthardFive.addEventListener("click", listenhardFive);

const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", () => {
  finalModal.classList.add("d-none");
});

finalModal.addEventListener("click", () => {
  finalModal.classList.add("d-none");
});
