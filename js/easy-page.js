

/// moving level
const easyBtn = document.querySelector("#easyBtn");
const easy = document.querySelector("#easy");
const easyHeader=document.querySelector("#easyHeader");

const mediumBtn = document.querySelector("#mediumBtn");
const medium = document.querySelector("#medium");

const hardBtn = document.querySelector("#hardBtn");
const hard = document.querySelector("#hard");

easyBtn.addEventListener("click", () => {
  easy.classList.remove("d-none");
  medium.classList.add("d-none");
  hard.classList.add("d-none");
  scrollTo(0, easyHeader.getBoundingClientRect().y);
});

mediumBtn.addEventListener("click", () => {
  medium.classList.remove("d-none");
  easy.classList.add("d-none");
  hard.classList.add("d-none");
  scrollTo(0, medium.getBoundingClientRect().y);
});

hardBtn.addEventListener("click", () => {
  hard.classList.remove("d-none");
  easy.classList.add("d-none");
  medium.classList.add("d-none");
  scrollTo(0, hard.getBoundingClientRect().y);
});

// logout button
const logOut = document.querySelector("#logOut");
logOut.addEventListener("click", () => {
  location.href = "index.html";
});

//intro
const toast = new bootstrap.Toast(".toast");
toast.show();
const intoName = document.querySelector("#intoName");
const storage = JSON.parse(localStorage.getItem("Guesswhat-js-page"));
intoName.textContent = storage.name + ", ";


//audio
const audioWin = document.querySelector("#audioWin");
const audioLose = document.querySelector("#audioLose");
const audioTotalLose = document.querySelector("#audioTotalLose")

//count
const count=document.querySelector(".count");
const arrShowScore=[0];
const showScore=(s)=>{
  arrShowScore.push(s);
  const result=arrShowScore.reduce((p,v)=> p+v,0);
  // [...count].map(c=> c.textContent=result) [if i use querSelectorAll]
  count.textContent=result;
}

