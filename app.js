const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./porHacer/porHacer.js');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for ( let tarea of listado ) {
            console.log('======Por Hacer======'.rainbow)
            console.log(tarea.descripcion);
            const compl = tarea.completado ? 'true'.green : 'false'.red;
            console.log('Estado', compl);
            console.log('======Por Hacer======'.rainbow)
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        break;
}