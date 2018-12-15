-- ---------------------------------------
-- TABLE `gaming`
-- ----------------------------------------
-- Get Games to populate dropdown use Select
SELECT game_id, game_name FROM gaming;
-- INSERT Add a pokemon
INSERT INTO gaming (game_name) VALUES ("?");
-- UPDATE
UPDATE gaming SET game_name=game_id_selected;
-- DELETE row from pokemon table
DELETE FROM gaming WHERE game_id=game_id_selected;

-- -------------------------------------------------
-- Get all
-- ---------------------------------------------------

-- Get all entries to populate games table
SELECT game_id, game_name, console, genre, year_debut FROM gaming;





