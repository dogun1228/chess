const path = require('path')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.use(express.static(path.resolve(__dirname, '../client')))

io.on('connection', socket => {
	console.log('user connceted:' + socket.id)
	socket.on('send', msg => {
		console.log(msg)
		io.emit('receive', msg)
	})
})

module.exports = server
