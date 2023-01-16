function move() {
  let elem = document.getElementById("greenBar");
  let stepValue = 0;
  let id = setInterval(frame, 500);
  function frame() {
    if (stepValue >= 100) {
      clearInterval(id);

    } else {
      elem.style.width = (stepValue + 10) + "%";
      elem.innerHTML = (stepValue + 10) + "%";
      stepValue = (stepValue + 10);
    }
  }
}
function verif() {
  var fname = document.form.fname.value;
  var sujet = document.form.sujet.value;
  var emailAddress = document.form.emailAddress.value;
  var subject = document.form.subject.value;
  if (fname == "") {
    alert('Ajouter votre Nom et Prénom!');
    document.form.fname.focus();
  }
  if (sujet == "") {
    alert('Ajouter votre Sujet !\n');
    document.form.sujet.focus();
  }
  if (emailAddress == "") {
    alert('Ajouter votre Adresse Mail !\n');
    document.form.emailAddress.focus();
  }
  if (subject == "") {
    alert('Ajouter votre Message !\n');
    document.form.subjet.focus();
  }
}


function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var correct = 0;
  if (question1 == "a") {
    correct++;
  }
  if (question2 == "p") {
    correct++;
  }
  if (question3 == "img") {
    correct++;
  }
  if (question4 == "h1") {
    correct++;
  }
  if (question5 == "ul") {
    correct++;
  }
  if (question6 == "link") {
    correct++;
  }
  if (question7 == " p { }") {
    correct++;
  }
  if (question8 == "background-color:") {
    correct++;
  }
  if (question9 == "text-align: right;") {
    correct++;
  }
  
  var messages = ["Bravo!", "Pas mal !", "Vous pouvez faire mieux!"];
  var score;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 9) {
    range = 1;
  }
  if (correct == 9) {
    range = 0;
  }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "Vous avez eu " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}
