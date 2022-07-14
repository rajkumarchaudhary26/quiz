const correctAnswers = ['A', 'B', 'B', 'A'];

const form = document.querySelector('form');
const result = document.querySelector('.result')
const resultStatement = result.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    let userAnswers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })
    scrollTo(0, 0)
    result.classList.remove('d-none');
    let output = 0;
    const resultInterval = setInterval(() => {
        if (output === score) {
            resultStatement.textContent = `${output}%`;
            clearInterval(resultInterval);
        } else {
            output++;
            resultStatement.textContent = `${output}%`;
        }
    }, 10)
})