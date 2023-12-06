# quiz-api
This is a simple Express.js application that provides an API for managing quizzes and calculating scores based on user answers. The API allows users to retrieve quizzes, submit new quizzes, and calculate scores for submitted answers.

Getting Started
To run the server, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server will be running on http://localhost:3000 by default.

API Endpoints
1. Get Quizzes
Endpoint: /quiz
Method: GET
Description: Retrieve a list of available quizzes.
2. Add Quiz
Endpoint: /quiz

Method: POST

Description: Add a new quiz to the system. Provide the quiz details in the request body.

json
Copy code
{
  "question": "Sample Question",
  "options": [
    {"text": "Option 1", "weight": 1},
    {"text": "Option 2", "weight": 2},
    // Add more options as needed
  ]
}
3. Submit Answers and Calculate Score
Endpoint: /submit

Method: POST

Description: Submit user answers for a quiz and calculate the score. Provide the answers in the request body.

json
Copy code
{
  "answers": ["User's Answer 1", "User's Answer 2", /* Add more answers as needed */]
}
The server will respond with the calculated score.

Example Usage
Get Quizzes:

bash
Copy code
curl http://localhost:3000/quiz
Add Quiz:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"question": "Sample Question", "options": [{"text": "Option 1", "weight": 1}, {"text": "Option 2", "weight": 2}]}' http://localhost:3000/quiz
Submit Answers and Calculate Score:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"answers": ["User's Answer 1", "User's Answer 2"]}' http://localhost:3000/submit
Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
