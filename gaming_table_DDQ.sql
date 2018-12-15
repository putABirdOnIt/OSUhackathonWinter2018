DROP TABLE IF EXISTS `console`;
DROP TABLE IF EXISTS `genre`;
DROP TABLE IF EXISTS `region`;
DROP TABLE IF EXISTS `trainer`;

CREATE TABLE `gaming` (
	`game_id` int(11) NOT NULL AUTO_INCREMENT,
	`game_name` varchar(255) NOT NULL DEFAULT 0,
	`console` varchar(255) NOT NULL DEFAULT 0,
	`genre` varchar(255) NOT NULL DEFAULT 0,
	`year_debut` int(11) NOT NULL,
	PRIMARY KEY (`game_id`)
	) ENGINE=InnoDB;
	
INSERT INTO gaming (game_name, console, genre, year_debut) VALUES ("The Legend of Zelda", "NES", "Adventure", "1986"); 
INSERT INTO gaming (game_name, console, genre, year_debut) VALUES ("Zelda II: The Adventure of Link", "NES", "RPG", "1987"); 