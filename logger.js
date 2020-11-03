const EventEmitter = require('events')
const fs = require('fs') //filesystem para gravar no arquivo
const path = require('path') // Pegar o caminho correto do arquivo

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log