///easy question 1
const arrQues={
  "easy1": [
      {
          "id": 1,
          "question": "Mark Zuckerberg founded ----?",
          "hint": "started with f",
          "answer": "facebook"
      },
      {
          "id": 2,
          "question": "X's current CEO is   ----?",
          "hint": "started with E",
          "answer": "Elon Musk"
      },
      {
          "id": 3,
          "question": "Microsoft was founded by ----?",
          "hint": "started with B",
          "answer": "Bill Gates"
      },
      {
          "id": 4,
          "question": "The name of the Telegram's founder is ----?",
          "hint": "started with N",
          "answer": "Nilolai Durov"
      },
      {
          "id": 5,
          "question": "The current CEO name of the Apple is ----?",
          "hint": "started with T",
          "answer": "Tim Cook"
      }
  ],
  "easy2": [
      {
          "id": 1,
          "question":"The Capital Of The China is  ----?",
          "hint": "started with B",
          "answer": "Beijing"
      },
      {
          "id": 2,
          "question": "The Capital Of The Laos is   ----?",
          "hint": "started with V",
          "answer": "Vientiane"
      },
      {
          "id": 3,
          "question": "The Capital Of The France is ----?",
          "hint": "That City has Eiffel Tower",
          "answer": "Paris"
      },
      {
          "id": 4,
          "question": "The Capital Of The United States is ----?",
          "hint": "The White House is Situated in that City",
          "answer": "Washington,D.C"
      },
      {
          "id": 5,
          "question": "The Capital of the India is ----?",
          "hint": "started with N",
          "answer": "New Dalhi"
      }
  ],
  "easy3": [
      {
          "id": 1,
          "question":"The Long Term of RAM is  ----?",
          "hint": "Temporary memory bank",
          "answer": "Random Access Memory"
      },
      {
          "id": 2,
          "question": "The Long Term Of ROM is   ----?",
          "hint": "It's a thing that permantely stores data on PC.",
          "answer": "Read-Only Memory"
      },
      {
          "id": 3,
          "question": "The Long Term Of USB is ----?",
          "hint": "The system for connecting equipment to a computer.",
          "answer": "Universal Serial Bus"
      },
      {
          "id": 4,
          "question": "UI stands for----?",
          "hint": "For Web Page Visual",
          "answer": "User Interface"
      },
      {
          "id": 5,
          "question": "UX stands for----?",
          "hint": "Having a deep understanding of user ",
          "answer": "User Experiance"
      }
  ],
  "easy4": [
      {
          "id": 1,
          "question":"EERNG?",
          "hint": "Kind of Color",
          "answer": "Green"
      },
      {
          "id": 2,
          "question": "brliaryr?",
          "hint": "There have a lot of books ",
          "answer": "Library"
      },
      {
          "id": 3,
          "question": "cepnil?",
          "hint": "kind of stationery.",
          "answer": "pencil"
      },
      {
          "id": 4,
          "question": "galnegau?",
          "hint": "Use for speaking",
          "answer": "Language"
      },
      {
          "id": 5,
          "question": "colachteo?",
          "hint": "something that mostly give and take on February 14",
          "answer": "Chocolate"
      }
  ],
  "easy5": [
      {
          "id": 1,
          "question":"Currency used in Thailand?",
          "hint": "Starts with B",
          "answer": "Bath"
      },
      {
          "id": 2,
          "question": "Currrency used in Malaysia?",
          "hint": "Starts with R ",
          "answer": "Ringgit"
      },
      {
          "id": 3,
          "question": "Currency used in Japan",
          "hint": "Starts with Y",
          "answer": "Yen"
      },
      {
          "id": 4,
          "question": "Currency used in Vietnam?",
          "hint": "Starts with D",
          "answer": "Dong"
      },
      {
          "id": 5,
          "question": "Currency used in Korea?",
          "hint": "Starts with W",
          "answer": "Won"
      }
  ]   
}
const easyOnePlay = document.querySelector("#easyOnePlay");
const easyOneQues = document.querySelector("#easyOneQues");
const easyOneHint = document.querySelector("#easyOneHint");
const easyOneAnswer = document.querySelector("#easyOneAnswer");
const easyOneNoti = document.querySelector("#easyOneNoti");
const easyOneScore = document.querySelector("#easyOneScore");
const easyOneCorrectAnswer = document.querySelector("#easyOneCorrectAnswer");
const easyOneCheck = document.querySelector("#easyOneCheck");
const easyOnePlayAgin = document.querySelector("#easyOnePlayAgin");
const easyOneStartAgin = document.querySelector("#easyOneStartAgin");
const easyModalOne = document.querySelector("#easyModalOne");
const speechToText = document.querySelector("#speechToText");
const openeasyTwo=document.querySelector("#openeasyTwo");
const unloackModaleasyTwo=document.querySelector("#unloackModaleasyTwo")


openeasyTwo.addEventListener("click",()=>{
  unloackModaleasyTwo.classList.add("d-none")
})

let score = 5;
const insertAnswer = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQues.easy1[randomNum].hint);
  easyOneQues.textContent = arrQues.easy1[randomNum].question;
  easyOneHint.textContent = arrQues.easy1[randomNum].hint;
  easyOneCorrectAnswer.textContent = arrQues.easy1[randomNum].answer;
  easyOneScore.textContent = score;
  easyOneCheck.disabled = false;
  easyOnePlay.classList.add("d-none");
};

easyOnePlay.addEventListener("click", insertAnswer);

