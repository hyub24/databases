var db = require('../db');

module.exports = {
  messages: {
    get: function (res, cb) {
      db.dbConnection.query('select * from messages', (err, result) => {
        if (err) {
          throw err;
        }
        var data = JSON.stringify(result);
        var result = {results: data};

        cb(err, res, JSON.stringify(result));
        res.end(JSON.stringify(result));
      });
    },
    post: function (data, res, cb) {
      db.dbConnection.query('insert into messages (username, text, roomname) values("' + data.username + '", "' + data.text + '", "' + data.roomname + '")', (err, result) => {
        if (err) {
          throw err;
        }
        cb();
        res.end();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (cb) {
      db.dbConnection.query('select * from users', (err, result) => {
        if (err) {
          throw err;
        }
      });
    },
    post: function (data, res, cb) {
      // db.dbConnection.query(`insert into users (name) values(${data.username})`, (err, result) => {
      db.dbConnection.query('insert into users (name) values("' + data.username + '")', (err, result) => {
        if (err) {
          throw err;
        }
        cb();
        res.end();
      });
    }
  }
};

