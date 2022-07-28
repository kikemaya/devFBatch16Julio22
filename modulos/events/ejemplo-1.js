// Nos permite crear nuestros propios eventListeners
const EventEmitter = require('events')
const emitter = new EventEmitter()

// Definir las reglas de nuestro evento:
// Si nuestro evento ocurre, entonces... se ejecuta tal codigo

emitter.on('saludar', (args) => {
  console.log('Hola, ' + args.edad + '!');
})

emitter.emit('saludar', {
  edad: 20,
  nombre: "Samantha"
})