const checkingAnswerOne = () => {
  if (easyOneAnswer.value.trim()) {
    if (
      easyOneAnswer.value.toUpperCase().trim() ===
      easyOneCorrectAnswer.textContent.toUpperCase()
    ) {
      easyOneNoti.textContent = "Correct";
      easyOneCorrectAnswer.classList.remove("d-none");
      easyOnePlayAgin.classList.remove("d-none");
      easyOneCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openeasyTwo.disabled=false;
    } else {
      
      if (score > 1) {
        easyOneNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        easyOneScore.textContent = score;
        audioLose.play();
      } else {
        easyOneScore.textContent = 0;
        easyOneNoti.textContent = "You Lost";
        easyModalOne.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

easyOneCheck.addEventListener("click", (e) => {
  checkingAnswerOne();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerOne();
  }
});


const toPlayeasyOneAgain = () => {
  score = 5;
  easyOneScore.textContent = score;
  easyModalOne.classList.add("d-none");
  easyOneQues.textContent = null;
  easyOneHint.textContent = null;
  easyOneNoti.textContent = "Start Guessing";
  easyOneCorrectAnswer.textContent = null;
  easyOneCorrectAnswer.classList.add("d-none");
  easyOneAnswer.value = null;
  easyOneCheck.disabled = true;
  easyOnePlay.classList.remove("d-none")
};
easyOnePlayAgin.addEventListener("click", toPlayeasyOneAgain);
easyOneStartAgin.addEventListener("click", toPlayeasyOneAgain);


const listen = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToText.classList.add("active");
    speechToText.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="sr-only"></span>
    </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToText.classList.remove("active");
    speechToText.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    easyOneAnswer.value = transcript;
  });
};

speechToText.addEventListener("click", listen);



//easy question 2
const easyTwoPlay = document.querySelector("#easyTwoPlay");
const easyTwoQues = document.querySelector("#easyTwoQues");
const easyTwoHint = document.querySelector("#easyTwoHint");
const easyTwoAnswer = document.querySelector("#easyTwoAnswer");
const easyTwoNoti = document.querySelector("#easyTwoNoti");
const easyTwoScore = document.querySelector("#easyTwoScore");
const easyTwoCorrectAnswer = document.querySelector("#easyTwoCorrectAnswer");
const easyTwoCheck = document.querySelector("#easyTwoCheck");
const easyTwoPlayAgin = document.querySelector("#easyTwoPlayAgin");
const easyTwoStartAgin = document.querySelector("#easyTwoStartAgin");
const easyModalTwo = document.querySelector("#easyModalTwo");
const speechToTexteasyTwo = document.querySelector("#speechToTexteasyTwo");
const openeasyThree=document.querySelector("#openeasyThree");
const unloackModaleasyThree=document.querySelector("#unloackModaleasyThree")

openeasyThree.addEventListener("click",()=>{
  unloackModaleasyThree.classList.add("d-none")
})


const insertAnswereasyTwo = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQues.easy2[randomNum].hint);
  easyTwoQues.textContent = arrQues.easy2[randomNum].question;
  easyTwoHint.textContent = arrQues.easy2[randomNum].hint;
  easyTwoCorrectAnswer.textContent = arrQues.easy2[randomNum].answer;
  score = 5;
  easyTwoScore.textContent = score;
  easyTwoCheck.disabled = false;
  easyTwoPlay.classList.add("d-none");
};

easyTwoPlay.addEventListener("click", insertAnswereasyTwo);

const checkingAnswerTwo = () => {
  if (easyTwoAnswer.value.trim()) {
    if (
      easyTwoAnswer.value.toUpperCase().trim() ===
      easyTwoCorrectAnswer.textContent.toUpperCase()
    ) {
      easyTwoNoti.textContent = "Correct";
      easyTwoCorrectAnswer.classList.remove("d-none");
      easyTwoPlayAgin.classList.remove("d-none");
      easyTwoCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openeasyThree.disabled=false;
    } else {
      
      if (score > 1) {
        easyTwoNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        easyTwoScore.textContent = score;
      } else {
        easyTwoScore.textContent = 0;
        easyTwoNoti.textContent = "You Lost";
        easyModalTwo.classList.remove("d-none");
        audioTotalLose.play();
        
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

easyTwoCheck.addEventListener("click", (e) => {
  checkingAnswerTwo();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerTwo();
  }
});


const toPlayeasyTwoAgain = () => {
  score = 5;
  easyTwoScore.textContent = score;
  easyModalTwo.classList.add("d-none");
  easyTwoQues.textContent = null;
  easyTwoHint.textContent = null;
  easyTwoNoti.textContent = "Start Guessing";
  easyTwoCorrectAnswer.textContent = null;
  easyTwoCorrectAnswer.classList.add("d-none");
  easyTwoAnswer.value = null;
  easyTwoCheck.disabled = true;
  easyTwoPlay.classList.remove("d-none")
};
easyTwoPlayAgin.addEventListener("click", toPlayeasyTwoAgain);
easyTwoStartAgin.addEventListener("click", toPlayeasyTwoAgain);



const listeneasyTwo = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexteasyTwo.classList.add("active");
    speechToTexteasyTwo.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="sr-only"></span>
    </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexteasyTwo.classList.remove("active");
    speechToTexteasyTwo.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    easyTwoAnswer.value = transcript;
  });
};

