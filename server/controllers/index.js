var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res, cb) {
      models.messages.get(res, cb);
    }, // a function which handles a get request for all messages
    post: function (req, res, cb) {
      models.messages.post(req.body, cb);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res, cb) {
      models.users.get(cb);
    },
    post: function (req, res, cb) {
      models.users.post(req.body, cb);
    }
  }
};

