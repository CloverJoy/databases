var models = require('../models');

module.exports = {
  get: function (req, res) {
    var link = req.url; //'127.0.0.1:3000/classes/messages';
    if ( req.method === 'GET') {
      models.messages.getAll((err, results) => {
        if (err) {
          throw (err);
        }
        res.json(results);

      });
    }
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body.username, req.body.usermessage, req.body.createdAt, req.body.roomname];
    console.log('hello');
    console.log(req.body);
    models.messages.create(params, (err) => {
      if (err) {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};

// createdAt: "2020-12-16T23:33:14.629Z"
// objectId: "pCGK3FbbPR"
// roomname: "lobby"
// text: "Resurrecting chatterbox!"
// updatedAt: "2020-12-16T23:33:14.629Z"
// username: "Shane"

// var message = {
//   usermessage: 'hello',
//   createdAt: 2020-12-17,
//   roomId: 'chatforfree',
//   userid: 0005
// };