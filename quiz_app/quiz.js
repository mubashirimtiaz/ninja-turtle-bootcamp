//list of correct answers
const correctAnswers = ["B","A","B","B","A"];

// quering  DOM
const form = document.querySelector('.quiz-form');
const result  = document.querySelector('.result');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const selectAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    let score= 0
    selectAnswers.forEach((ans,index)=>{
        if(ans === correctAnswers[index]){
            score++;
        }
    })
    score  = (score / selectAnswers.length) *100;
    result.querySelector('span').innerText =`${score}%`
    result.classList.remove('d-none');
    scroll(0,0);
})