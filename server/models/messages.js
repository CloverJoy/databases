var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = '';
    var queryArguments = [];
    db.query(queryString, queryArguments, (err) => {
      if (err) {
        throw (err);
      } else {

      }
    });

    // readAll: function (callback) {
    //   return $.ajax({
    //     url: this.url,
    //     type: 'GET',
    //     dataType: 'json',
    //     success: callback
    //   });
    // },

    // dbConnection.query(queryString, queryArgs, function(err) {
    //   if (err) { throw err; }

    //   // Now query the Node chat server and see if it returns
    //   // the message we just inserted:
    //   request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
    //     var messageLog = JSON.parse(body);
    //     expect(messageLog[0].text).to.equal('Men like you can never change!');
    //     expect(messageLog[0].roomname).to.equal('main');
    //     done();
    //   });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
