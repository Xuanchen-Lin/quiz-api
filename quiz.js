document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        const userAnswer = document.getElementById('user-answer').value;

        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers: [userAnswer] }),
        })
        .then(response => response.json())
        .then(data => {
            const scoreContainer = document.getElementById('score-container');
            scoreContainer.innerHTML = `Your score: ${data.score}`;
        })
        .catch(error => console.error('Error:', error));
    };
});
