$( document ).ready(function() {
    console.log( "ready!" );

    $('.warren').load("warrenlist.ejs");

    $('.form').on('submit', function(e){
        e.preventDefault();
        console.log('form submited');
        $.ajax({
            method:'post',
            url:'/rabbits',
            data:$('form').serialize(),
            success: function(response){
                console.log(response);
                var content = $('<div />', {
                    html: [
                        $('<h4 />', {text: "Name : "+response.name}),
                        $('<h4 />', {text: "Breed : "+response.breed}),
                        $('<h4 />', {text: "DOB : "+response.dob}),
                        '<button class="reset" type="button" name="button">Return to start page</button>'
                    ]
                });
                console.log("hi");
                console.log(content);
                $('.warren').html(content);
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
