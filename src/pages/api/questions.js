// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const questions = [
  {
    questionText: "What is the full form of HTML?",
    answerOptions: [
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "Hyperlink Markup Language", isCorrect: false },
    ],
  },
  {
    questionText: "What does CSS stand for?",
    answerOptions: [
      { answerText: "Cascading Style Sheets", isCorrect: true },
      { answerText: "Colorful Style Sheets", isCorrect: false },
      { answerText: "Creative Style Sheets", isCorrect: false },
      { answerText: "Computer Style Sheets", isCorrect: false },
    ],
  },
  {
    questionText: "What is the most popular programming language in 2023?",
    answerOptions: [
      { answerText: "Java", isCorrect: false },
      { answerText: "Python", isCorrect: true },
      { answerText: "JavaScript", isCorrect: false },
      { answerText: "C++", isCorrect: false },
    ],
  },
  {
    questionText: "What is the purpose of a 'for' loop in programming?",
    answerOptions: [
      { answerText: "Defining a function", isCorrect: false },
      { answerText: "Repeating a block of code", isCorrect: true },
      { answerText: "Declaring a variable", isCorrect: false },
      { answerText: "Comparing two values", isCorrect: false },
    ],
  },
  {
    questionText: "What does RAM stand for in a computer?",
    answerOptions: [
      { answerText: "Read-Access Memory", isCorrect: false },
      { answerText: "Random-Access Memory", isCorrect: true },
      { answerText: "Readily-Accessible Memory", isCorrect: false },
      { answerText: "Run-Around Memory", isCorrect: false },
    ],
  },
  // Add more questions as needed
];

export default function handler(req, res) {
  res.status(200).json(questions);
}
