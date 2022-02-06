function check(){
    var c=0;
    var q1=document.questions.question1.value;
    var q2=document.questions.question2.value;
    var q3=document.questions.question3.value;
    var q4=document.questions.question4.value;
    var q5=document.questions.question5.value;
    var outcome=document.getElementById('outcome');
    var questions=document.getElementById("questions");
    if(q1=="Float"){c+=20}
    if(q2=="Scripting"){c+=20}
    if(q3=="Methods/Functions"){c+=20}
    if(q4=="script"){c+=20}
    if(q5=="italic()"){c+=20}
    questions.style.display="none";
    outcome.textContent=(c);
}