const quastions = [
  {
    optioncontainer: "What is capital of India?",
    OPT: [
      {
        a: "gandhinagar",
        b: "Surat",
        c: "mumbai",
        d: "panjab",
      },
    ],
    optioncontainer: "What is the capital of Thailand?",
    OPT: [
      {
        a: "Lampang",
        b: "phuket",
        c: "Ayutthaya",
        d: "Bangkok",
      },
    ],

    optioncontainer: "What is the capital of Gujarat",
    OPT: [
      {
        a: "surat",
        b: "vadodara",
        c: "gandhinagar",
        d: "rajkot",
      },
    ],
  },
];

var text = "What is capital of India?";
const op2 = document.GetElementById("op2");
const op3 = document.GetElementById("op3");
const op4 = document.GetElementById("op4");
const select = optioncontainer[0].OPT(0);

const op1 = document.GetElementById("op1");
op1.innerHTML = op1.innerText = Questions[id];
op1.value = Questions[id].a[0].isCorrect;

op1.addEventListener("click", () => {
  op1.style.backgroundColor = "yellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  select = op1.value;
});

const result = document.getElementsByName("result");
result[0].innerText = "";
const submit = document.GetElementById("submit");

submit[0].AddEventListener("click", () => {
  if (select == "true") {
    result[0].innerHTML = "true";
    result[0].style.color = "red";
  } else {
    result.innerHTML = "false";
    result[0].style.color = "red";
  }
});

//const op = document.GetElementById("submit");
