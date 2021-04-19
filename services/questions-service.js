// let questions = require("./questions.json");
// findQuestionsForQuiz = (quizId) =>
// 	questions.filter((question) => question.quizId === quizId);
// module.exports = {
// 	findQuestionsForQuiz,
// };

const questionsDao = require("../daos/questions-dao");
const findAllQuestions = () => questionsDao.findAllQuestions();
const findQuestionById = (qid) => questionsDao.findQuestionById(qid);
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid);
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
