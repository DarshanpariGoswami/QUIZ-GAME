var quaction = document.getElementById("user_question").value;
var password = document.getElementById("password").value;
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
function getvalue() {
  var key_question = localStorage.setItem(question);
  var key_password = localStorage.setItem(password);

  //set the value inside elements
  var keyquestion = localStorage.getItem("key_question");
  var key1 = localStorage.getItem("key_password");

  op1.innerHTML = "keyquestion";
  op2.innerHTML = "key2";
}
const submit = document.getElementById("usersubmit");
submit.addEventListener("click", getvalue());
