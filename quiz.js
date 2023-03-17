const Questions = [
  {
    id: 0,
    q: "What is capital of India?",
    a: [
      { text: "surat", isCorrect: false },
      { text: "vadodara", isCorrect: false },
      { text: "gandhinagar", isCorrect: true },
      { text: "rajkot", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is the capital of Thailand?",
    a: [
      { text: "Lampang", isSelected: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "what is the capital of maharashtra",
    a: [
      { text: "delhi", isCorrect: false },
      { text: "Mumbai", isCorrect: false },
      { text: "gujrat", isCorrect: true },
      { text: "rajkot", isCorrect: false },
    ],
  },
];

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");

//fetch the div that displays the Question
const Question = document.getElementById("qdiv");
Question.innerHTML = Questions.id[1].q;

//set options in buttons
op1.innerHTML = Questions[id].a[0].text;
op2.innerHTML = Questions[id].a[1].text;
op3.innerHTML = Questions[id].a[2].text;
op4.innerHTML = Questions[id].a[3].text;

// Providing the true or false value to the options
//op1.value = Questions[id].a[0].isCorrect;

//function for option clickconst result = document.getElementsByClassName("result");
const submit = document.getElementsByClassName("submit");
