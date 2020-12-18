DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  id int auto_increment,
  user varchar(140),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment,
  usermessage varchar(140),
  createdAt date,
  roomname varchar(140),
  user_id int,
  PRIMARY KEY (id)
);

ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