speechToTexteasyTwo.addEventListener("click",listeneasyTwo);

//easy Question three
const easyThreePlay = document.querySelector("#easyThreePlay");
const easyThreeQues = document.querySelector("#easyThreeQues");
const easyThreeHint = document.querySelector("#easyThreeHint");
const easyThreeAnswer = document.querySelector("#easyThreeAnswer");
const easyThreeNoti = document.querySelector("#easyThreeNoti");
const easyThreeScore = document.querySelector("#easyThreeScore");
const easyThreeCorrectAnswer = document.querySelector("#easyThreeCorrectAnswer");
const easyThreeCheck = document.querySelector("#easyThreeCheck");
const easyThreePlayAgin = document.querySelector("#easyThreePlayAgin");
const easyThreeStartAgin = document.querySelector("#easyThreeStartAgin");
const easyModalThree = document.querySelector("#easyModalThree");
const speechToTexteasyThree = document.querySelector("#speechToTexteasyThree");
const openeasyFour=document.querySelector("#openeasyFour");
const unloackModaleasyFour=document.querySelector("#unloackModaleasyFour")

openeasyFour.addEventListener("click",()=>{
  unloackModaleasyFour.classList.add("d-none")
})



// let score = 5;
const insertAnswereasyThree = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQues.easy3[randomNum].hint);
  easyThreeQues.textContent = arrQues.easy3[randomNum].question;
  easyThreeHint.textContent = arrQues.easy3[randomNum].hint;
  easyThreeCorrectAnswer.textContent = arrQues.easy3[randomNum].answer;
  score = 5;
  easyThreeScore.textContent = score;
  easyThreeCheck.disabled = false;
  easyThreePlay.classList.add("d-none");
};

easyThreePlay.addEventListener("click", insertAnswereasyThree);

const checkingAnswerThree = () => {
  if (easyThreeAnswer.value.trim()) {
    if (
      easyThreeAnswer.value.toUpperCase().trim() ===
      easyThreeCorrectAnswer.textContent.toUpperCase()
    ) {
      easyThreeNoti.textContent = "Correct";
      easyThreeCorrectAnswer.classList.remove("d-none");
      easyThreePlayAgin.classList.remove("d-none");
      easyThreeCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openeasyFour.disabled=false;
    } else {
      
      if (score > 1) {
        easyThreeNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        easyThreeScore.textContent = score;
      } else {
        easyThreeScore.textContent = 0;
        easyThreeNoti.textContent = "You Lost";
        easyModalThree.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

easyThreeCheck.addEventListener("click", (e) => {
  checkingAnswerThree();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerThree();
  }
});


const toPlayeasyThreeAgain = () => {
  score = 5;
  easyThreeScore.textContent = score;
  easyModalThree.classList.add("d-none");
  easyThreeQues.textContent = null;
  easyThreeHint.textContent = null;
  easyThreeNoti.textContent = "Start Guessing";
  easyThreeCorrectAnswer.textContent = null;
  easyThreeCorrectAnswer.classList.add("d-none");
  easyThreeAnswer.value = null;
  easyThreeCheck.disabled = true;
  easyThreePlay.classList.remove("d-none")
};
easyThreePlayAgin.addEventListener("click", toPlayeasyThreeAgain);
easyThreeStartAgin.addEventListener("click", toPlayeasyThreeAgain);

const listeneasyThree = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexteasyThree.classList.add("active");
    speechToTexteasyThree.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="sr-only"></span>
    </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexteasyThree.classList.remove("active");
    speechToTexteasyThree.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    easyThreeAnswer.value = transcript;
  });
};

