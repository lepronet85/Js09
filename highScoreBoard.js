function createScoreBoard() {
  const highScoreBoard = {
    "The Best Ever": 10000,
  };

  return highScoreBoard;
}

function addPlayer(existedScoreBoard, playerName, score) {
  return {
    ...existedScoreBoard,
    [playerName]: score,
  };
}

function removePlayer(existedScoreBoard, playerName) {
  if (existedScoreBoard[playerName] !== undefined) {
    delete existedScoreBoard[playerName];
    return existedScoreBoard;
  }

  return existedScoreBoard;
}

function updateScore(existedScoreBoard, playerName, score) {
  if (existedScoreBoard[playerName] !== undefined) {
    existedScoreBoard[playerName] += score;
    return existedScoreBoard;
  }

  return existedScoreBoard;
}

function applyMondayBonus(scoreBoard) {
  const newScoreBoard = {};
  for (let playerName in scoreBoard) {
    newScoreBoard[playerName] = scoreBoard[playerName] + 100;
  }

  return newScoreBoard;
}

function normalizeScore({ score, normalizeFunction }) {
  return normalizeFunction(score);
}

function highScoreBoard() {
  // Création d'un tableau de score
  let scoreBoard = createScoreBoard();

  // Ajout de joueurs

  scoreBoard = addPlayer(scoreBoard, 'Dave Thomas', 0);
  scoreBoard = addPlayer(scoreBoard, 'Freyja Ćirić', 12771008);
  scoreBoard = addPlayer(scoreBoard, 'José Valim', 486373);

  // Suppression de joueurs

  scoreBoard = removePlayer(scoreBoard, 'Dave Thomas');
  scoreBoard = removePlayer(scoreBoard, 'Rose Fanaras');

  // Mise à jour des scores

  scoreBoard = updateScore(scoreBoard, 'Freyja Ćirić', 73);

  // Application du bonus du lundi

  scoreBoard = applyMondayBonus(scoreBoard);

  // Normalisation des scores

  for (let playerName in scoreBoard) {
    scoreBoard[playerName] = normalizeScore({
      score: scoreBoard[playerName],
      normalizeFunction: (score) => {
        return 2 * score + 10;
      },
    });
  }


  return scoreBoard;

}

console.log(highScoreBoard());

module.exports = highScoreBoard;