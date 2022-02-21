const color = require('colors');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'.green
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'.green
      })
      .option('h', {
          alias: 'hasta',
          type: 'number',
          default: 10,
          description: 'Hasta que numero se multiplicara la tabla'.green
      })
    .check( (argv, options) => {
        console.log('yargs: ',argv.b)
        if( isNaN( argv.b )){
            throw 'La base debe ser un numero'.red
        }
        return true;
    })    
    .argv;

    module.exports = argv; 