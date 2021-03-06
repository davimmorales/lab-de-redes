const utils = require('../utils/game');

module.exports = (app) => {
  const GameRecord = app.models.gameRecord;
  const GameController = {
    player(req, res) {
      res.render('game');
    },
    start(req, res) {
      const startGame = Boolean(req.body.startGame) === true;
      const query = GameRecord.find({});
      query.findOne().sort({_id: -1});
      query.select('inProgress');
      query.exec((err, status) => {
        if (status === true) {
          res.status(200).json({message: 'Game is in progress!'});
        } else if (startGame === true) {
          GameRecord.deleteMany({}, (err) => {
            if (err) {
              res.status(500).send(err);
            } else {
              let gameRecord = new GameRecord();
              gameRecord.player1.board = utils.createBoard();
              gameRecord.player2.board = utils.createBoard();
              gameRecord.save((err) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.status(201).json({message: 'Game started!'});
                }
              });
            }
          });
        } else {
          res.status(200).json({message: 'Game has not started!'});
        }
      });
    },
    restart(req, res) {
      const restartGame = Boolean(req.body.restartGame) === true;
      if (restartGame === true) {
        GameRecord.deleteMany({}, (err) => {
          if (err) {
            res.status(500).send(err);
          } else {
            let gameRecord = new GameRecord();
            gameRecord.player1.board = utils.createBoard();
            gameRecord.player2.board = utils.createBoard();
            gameRecord.save((err) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.status(201).json({message: 'Game restarted!'});
              }
            });
          }
        });
      } else {
        res.status(200).json({message: 'Game has not restarted!'});
      }
    },
    play(req, res) {
      const playerId = Number(req.body.player);
      const square = Number(req.body.square) - 1;
      const query = GameRecord.find({});
      query.findOne().sort({_id: -1});
      query.exec((err, game) => {
        if (err) {
          res.status(500).send(err);
        } else if (game) {
          if (game.inProgress === true && game.currentPlayerId === playerId) {
            let result;
            switch (playerId) {
              case 1:
                result = utils.updateBoard(game.player2.board, square);
                if (result.isSquareValid === true) {
                  if (result.incrementScore === true) {
                    ++game.player1.score;
                  }
                  game.inProgress =
                    utils.hasScoreToWin(game.player1.score) ? false : true;
                  game.currentPlayerId = utils.getNextPlayerId(playerId);
                  GameRecord.findByIdAndUpdate(
                    game.id,
                    game,
                    {new: true},
                    (err, game) => {
                      if (err) {
                        res.status(500).send(err);
                      } else {
                        res.status(201).send({message: 'Square is valid!'});
                      }
                    }
                  );
                } else {
                  res.status(200).json({message: 'Square is not valid!'});
                }
                break;
              case 2:
                result = utils.updateBoard(game.player1.board, square);
                if (result.isSquareValid === true) {
                  if (result.incrementScore === true) {
                    ++game.player2.score;
                  }
                  game.inProgress =
                    utils.hasScoreToWin(game.player2.score) ? false : true;
                  game.currentPlayerId = utils.getNextPlayerId(playerId);
                  GameRecord.findByIdAndUpdate(
                    game.id,
                    game,
                    {new: true},
                    (err, game) => {
                      if (err) {
                        res.status(500).send(err);
                      } else {
                        res.status(201).send({message: 'Square is valid!'});
                      }
                    }
                  );
                } else {
                  res.status(200).json({message: 'Square is not valid!'});
                }
                break;
              default:
                res.status(200).json({message: 'It\'s not your turn!'});
                break;
            }
          } else {
            (game.inProgress === true) ?
              res.status(200).json({message: 'It\'s not your turn!'}) :
              res.status(200).json({message: 'Game is not in progress!'});
          }
        } else {
          res.status(200).json({message: 'Game is not in progress!'});
        }
      });
    },
    status(req, res) {
      const query = GameRecord.find({});
      query.findOne().sort({_id: -1});
      query.select('inProgress');
      query.exec((err, status) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(status);
        }
      });
    },
    currentPlayer(req, res) {
      const query = GameRecord.find({});
      query.findOne().sort({_id: -1});
      query.select('currentPlayerId');
      query.exec((err, currentPlayer) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(currentPlayer);
        }
      });
    },
    progress(req, res) {
      const query = GameRecord.find({});
      query.findOne().sort({_id: -1});
      query.exec((err, game) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json({game: game});
        }
      });
    },
  };
  return GameController;
};
