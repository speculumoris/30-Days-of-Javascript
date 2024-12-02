const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: false },
            { text: "Silver", correct: false }
        ]
    }
];

console.log(questions);
const questionElement=document.getElementById('question');
const asnwerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score =0;
function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML='Next';
    showQuestion(); 
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        asnwerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none"
    while(asnwerButtons.firstChild){
        asnwerButtons.removeChild(asnwerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(asnwerButtons.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML ="Play Again"
    nextButton.style.display="block"
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})
startquiz()