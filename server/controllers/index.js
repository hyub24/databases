var models = require('../models');
var Sequelize = require('sequelize');
var db = require('../db');




var headers = {
  'Content-Type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
}; 

module.exports = {
  messages: {
    get: function (req, res, cb) {
      //res.writeHead(200, headers);
      // db.Message.findOne({where: {id: 1}, attributes: ['id']})
      db.Message.findAll({attributes: ['username', 'text', 'roomname']})
        .then(function(messages) {
          console.log('message', JSON.stringify(messages[0].dataValues));
          // res.json(messages[0].dataValues);
          // console.log(typeof messages, messages);
          // res.json(messages);
          res.end(JSON.stringify([messages[0].dataValues]));
        });
      // models.messages.get(res, cb);
    },
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
      res.writeHead(201, headers);
      models.users.post(req.body, res, cb);
    }
  },

  access: {
    option: function(req, res, cb) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
      res.sendStatus(200);
    }
  }
};

