var models = require('../models');

var headers = {
  'Content-Type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
}; 

module.exports = {
  messages: {
    get: function (req, res, cb) {
      res.writeHead(200, headers);
      models.messages.get(res, cb);
    }, // a function which handles a get request for all messages
    post: function (req, res, cb) {
      res.writeHead(201, headers);
      models.messages.post(req.body, res, cb);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res, cb) {
      res.writeHead(200, headers);
      models.users.get(cb);
    },
    post: function (req, res, cb) {
      res.writeHead(200, headers);
      models.users.post(req.body, res, cb);
    }
  },

  access: {
    option: function(req, res, cb) {
      console.log('access');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
      res.send(200);
    }
  }
};

