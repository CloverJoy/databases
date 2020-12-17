var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    var queryArguments = [];
    db.query(queryString, queryArguments, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback (null, data);
      }
    });
  },
  create: function (username, callback) {
    var queryString = `INSERT INTO users values (${username}) `;
    var queryArguments = [];
    db.query(queryString, queryArguments, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
};
