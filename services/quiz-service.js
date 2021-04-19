// let quizzes = require("./quizzes.json");

// const findAllQuizzes = () => quizzes;

// const findQuizById = (quizId) => quizzes.find((quiz) => quiz._id === quizId);

// module.exports = {
// 	findAllQuizzes,
// 	findQuizById,
// };

const quizzesDao = require("../daos/quizzes-dao");
const findAllQuizzes = () => quizzesDao.findAllQuizzes();
const findQuizById = (qid) => quizzesDao.findQuizById(qid);
module.exports = { findAllQuizzes, findQuizById };
