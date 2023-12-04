const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Quiz Array
const quizzes = [];

// Scoring logic
function calculateScore(userAnswers) {
  let totalScore = 0;

  quizzes.forEach((question, index) => {
    const userAnswer = userAnswers[index];

    const selectedOption = question.options.find((option) => option.text === userAnswer);
    if (selectedOption) {
      totalScore += selectedOption.weight;
    }
  });

  return totalScore;
}

app.use(express.json());

app.get('/quiz', (req, res) => {
  res.json(quizzes);
});

app.post('/quiz', (req, res) => {
  const newQuiz = req.body;
  quizzes.push(newQuiz);
  res.json(newQuiz);
});

app.post('/submit', (req, res) => {
  const userAnswers = req.body.answers;

  // Calculate the score
  const calculatedScore = calculateScore(userAnswers);

  res.json({ score: calculatedScore });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
