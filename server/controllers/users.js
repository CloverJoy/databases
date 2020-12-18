var models = require('../models');

module.exports = {
  get: function (req, res) {
    var link = req.url; //'127.0.0.1:3000/classes/users';
    models.users.getAll((err, results) => {
      if (err) {
        throw (err);
      }
      res.json(results);
    });
  },

  post: function (req, res) {
    var params = [req.body.user];
    console.log('hello');
    console.log(req.body);
    models.users.create(params, (err) => {
      if (err) {
        res.sendStatus(201);
      }
    });
  }
};
