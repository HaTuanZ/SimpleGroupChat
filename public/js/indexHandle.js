$(function(){
    var join_room = $(".join-room .realative a");
    var input = $('.join-room input');
    // check input != ''
    input.keyup(function () {

        var value = false;
        if ($(this).val() == '') {
            value = true;
        }
        if (value) {
            join_room.addClass('isDisable');
        }
        else{
            join_room.removeClass('isDisable');
        }
    });

    //
    function join()
    {
        socket.emit('Client-join',$('.join-room input').val())
    }
    join_room.click(function(){
        join();
        href = join_room.prop('href');
        window.location = href;
        console.log(href);
    })

    input.keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            join_room[0].click();
        }
    });
})

