var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback (null, data);
      }
    });
  },
  create: function (params, callback) {
    var queryString = `INSERT INTO users values (${params[0]}) `;
    db.query(queryString, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
};
