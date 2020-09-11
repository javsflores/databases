var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var queryString = 'SELECT messages.id, messages.message_text, users.username, rooms.room_name \
                       FROM messages LEFT OUTER JOIN users ON messages.user_id = users.id \
                       LEFT OUTER JOIN rooms ON messages.room_id = rooms.id';
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  // a function which can be used to insert a message into the database
  create: function (params, callback) {
    var queryString = 'INSERT INTO messages(message_text, user_id, room_id) \
                       VALUES(?, (SELECT id FROM users WHERE username = ? LIMIT 1), \
                       (SELECT id FROM rooms WHERE room_name = ?))';
    db.query(queryString, params, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};
