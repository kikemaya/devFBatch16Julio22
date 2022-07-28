const path = require('path')

console.log(__dirname);
console.log(__filename);

const miArchivo = path.parse(__filename)
console.log(miArchivo.name);