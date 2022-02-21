
const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try{

           
        let salida = '';
        let consola = '';
        
        for(let i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola+= `${base} ${ 'x'.yellow } ${i} ${ '='.yellow } ${base*i}\n`;
        }

        if(listar){
            console.log('=================='.yellow);
            console.log('   Table del: '.cyan, color.red(base));
            console.log('=================='.yellow);

            console.log(consola);
        }

        
    

        //fs.writeFile(`table-${base}.txt`, salida, (er) => {
        //    if (er) throw er;
        //
        //    console.log(`Archivo tabla-${base}.txt creado`);
        //})

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);

        return(`tabla-${base}.txt`);
    }catch(err){
        throw err;
    }

}

module.exports = { crearArchivo }
