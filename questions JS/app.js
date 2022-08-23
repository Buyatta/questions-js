const questions = document.querySelectorAll('.question')


//iterate along all questions first

questions.forEach(function (question) {
   // console.log(question)
    //store the button to be responsive
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function () {
       //iterate to target each question
        questions.forEach = (item) =>
           // if( item !== question){ item.classList.remove("show-text")}
             (item !== question)?item.classList.remove("show-text"):item.classList.add("show-text")
        
       
        question.classList.toggle('show-text')
    })
})