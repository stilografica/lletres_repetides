//NIVELL 1

//Exercici 1

"use strict";
let nameString = "MIRIAM";
//Convierto la anterior variable en un array
let name = Array.from (nameString);
//Función que se llama a si misma
(function makeNombre(){
    //Variable auxiliar para almacenar cada elemento del array al recorrerlo.
    let recorridoArray="";
    document.getElementById("nombre").addEventListener ("click", function() {
        for (let i = 0; i < name.length; i++) {
            recorridoArray +=name[i];
        }
        document.getElementById("nombreText").innerHTML=recorridoArray;
        //Deshabilito el botón tras pulsarlo para que el usuario no pueda seguir interaccionando
        this.disabled=true;
    });

})();


//Exercici 2

let vocal = /[aeiouáéíóú]/i;
let number = /\d/;

(function showLetters(){
    //Cambio la primera "i" por un "1" para que me ocurra la opción de "Els noms de persones no contenen el número:"
    name[1]= "1";
    document.getElementById("tipoLetra").addEventListener ("click", function() {
        let recorridoLetra="";
        for (let i = 0; i < name.length; i++) {
        recorridoLetra += (!(vocal.test(name[i])) && !(number.test(name[i]))) ? `con:${name[i]} ` :
        (vocal.test(name[i])) ? `voc:${name[i]} ` :
        `núm:${name[i]} `;
        }
        document.getElementById("letraText").innerHTML=recorridoLetra;
        this.disabled=true;
    });
    
})();

//Exercici 3

let mapa = new Object();

(function showType(){
    document.getElementById("numLetra").addEventListener("click", function(){
        //Cambio el "1" en la posición 1 del array por la "I"
        name[1]= "I";
        for (let i = 0; i < name.length; i++) {
        //Indico que la key del mapa es la letra que estamos recorriendo y le asignamos el valor que ya tenía (si ya había aparecido)+1 o si es cero (no ha aparecido todavía) le sumamos 1 también
        mapa[name[i]] = (mapa[name[i]] || 0) + 1;
        
        }
        console.log(mapa);
        //Para mostrarlo en pantalla (no en console) y que no nos enseñe: [object]
        let respuesta="";
        for (let key in mapa) {
            respuesta +=`${key}:${mapa[key]}, `;
            }
        document.getElementById("letraNum").innerHTML=respuesta;
        this.disabled=true;
    });
})();

//Exercici 4

(function showFullName(){
    document.getElementById("fullName").addEventListener("click", function(){
        let surname = ["H","I","N","O","J","O"];
        //Añado un espacio en la última posición del array name
        name.push(" ");
        //Concateno los dos arrays en una nueva variable llamada fullName
        let fullName = name.concat(surname);
        document.getElementById("fullText").innerHTML=fullName;
        this.disabled=true;
    });
})();

//NIVELL 2

let str = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"; 

(function correoElectronico(){
    let expresionEmail =/(\w+(\.|_|-){0,1})+@{1}(\w+(\.|_|-){0,1})+\.[a-zA-z]+/gi;
    document.getElementById("exp").addEventListener("click", function(){
        //Con match guardo en un array aquellos elementos del texto que cumplen con la expresión regular
        let correos = str.match(expresionEmail);
        //El set no permite valores duplicados por lo que en correos elemino todos los items que se repiten
        correos= Array.from(new Set(correos));
        document.getElementById("expText").innerHTML=correos;
        this.disabled=true;
    });
})();