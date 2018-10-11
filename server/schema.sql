-- CREATE DATABASE chat;

USE chat;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  roomname VARCHAR(100),
  text VARCHAR(200),
  createdAt DATETIME
  -- FOREIGN KEY (user_id)
  -- REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

