const fs = require('fs')

// hacer consultas sincronas
const archivos = fs.readdirSync("./")
console.log(archivos)

// hacer consultas asincronas
fs.readdir("./", (error, files) => {
  if (error) return console.error("Error: " + error)
  return console.log("Resultado", files)
})