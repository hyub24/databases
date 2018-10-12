var mysql = require('mysql');
var Sequelize = require('sequelize');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var sequelDB = new Sequelize('chat', 'student', 'student');

// var User = sequelDB.define('User', {
//   username: Sequelize.STRING
// });

var Message = sequelDB.define('messages', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// Message.sync();

exports.Message = Message;