speechToTexteasyThree.addEventListener("click",listeneasyThree);


//easy Question Four
const easyFourPlay = document.querySelector("#easyFourPlay");
const easyFourQues = document.querySelector("#easyFourQues");
const easyFourHint = document.querySelector("#easyFourHint");
const easyFourAnswer = document.querySelector("#easyFourAnswer");
const easyFourNoti = document.querySelector("#easyFourNoti");
const easyFourScore = document.querySelector("#easyFourScore");
const easyFourCorrectAnswer = document.querySelector("#easyFourCorrectAnswer");
const easyFourCheck = document.querySelector("#easyFourCheck");
const easyFourPlayAgin = document.querySelector("#easyFourPlayAgin");
const easyFourStartAgin = document.querySelector("#easyFourStartAgin");
const easyModalFour = document.querySelector("#easyModalFour");
const speechToTexteasyFour = document.querySelector("#speechToTexteasyFour");
const openeasyFive=document.querySelector("#openeasyFive");
const unloackModaleasyFive=document.querySelector("#unloackModaleasyFive")

openeasyFive.addEventListener("click",()=>{
  unloackModaleasyFive.classList.add("d-none")
})


// let score = 5;
const insertAnswereasyFour = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQues.easy4[randomNum].hint);
  easyFourQues.textContent = arrQues.easy4[randomNum].question;
  easyFourHint.textContent = arrQues.easy4[randomNum].hint;
  easyFourCorrectAnswer.textContent = arrQues.easy4[randomNum].answer;
  score = 5;
  easyFourScore.textContent = score;
  easyFourCheck.disabled = false;
  easyFourPlay.classList.add("d-none");
};

easyFourPlay.addEventListener("click", insertAnswereasyFour);

const checkingAnswerFour = () => {
  if (easyFourAnswer.value.trim()) {
    if (
      easyFourAnswer.value.toUpperCase().trim() ===
      easyFourCorrectAnswer.textContent.toUpperCase()
    ) {
      easyFourNoti.textContent = "Correct";
      easyFourCorrectAnswer.classList.remove("d-none");
      easyFourPlayAgin.classList.remove("d-none");
      easyFourCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openeasyFive.disabled=false;

    } else {
      
      if (score > 1) {
        easyFourNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        easyFourScore.textContent = score;
      } else {
        easyFourScore.textContent = 0;
        easyFourNoti.textContent = "You Lost";
        easyModalFour.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

easyFourCheck.addEventListener("click", (e) => {
  checkingAnswerFour();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerFour();
  }
});


const toPlayeasyFourAgain = () => {
  score = 5;
  easyFourScore.textContent = score;
  easyModalFour.classList.add("d-none");
  easyFourQues.textContent = null;
  easyFourHint.textContent = null;
  easyFourNoti.textContent = "Start Guessing";
  easyFourCorrectAnswer.textContent = null;
  easyFourCorrectAnswer.classList.add("d-none");
  easyFourAnswer.value = null;
  easyFourCheck.disabled = true;
  easyFourPlay.classList.remove("d-none")
};
easyFourPlayAgin.addEventListener("click", toPlayeasyFourAgain);
easyFourStartAgin.addEventListener("click", toPlayeasyFourAgain);

const listeneasyFour = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexteasyFour.classList.add("active");
    speechToTexteasyFour.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="sr-only"></span>
    </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexteasyFour.classList.remove("active");
    speechToTexteasyFour.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    easyFourAnswer.value = transcript;
  });
};

speechToTexteasyFour.addEventListener("click",listeneasyFour);

