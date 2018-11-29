const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar especificada', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}