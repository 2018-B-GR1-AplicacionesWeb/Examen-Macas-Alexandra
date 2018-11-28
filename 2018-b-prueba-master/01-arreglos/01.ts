declare var require: any;
const rxjs = require('rxjs');
const fs= require('fs');
const map = require('rxjs/operators').map;
const reduce = require('rxjs/operators').reduce;
var inquirer = require('inquirer');

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
leer()


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

//crear el arreglo del abecedarios
//recorer el arreglo con map
//si es igual a true devolver que si exite
//caso contrario error
    const arregloRespuesta =[
        {
            a:true
        },
        {
            b:true
        },
        {
            c:true
        },
        {
            d:true
        },
        {
            e:true
        },
        {
            f:true
        },
        {
            g:true
        },
        {
            h:true
        },
        {
            i:true
        },
        {
            j:false
        },
        {
            k:true
        },
        {
            l:true
        },
        {
            m:true
        },
        {
            n:true
        },
        {
            o:true
        },
        {
            p:true
        },
        {
            q:true
        },
        {
            r:true
        },
        {
            s:true
        },
        {
            t:true
        },
        {
            u:true
        },
        {
            v:true
        },
        {
            w:true
        },
        {
            x:true
        },
        {
            y:true
        },
        {
            z:false
        },


    ];
function respuestaabecedario(String) {
    const indicenombre  = arregloRespuesta.map(String);
    if(indicenombre===true){
        console.log('Si hay ese nombre')
    }
    else
        console.error('no hay')

}

respuestaabecedario('ale');
/////
//7) Calcular la sumatoria de la propiedad "mass" y la propiedad "height".
//leer el people.json
//buscar el mass y el height
//funciont para sumar
 leer();

function buscardato(String1:string, String2:string) {
    return new Promise((resolve, reject) => { leer();

        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'mass' && respuesta === 'height')
                    resolve(respuesta);
                const r1 === 'mass'
                const r2 ==='height'
                map((respuesta) => {
                    console.log(r1+r2)
                )

            }
        });
    });
}
const respuesta = {
    massTotal:number,
    heightTotal: number
}
buscardato('mass','height');
    ///
// 11) Realizar la operacion de crear nuevos `people` con la libreria `inquirer.js`
///    "name": "Beru Whitesun lars",
//     "height": "165",
//     "mass": "75",
//     "hair_color": "brown",
//     "skin_color": "light",
//     "eye_color": "blue",
//     "birth_year": "47BBY",
//     "gender": "female",
//     "homeworld": "https://swapi.co/api/planets/1/",
//     "films": [
//       "https://swapi.co/api/films/5/",
//       "https://swapi.co/api/films/6/",
//       "https://swapi.co/api/films/1/"
let preguntarellenar= [
    {
        type: 'input',
        name: "name",
        message: "Ingrese el nombre"
    },
    {
        type: 'input',
        name: "height",
        message: "height"
    },
    {
        type: 'input',
        name: "mass",
        message: "mass"
    },
    {
        type: 'input',
        name: "mass",
        message: "mass"
    },
    {
        type: 'input',
        name: "hair_color",
        message: "hair_color"
    },
    {
        type: 'input',
        name: "skin_color",
        message: "skin_color"
    },
    {
        type: 'input',
        name: "birth_year",
        message: "birth_year"
    },
    {
        type: 'input',
        name: "eye_color",
        message: "eye_color"
    },
    {
        type: 'input',
        name: "gender",
        message: "gender"
    },
    {
        type: 'input',
        name: "homeworld",
        message: "homeworld"
    },
    {
        type: 'input',
        name: "films",
        message: "films"
    },
];
function main(){
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error '});
                    } else {
                        const bdd = JSON.parse(contenido);





                        fs.writeFile(
                            'people.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'people creado'});
                                }
                            }
                        );
                    }
                });



                inquirer
                    .prompt(preguntarellenar)
                    .then((respuestas) => {

                        people.push(respuestas.name);
                        people.push(respuestas.mass);
                        people.push(respuestas.height);
                        people.push(respuestas.birth_year);


        }
    }
),
}
main();
//////////////
//10) Calcular en cuantos films han aparecido cada personaje:
//leero el jason
//buscar los vehicles
//si es verdadero suma conirtiendo ese string en int
 leer()

function buscardato(String1:string) { const suma:number;
    return new Promise((resolve, reject) => { leer();
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                if (respuesta === 'films')
                   suma+ = respuesta.parseInt;
                        resolve(suma);
                map((respuesta) => {
                    console.log(respuesta)
                )

            }
        });
    });
}

buscardato('films');
    ////
//## 8)  Revisar si todos los personajes han usado vehicles.
leer();
function verificar(){

}
