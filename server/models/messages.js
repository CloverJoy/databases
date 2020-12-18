var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM messages';
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback (null, data);
      }
    });
    // createdAt: "2020-12-17T16:15:21.271Z"
    // objectId: "vhNYmSqteV"
    // roomname: "lobby"
    // text: "Working?"
    // updatedAt: "2020-12-17T16:15:21.271Z"
    // username: "test"

  }, // a function which produces all the messages
  create: function (usermessage, createdAt, roomName, userId, callback) {
    var queryString = `INSERT INTO message (usermessage, createdAt, room_id, user_id) values ( ${params[1]}, ${params[2]}, ${params[3]}, ${params[0]} )`;
    db.query(queryString, (err) => {
      if (err) {
        callback(err);
      } else {
        console.log('new message added to database!');
      }

    });
  } // a function which can be used to insert a message into the database
};
//(params, callback)
// value (?, (select id from users where username = ? limit 1), ?)';