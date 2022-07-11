/* eslint-disable */
import "bootstrap";
import "./style.css";

//lets define our variables let with an array
let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi canario", "Mi gato"];
let what = ["se comió", "aplastó", "robó", "rompió", "ensució"];
let when = [
  "antes de clases.",
  "justo cuando terminé.",
  "mientras almorzaba.",
  "mientras yo rezaba."
];

function excuseGenerator(who, what, when) {
  let numberWho = parseInt(Math.random() * who.length);
  let numberWhat = parseInt(Math.random() * what.length);
  let numberWhen = parseInt(Math.random() * when.length);

  return (
    who[numberWho] +
    " " +
    what[numberWhat] +
    " " +
    "mi tarea " +
    when[numberWhen]
  );
}

window.onload = function() {
  //write your code here
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
};

window.onload = onload;
