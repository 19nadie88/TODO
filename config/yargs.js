const descripcion = {
        demand: true, //obligatorio
        alias: 'd'
}

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs').command('crear', 'Crear un elemento por hacer', 
    {
        descripcion: {
            demand: true, //obligatorio
            alias: 'd'
        },
})
.command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion,
    completado
})
.command('borrar', 'Eliminar de la lista', {
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}