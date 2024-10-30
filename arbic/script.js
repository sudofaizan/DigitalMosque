// Play audio function
function playAudio(file) {
    const audio = new Audio(file);
    audio.play();
}

// Show answer for flashcards
function showAnswer(button) {
    const answer = button.nextElementSibling;
    answer.style.display = 'block';
}

// Check quiz answer
function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const result = document.getElementById('quiz-result');
    
    if (answer === 'ma assalama') {
        result.innerText = 'Correct!';
        result.style.color = 'green';
        updateProgress('quiz1');
    } else {
        result.innerText = 'Incorrect! The correct answer is "Ma Assalama"';
        result.style.color = 'red';
    }
}

// Update progress tracking
function updateProgress(quizId) {
    let progress = localStorage.getItem('progress') || '{}';
    progress = JSON.parse(progress);
    progress[quizId] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
}