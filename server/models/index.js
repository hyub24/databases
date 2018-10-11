var db = require('../db');

module.exports = {
  messages: {
    get: function (res, cb) {
      db.dbConnection.query('select * from messages', (err, result) => {
        if (err) {
          throw err;
        }
        console.log(JSON.stringify(result));
        cb(err, res, JSON.stringify(result));
        res.end(JSON.stringify(result));
        
      });
    }, // a function which produces all the messages
    post: function (data, cb) {
      db.dbConnection.query('insert into messages (username, text, roomname) values("' + data.username + '", "' + data.message + '", "' + data.roomname + '")', (err, result) => {
        if (err) {
          throw err;
        }
        cb();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (cb) {
      //console.log('user get');
      db.dbConnection.query('select * from users', (err, result) => {
        if (err) {
          throw err;
        }
        //console.log('result', result);
      });
    },
    post: function (data, cb) {
      // db.dbConnection.query(`insert into users (name) values(${data.username})`, (err, result) => {
      db.dbConnection.query('insert into users (name) values("' + data.username + '")', (err, result) => {
        if (err) {
          throw err;
        }
        cb();
      });
    }
  }
};

