const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log(argv.base);

// const[,,argBase = "base=5"] = process.argv;
// const[, baseNueva = 5] = argBase.split("=");

// const base = 13;

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado!!!`.underline.green))
    .catch(err => console.log(err.red));








