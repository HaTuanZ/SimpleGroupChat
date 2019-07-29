const express =require("express");
const app = express();
app.use(express.static("./public"));//all request from customer are taken on public folder
app.set("view engine","ejs");
app.set("views", "./views");

const server  = require('http').Server(app);
var io = require("socket.io")(server);
var listPeople = [];
var listMessenger =[];
server.listen(process.env.PORT || 3000);

var join = false;
io.on("connection", function(socket){
    //edit
    if(listPeople != null)
    {
        socket.userName = listPeople[listPeople.length-1];
    }
    socket.on('Client-join', function(data){        
        join = true;
        listPeople.push(data);
        io.sockets.emit('Server-send-listPeople', listPeople)
    })

    socket.on("Client-send-mess", function(data){
        /// edit
        socket.emit("Server-send-mess",{name:"You" , mess: data } )
        socket.broadcast.emit("Server-send-mess-broadcast",{name:socket.userName , mess: data } )
    })
})
app.get("/", function(req, res){
    // if(join == true) console.log('false');
    // else
    res.render("index")
})

app.get("/roomChat", function(req, res){
    if(join == true){
        res.render("roomchat")
    }
    else{
        res.render("index")
    }
});

app.post("/getListPeople", function(req, res){
    res.send(listPeople)   
})