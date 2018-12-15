module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getGame(res, mysql, context, complete){
        mysql.pool.query("SELECT game_id, game_name, console, genre, year_debut FROM game", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.game  = results;
            complete();
        });
    }

/* to display all game details */

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteGame.js", "updateGame.js"];
        var mysql = req.app.get('mysql');
        getGame(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if (callbackCount >= 1){
                res.render('game', context);
            }
        }

    });



    /* Display one person for the specific purpose of updating people */

    router.get ('/:game_id', function(req, res){
        console.log ("branch update page called");
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedGame.js", "updateGame.js"];
        var mysql = req.app.get('mysql');
        getGame(res, mysql, context, req.params.game_id, complete);
       
        function complete(){
            callbackCount++;
            if (callbackCount >= 2) {
            res.render('updateGame', context);
            
        }
    }

});

    /* Adds a person, redirects to the people page after adding */

    router.post('/', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO game (game_name, console, genre, year_debut) VALUES (?,?,?,?)";
        var inserts = [req.body.game_name, req.body.console, req.body.genre, req.body.year_debut, req.body.game_id];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/game');
            }
        });
    });

    /* The URI that update data is sent to in order to update a game */

    router.post('/:id', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "UPDATE game SET game_name=?, console=?, genre=?, year_debut=? WHERE game_id=?";
        var inserts = [req.body.game_name , req.body.consoe, req.body.genre, req.body.year_debut,req.params.id];
        mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/game');
            }
        });
    });

    /* Route to delete a game, simply returns a 202 upon success. Ajax will handle this. */

    router.delete('/:game_id', function(req, res){
        //console.log("delete handler called");
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM gaming WHERE game_id = ?";
        var inserts = [req.params.gym_id];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.status(400);
                res.end();
            }else{
                res.status(202);
                res.end();
            }
        });
    });

    return router;
}();
