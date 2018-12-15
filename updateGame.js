function updateGame(id){
    $.ajax({
        url: '/game/' + pokemon_id,
        type: 'PUT',
        data: $('#update-game').serialize(),
        success: function(result){
            window.location.replace("./");
        }
    })
};