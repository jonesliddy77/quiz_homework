var questions = [
    ['q 1','a1','a2','a3','a4','a2'],
    ['q 2','a1','a2','a3','a4','a4'],
    ['q 3','a1','a2','a3','a4','a2'],
    ['q 4','a1','a2','a3','a4','a2'],
    ['q 5','a1','a2','a3','a4','a2'],
    ['q 6','a1','a2','a3','a4','a2'],
]
 var questionCount = 0;
function resultBox(){

    body.innerHTML = `<div class="result_box">
            <div class="icon">
              <i class="fas fa-crown"></i>
            </div>
            <div class="complete_text">you have compleated the quiz</div>
            <div class="score_text">
              <span
                >and you only got <strong id="nums">0</strong> out of
                <strong id="nums">5</strong></span
              >
            </div>
            <div class="buttons">
              <button class="quitQuiz">quit quiz</button>
            </div>
          </div>`
          document.querySelector('.quitQuiz').addEventListener('click', function(){
            location.reload();
        });
       
};
function displayQuestion(questionNum){
   
    document.querySelector('#question-block').innerHTML =` <div class="que_text">
    <span>${questions[questionNum][0]}</span>
</div>
<div class="option_list">
    <div id='answer1' class="option">
        <span>${questions[questionNum][1]}</span>
        
    </div>
    <div class="option">
        ${questions[questionNum][2]}

    </div>
    <div class="option">
        ${questions[questionNum][3]}
    </div>
    <div class="option">
        ${questions[questionNum][4]}
    </div>
</div>`

}


var body = document.querySelector("body");
function displayStart(){
    body.innerHTML = `<div class="start_btn"><button>Start Quiz</button></div>`;
}
displayStart();


function startQuizHandler() {
  body.innerHTML = `        
<div class="rule_box">
<div class="rule_title">
<span>rules for the quiz</span>
</div>
<div class="rules_list">
<div class="rules">1. youll have <span>15 seconds</span> each question</div>
<div class="rules">2. oncw you select one answer you cant go back</div>
<div class="rules">3. once you runn out of time the quiz will count the question wrong</div>
<div class="rules">4. you cant excite the quiz</div>
<div class="rules">5. youll get point based on what you get right</div>
</div>
<div class="buttons">
<button class="quit">exit quiz</button>
<button class="continue">continue</button>
</div>
</div>`;
document.querySelector('.quit').addEventListener('click', function(){
    location.reload();
});
document.querySelector('.continue').addEventListener('click', function(){
    body.innerHTML = `
    <div class="quiz_box">
    <header>
        <div class="title">The rubix cube test</div>
        <div class="timer">
            <div class="time_text">Time Left</div>
            <div class="timer_sec">15</div>
        </div>
    </header>
    <section id='question-block'>
       
    </section>
    <!-- QUIZ BOX FOOTER  -->
    <footer>
        <div class="total_que">
        </div>
        <button class="next_btn">next question</button>
    </footer>
  </div> `
  displayQuestion(questionCount)
document.querySelector('.next_btn').addEventListener('click', function(){
    questionCount++;
    displayQuestion(questionCount);
    if(questionCount==5){
        resultBox();
    }
});

});


}
document.querySelector(".start_btn").addEventListener("click", startQuizHandler);


{/* <div class="icon tick"><i class="fas fa-check"></i></div> */}
{/* <div class="icon cross"><i class="fas fa-times"></i></div> */}