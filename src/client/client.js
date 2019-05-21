const socket = io()

const sendButton = document.getElementById('send')
const chatBox = document.getElementById('chatBox')
const chatInput = document.getElementById('chat')

function msgSend() {
	const name = document.getElementById('name').value
	const text = chatInput.value
	const msg = `${name} : ${text}`
	console.log(msg)
	socket.emit('send', msg)
}

sendButton.addEventListener('click', msgSend)

socket.on('receive', msg => {
	chatInput.value = ''
	chatBox.innerText += msg + '\n'
	chatBox.scrollTop = chatBox.scrollHeight
})
