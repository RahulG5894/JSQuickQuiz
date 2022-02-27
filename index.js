let ans = [1, 4, 2, 3, 4];
let answer = [];
function displayQuizQuestions(){
    hide(document.getElementById("button-div"));
    unhide(document.getElementById("questions"));
}
function diplayQuitMessages(){
    hide(document.getElementById("button-div"));
    unhide(document.getElementById('quitMessage'));
}
function displayResult() {
    getScore();
    let score = 0;
    for(let i=0; i<answer.length; i++){
        if(ans[i]==answer[i]) score++;
    }
    hide(document.getElementById('questions'));
    unhide(document.getElementById('displayScore'));
    let para = document.getElementById('score-para');
    score = (((score)/5)*100);
    para.innerHTML = "Your score is " + score+"%";
    // alert(score);
}
function getScore() {
    const question1 = document.getElementsByName("question1");
    for(let i=0; i<question1.length; i++) {
        if(question1[i].checked) {
            answer.push(i+1);
        }
    }
    if(answer.length<1) answer.push(0);

    const question2 = document.getElementsByName("question2");
    for(let i=0; i<question2.length; i++) {
        if(question2[i].checked) {
            answer.push(i+1);
        }
    }
    if(answer.length<2) answer.push(0);

    const question3 = document.getElementsByName("question3");
    for(let i=0; i<question3.length; i++) {
        if(question3[i].checked) {
            answer.push(i+1);
        }
    }
    if(answer.length<3) answer.push(0);

    const question4 = document.getElementsByName("question4");
    for(let i=0; i<question4.length; i++) {
        if(question4[i].checked) {
            answer.push(i+1);
        }
    }
    if(answer.length<4) answer.push(0);

    const question5 = document.getElementsByName("question5");
    for(let i=0; i<question5.length; i++) {
        if(question5[i].checked) {
            answer.push(i+1);
        }
    }
    if(answer.length<5) answer.push(0);
}
function hide(element) {
    element.setAttribute("class", "hidden");
}
function unhide(element) {
    element.removeAttribute("class", "hidden");
}