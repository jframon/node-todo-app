const argv = require('./Config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./ToDO/todo');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();

        console.log('=============To Do============='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion.red);
            console.log('Estado: ', tarea.completado);
        }
        console.log('==============================='.green);
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.description, argv.complete);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}