// operative system
const os = require("os")

// Consultar memoria en bytes
let libre = os.freemem()
let completa = os.totalmem()

console.log(libre);
console.log(completa);