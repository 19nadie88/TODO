const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    console.log(listadoPorHacer)    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('BBDD/data.json', data, function(err) {
        if(err) return console.error(err);
      });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../BBDD/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false,
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
} 

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion;
    });

    if ( index >= 0 ) {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let newListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion;
    });
console.log(newListado);
    if ( newListado.length === listadoPorHacer.length ) {
        return false;
    } else {
        listadoPorHacer = newListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}