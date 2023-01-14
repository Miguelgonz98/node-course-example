const fs = require("fs");
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        const nombreArchivo = `Tabla del ${base}.txt`;
        let salida = "";
        salida = `----------------${nombreArchivo}:----------------\n`;
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base*i} \n`);  
        }
        // fs.writeFile(`Tabla del ${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.clear();
        //     console.log(`Tabla del ${base}.txt creada!!!`);
        // })
        if(listar){
            console.log(salida.rainbow);
            fs.writeFileSync("./salida/"+nombreArchivo, salida);
        }
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivo
}







