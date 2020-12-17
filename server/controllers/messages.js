var models = require('../models');

module.exports = {
  get: function (req, res) {
    var link = req.url; //'127.0.0.1:3000/classes/messages';
    models.messages.getAll(data => {

      //not sure the data type
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    console.log('hello');
    console.log(req.body);


    models.messages.create(req.body.usermessage, req.body.createdAt, req.body.roomId, req.body.userId, (err) => {
      res.send(err);
    });
  } // a function which handles posting a message to the database
};


// var message = {
//   usermessage: 'hello',
//   createdAt: 2020-12-17,
//   roomId: 'chatforfree',
//   userid: 0005
// };