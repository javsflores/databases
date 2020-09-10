CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  message_text TEXT,
  time_stamp TIMESTAMP,
  user_id INT,
  room_id INT
);

/* Create other tables and define schemas for them here! */

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  room_name TEXT
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username TEXT
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
