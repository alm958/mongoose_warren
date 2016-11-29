$( document ).ready(function() {
    console.log( "ready!" );
    $('.form').on('submit', function(e){
        e.preventDefault();
        console.log('form submited');
        $.ajax({
            method:'post',
            url:'/rabbits',
            data:$('form').serialize(),
            success: function(response){
                $('.warren').html(response);
                $('.error').html('');
                $('form').toggleClass("hide");
            },
            error: function(response){
                $('.error').append(response.responseText);
            }
        })
    })
    $('.warren').on('click','button.reset',function(e){
        e.preventDefault();
        $('form').toggleClass("hide");
        $('.error').html('');
        $('.warren').empty();
        document.getElementById("newrabbitform").reset();
    })
});
