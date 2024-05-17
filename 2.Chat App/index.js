// paketleri projeye alıyorum
const express = require('express')
const socket = require('socket.io')
//1

//expressi başlatıyorum
const app = express()
const server = app.listen(3000)
//2

//html css dosyalarını yönetmek için bir statik dosya(public) tanımlıyoruz
app.use(express.static('public'))
//3


//soket başlangıcı
const io = socket(server)
io.on('connection' , (socket) =>{
    console.log(socket.id)

    socket.on('chat', data =>{
        io.sockets.emit('chat' , data)
    })
    socket.on('typing' , data =>{
        socket.broadcast.emit('typing' , data)
    })
})