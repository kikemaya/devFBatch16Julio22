"use strict";

const url = "http://localhost:3000/pokemon";

// Esta es una peticion local con fetch y promesas
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    //esto es una prueba recuerda borrar
    response.forEach(element => {
      console.log(element);
    });
    console.log(response);
  })
  .catch((error) => {
    console.log("error ", error);
  });
