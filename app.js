
//for(i=1;i<=10;i++){
//    let r = 5*i;
//    console.log('5 *',i,' =',r);
//}

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

console.log(argv);

console.log('base: yargs', argv.b);

//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base] = arg3.split('=');
//console.log(base);


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
     .catch( err => console.log(err)); 