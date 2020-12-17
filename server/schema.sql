DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  id int,
  user varchar(140),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int,
  rommname varchar(140),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int,
  usermessage varchar(140),
  createdAt date,
  room_id int,
  user_id int,
  PRIMARY KEY (id)
  -- FOREIGN KEY (room_id) REFERENCES rooms(id),
  -- FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

