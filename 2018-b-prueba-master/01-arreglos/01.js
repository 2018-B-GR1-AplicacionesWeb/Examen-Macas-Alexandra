// 1) Busque los tipos de "gender" en el arreglo `people.json`
//leer primero si existe el json
//buscar el dato con un string
//deolver el dato usando map

function leer() {
    return new Promise((resolve) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'vacia',

                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function buscardato(String) {
    return new Promise((resolve, reject) => { leer();
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'gender')
                    resolve(respuesta);
                    map((respuesta) => {
                        console.log(respuesta)
                )

            }
        });
    });
}

buscardato('gender');


// 2) Busque los tipos de "eye_color" en el arreglo `people.json`
function leer() {
    return new Promise((resolve) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'vacia',

                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function buscardato(String) {
    return new Promise((resolve, reject) => { leer();
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'eye_color')
                    resolve(respuesta);
                map((respuesta) => {
                    console.log(respuesta)
                )

            }
        });
    });
}

buscardato('eye_color');
// 3) Busque los tipos de "skin_color" en el arreglo `people.json`
function leer() {
    return new Promise((resolve) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'vacia',

                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function buscardato(String) {
    return new Promise((resolve, reject) => { leer();
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'skin_color')
                    resolve(respuesta);
                map((respuesta) => {
                    console.log(respuesta)
                )

            }
        });
    });
}

buscardato('skin_color');
// 4) Busque los tipos de "hair_color" en el arreglo `people.json`
function leer() {
    return new Promise((resolve) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'vacia',

                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function buscardato(String) {
    return new Promise((resolve, reject) => { leer();
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'hair_color')
                    resolve(respuesta);
                map((respuesta) => {
                    console.log(respuesta)
                )

            }
        });
    });
}

buscardato('hair_color');

    ///////////////////////////
//5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
  //  EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`
//leer el people.json
//buscar los diferentes arreglos
//añadir male o females en cada uno usando push



// 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.

function arregloabecedario() {

}