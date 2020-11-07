var questions = [
    ['1. What kind of puzzle is the Rubikss Magic?','Twisty puzzle','Folding puzzle','Sliding puzzle','Jigsaw puzzle','Folding puzzle'],
    ['2. Lucas Etter 4.90Who was the first speedcuber to solve the Rubiks Cube under 5 seconds on an official competition?','Feliks Zemdegs','Collin Burns','Oskar van Deventer','Lucas Etter','Lucas Etter'],
    ['3.How fast does this robot solve the cube?','1sec','2.78sec','3-4','Less than 1 sec','Less than 1 sec'],
    ['4.Which of the following puzzles became an official competition event in 2014?','Hungarian Rings','Void Cube','Skewb','Babylon Tower','Skewb'],
    ['5. In total, how many little blocks make up the Rubiks Cube?','26','54','30','9','26'],
    ['6. What is the Domino Cube?','A version of the classic Domino game','3x3x2 cuboid puzzle','4x3x3 twisty puzzle','Rubiks Cube with domino pattern stickers','3x3x2 cuboid puzzle'],
    []
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
<div class="rules">1. You'll have <span>15 seconds</span> on each question</div>
<div class="rules">2. Once you select one answer you can not select another</div>
<div class="rules">3. Once you run out of time that question will be counted wrong</div>
<div class="rules">4. You cant excite the quiz</div>
<div class="rules">5. Youll get point based on what you get right</div>
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
    setInterval('.timer_sec', 500);
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
    if(questionCount===6){
        resultBox();
    }
});

});


}
document.querySelector(".start_btn").addEventListener("click", startQuizHandler);


{/* <div class="icon tick"><i class="fas fa-check"></i></div> */}
{/* <div class="icon cross"><i class="fas fa-times"></i></div> */}