//easy Question Five
const easyFivePlay = document.querySelector("#easyFivePlay");
const easyFiveQues = document.querySelector("#easyFiveQues");
const easyFiveHint = document.querySelector("#easyFiveHint");
const easyFiveAnswer = document.querySelector("#easyFiveAnswer");
const easyFiveNoti = document.querySelector("#easyFiveNoti");
const easyFiveScore = document.querySelector("#easyFiveScore");
const easyFiveCorrectAnswer = document.querySelector("#easyFiveCorrectAnswer");
const easyFiveCheck = document.querySelector("#easyFiveCheck");
const easyFivePlayAgin = document.querySelector("#easyFivePlayAgin");
const easyFiveStartAgin = document.querySelector("#easyFiveStartAgin");
const easyModalFive = document.querySelector("#easyModalFive");
const speechToTexteasyFive = document.querySelector("#speechToTexteasyFive");
const unloackModalmediumOne=document.querySelector("#unloackModalmediumOne");
const openmediumOne=document.querySelector("#openmediumOne")

openmediumOne.addEventListener("click",()=>{
  unloackModalmediumOne.classList.add("d-none")
})

const toMedium=document.querySelector("#toMedium");
toMedium.addEventListener("click",()=>{
  mediumBtn.click();
})

// let score = 5;
const insertAnswereasyFive = () => {
  let randomNum = Math.trunc(Math.random() * 5);
  console.log(arrQues.easy5[randomNum].hint);
  easyFiveQues.textContent = arrQues.easy5[randomNum].question;
  easyFiveHint.textContent = arrQues.easy5[randomNum].hint;
  easyFiveCorrectAnswer.textContent = arrQues.easy5[randomNum].answer;
  score = 5;
  easyFiveScore.textContent = score;
  easyFiveCheck.disabled = false;
  easyFivePlay.classList.add("d-none");
};

easyFivePlay.addEventListener("click", insertAnswereasyFive);

const checkingAnswerFive = () => {
  if (easyFiveAnswer.value.trim()) {
    if (
      easyFiveAnswer.value.toUpperCase().trim() ===
      easyFiveCorrectAnswer.textContent.toUpperCase()
    ) {
      easyFiveNoti.textContent = "Correct";
      easyFiveCorrectAnswer.classList.remove("d-none");
      easyFivePlayAgin.classList.remove("d-none");
      easyFiveCheck.disabled = true;
      audioWin.play();
      showScore(score);
      openmediumOne.disabled=false;
      toMedium.classList.remove("d-none")

    } else {
      
      if (score > 1) {
        easyFiveNoti.textContent = "Wrong!,Try Again";
        score--;
        audioLose.play();
        easyFiveScore.textContent = score;
      } else {
        easyFiveScore.textContent = 0;
        easyFiveNoti.textContent = "You Lost";
        easyModalFive.classList.remove("d-none");
        audioTotalLose.play();
      }
    }
  } else {
    alert("You haven't answer yet");
  }
};

easyFiveCheck.addEventListener("click", (e) => {
  checkingAnswerFive();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkingAnswerFive();
  }
});


const toPlayeasyFiveAgain = () => {
  score = 5;
  easyFiveScore.textContent = score;
  easyModalFive.classList.add("d-none");
  easyFiveQues.textContent = null;
  easyFiveHint.textContent = null;
  easyFiveNoti.textContent = "Start Guessing";
  easyFiveCorrectAnswer.textContent = null;
  easyFiveCorrectAnswer.classList.add("d-none");
  easyFiveAnswer.value = null;
  easyFiveCheck.disabled = true;
  easyFivePlay.classList.remove("d-none")
};
easyFivePlayAgin.addEventListener("click", toPlayeasyFiveAgain);
easyFiveStartAgin.addEventListener("click", toPlayeasyFiveAgain);

const listeneasyFive = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToTexteasyFive.classList.add("active");
    speechToTexteasyFive.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="sr-only"></span>
    </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToTexteasyFive.classList.remove("active");
    speechToTexteasyFive.innerHTML = `<i class="bi bi-mic">`;
  });

  recognition.addEventListener("result", (event) => {
    console.log(event.results);
    const transcript = event.results[0][0].transcript;
    easyFiveAnswer.value = transcript;
  });
};

speechToTexteasyFive.addEventListener("click",listeneasyFive);