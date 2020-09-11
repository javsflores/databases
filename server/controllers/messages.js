var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results);
      }
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    var params = [req.query.text, req.query.username, req.query.roomname];

    models.messages.create(params, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.sendStatus(201);
        res.end();
      }
    });
  }
};
