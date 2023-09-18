let quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

let quiz = document.querySelector('#quiz');
let socors = document.querySelector('.socor');

let answerEle = document.querySelectorAll(".answer");
let [questionEle, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    " #question , .option_1, .option_2, .option_3, .option_4"
  );
let submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let socor = 0;

//
let loadQuiz = () => {
  let { question, options } = quizData[currentQuiz];
  // console.log(options);
  questionEle.innerText = `${currentQuiz+1} : ${question}`;
  socors.innerText = `Soccor :${socor}/${quizData.length}`;  
  options.forEach(
    (currOpt, index) => (window[`option_${index + 1}`].innerText = currOpt)
  );
};

loadQuiz();
//  Step 4: Get Selected Answer Function on Button click

let getSelectedOption = () => {
  //   answerEle.forEach((currentOpt, index)=>{
  // if(currentOpt.checked){
  //   ans_index=index;
  // }

  //   })
  // return ans_index;
  let answerElement = Array.from(answerEle);
  return answerElement.findIndex((currentEle) => currentEle.checked);
};

const deselectedAnswer = () => {
  return answerEle.forEach((currentEle) => (currentEle.checked = false));
};

submitBtn.addEventListener("click", () => {
  let selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

if(selectedOptionIndex===quizData[currentQuiz].correct)
{
  socor=socor+1;
}
  
  currentQuiz++;

  

  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  }
  else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${socor}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
  }
});
