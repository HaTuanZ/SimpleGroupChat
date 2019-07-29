
socket.on('Server-send-listPeople', function(data){
    $('.room-chat .left ul').html("");
    data.forEach(function(i){
        $('.room-chat .left ul').append("<li>"+i+"</li>")
    })
})
socket.on('Server-send-mess', function(data){
    //edit
    var _class = "self";
    $('.chat .messenger ul').append("<li class='"+_class+"'>"+
                                    "<p>"+data.mess+"</p>"+
                                    "<small>"+data.name+"</small>"+
                            "</li>")   
})
socket.on('Server-send-mess-broadcast', function(data){
    //edit
    var _class = "people";
    $('.chat .messenger ul').append("<li class='"+_class+"'>"+
                                    "<p>"+data.mess+"</p>"+
                                    "<small>"+data.name+"</small>"+
                            "</li>")   
})
function send(){
    socket.emit("Client-send-mess", $('.chat input').val())
    $('.chat input').val("");
}
$(function(){
    $('.chat a').click(function(){
        send();
    })
    $('.chat input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('.chat a')[0].click();
        }
    });

    $('.chat input').keyup(function () {

        var value = false;
        if ($(this).val() == '') {
            value = true;
        }
        if (value) {
            $(".chat a").addClass('isDisable');
        }
        else{
            $(".chat a").removeClass('isDisable');
        }
    });
})