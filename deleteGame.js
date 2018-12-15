function deleteGame(game_id){
    $.ajax({
        url: '/game/' + game_id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};