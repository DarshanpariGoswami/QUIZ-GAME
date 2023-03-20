var quaction = document.getElementById("user_question").value;
var op1 = document.getElementById("op-1").value;
var op2 = document.getElementById("op-2").value;
var op3 = document.getElementById("op-3").value;
var op4 = document.getElementById("op-4").value;

var option_field_1 = document.getElementsById("op1");
var option_field_2 = document.getElementsById("op2");
var option_field_3 = document.getElementsById("op3");
var option_field_4 = document.getElementsById("op4");
var qop = document.getElementsByClassName("question");
//set values in local storage
function getvalue() {
  var quaction_key = localStorage.setItem(quaction);

  var key1 = localStorage.setItem(op2);

  var key2 = localStorage.setItem(op3);

  var key3 = localStorage.setItem(op3);

  var key4 = localStorage.setItem(op4);
}
function setvalue() {
  //set the value inside elements
  option_field_1.innerHTML = localStorage.getItem("key1");
  option_field_2.innerHTML = localStorage.getItem("key2");
  option_field_3.innerHTML = localStorage.getItem("key3");
  option_field_4.innerHTML = localStorage.getItem("key4");
  qop.innerHTML = localStorage.getItem("quaction_key");
}
window.onload = function () {
  (document.getElementById("usersubmit").onsubmit = getvalue), setvalue;
  if (store) {
    alert = "data is stored";
  } else {
    alert = "data is lost";
  }
};
