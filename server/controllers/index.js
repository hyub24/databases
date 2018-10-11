var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res, cb) {
      console.log(req.body);
      models.messages.post(req.body, cb);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('get user');
    },
    post: function (req, res, cb) {
      // console.log('post user');
      // console.log(req.body);
      // console.log(cb);
      models.users.post(req.body, cb);
    }
  }
};

