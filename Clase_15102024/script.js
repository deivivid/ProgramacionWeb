//definicion de una funcion
/*    
function hello(){
    console.log('Hola Clase');
    console.log(' 5IV7');
}

//llamada a la funcion
 hello();
 hello();
 hello();
 hello();
 hello();


function hello(){
    return('Hola Clase');
}

const result = hello();
console.log(result);


//funcion que retorna otra funcion
function hello(){
    return function(){
        return 'Hola soy la funcion dos :)))))'
    };
}



function add(x){
    console.log(x);
}

add(5);


function add(x,y){
    if(y===undefined){
        y=0;
    }
    console.log(x+y);
}

    add(5,undefined);




function add(x,y){
    if(y===undefined){
        y=0;
    }
    console.log(x+y);
}

add(5,undefined);

 //parametro tipo cadena

 function add(name){

    console.log('Hola'+name)
 }

 add(" Clase JS");
*/

//OBJETOS

const objeto = {
    nombre:'Alvaro',
    appat:'Reyes',
    apmat:'Quiroz',
    edad:'17',
    direccion : {
        calle:'123 :)',
        no:'2',
        colonia:'alguna',
        delegacion:'alguna'
    },
    amigos:['Raul','Maria'],
    activo:true


}

function add(objeto){
    console.log(objeto.nombre+" "+objeto.appat+" "+objeto.apmat)
    alert("activo");
    console.log(objeto.edad)
    alert(objeto.direccion.calle+" "+objeto.direccion.no+" "+objeto.direccion.colonia+" "+objeto.direccion.delegacion)
    console.log(objeto.amigos[0]+" "+objeto.amigos[1])
 }

add(objeto)



