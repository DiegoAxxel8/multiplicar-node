const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => console.log(`Archivo creado:`, colors.magenta(nombreArchivo)))
            .catch(error => console.log(error));
        break;

    default:
        console.log("Comando no reconocido");
}