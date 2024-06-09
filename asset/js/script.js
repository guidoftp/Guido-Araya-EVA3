import {actualizarPersona, obtenerPersonas, registrarPersona, eliminarPersona} from "./promesas.js";

window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    cargarDatos();
});
//AKI SELECCIONE EL ELEMENTO DEL HTML 
document.getElementById("btncambiarContraste").addEventListener("click", () => {
    document.body.classList.toggle("contrasteNegro");
});
//Obtuve los elementos mediantes sus ID
const registrar = () => {
    let eNombre = document.getElementById("nombre");
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eRut = document.getElementById("rut")
    let ePersonaje = document.getElementById("personaje")
    let eHabilidad = document.getElementById("habilidad")

    //Obtuve los valores en los campos especificos como el checkbos 
    let eOpening;
    if (document.getElementById("opening1").checked){
        eOpening="CHA-LA HEAD-CHA-LA";
    } else if(document.getElementById("opening2").checked){
        eOpening="WE GOTTA POWER";
    } else if(document.getElementById("opening3").checked){
        eOpening="El Podre Nuestro Es";
    }

    let eRaza;
    if (document.getElementById("raza1").checked){
        eRaza="Saiyajins";
    } else if (document.getElementById("raza2").checked){
        eRaza="Androides";
    } else if (document.getElementById("raza3").checked){
        eRaza="Humanos";
    }

    let eSaga= document.getElementById("saga");
    
    //aki obtuve los valores de los campos
    let vNombre = eNombre.value;
    let vEdad = eEdad.value;
    let vEmail = eEmail.value;
    let vRut = eRut.value;
    let vPersonaje = ePersonaje.value;
    let vHabilidad = eHabilidad.value;
    let vOpening = eOpening;
    let vRaza = eRaza;
    let vSaga = eSaga.value;
    
    //aqui se crearon los objetos con los datos del formulario
    let objeto = {
        nombre: vNombre,
        edad: vEdad,
        email: vEmail,
        rut: vRut,
        personaje: vPersonaje,
        habilidad: vHabilidad,
        opening: vOpening,
        raza: vRaza,
        saga: vSaga,
        
    };

    //llamo a la funcion con el objeto q contiene los datos
    registrarPersona(objeto).then(() => {
        //si todo sale bien pasa esto
        alert("Registrado con exito");
        cargarDatos();
        //si sale algo mal pasara esto
    }).catch((r) => {
        alert("Algo ocurrio");
        alert(r);
        console.log(r)
    });
}

const cargarDatos = () => {
    //llame la funcion para obtenre los datos de LOS registrados
    obtenerPersonas().then((guerrero)=>{
        let estructura = ""; //llame una variable estructura
        guerrero.forEach((guerrero)=>{
            estructura += "<tr>";
            estructura += "<td>" + guerrero.nombre + "</td>";
            estructura += "<td>" + guerrero.edad + "</td>";
            estructura += "<td>" + guerrero.email + "</td>";
            estructura += "<td>" + guerrero.rut + "</td>";
            estructura += "<td>" + guerrero.personaje + "</td>";
            estructura += "<td>" + guerrero.habilidad + "</td>";
            estructura += "<td>" + guerrero.opening + "</td>";
            estructura += "<td>" + guerrero.raza + "</td>";
            estructura += "<td>" + guerrero.saga + "</td>";
            estructura += "<td> <button id= '" + guerrero.id + "'>Actualizar </td> </button>";
            estructura += "<td> <button id= 'DEL" + guerrero.id + "'>Eliminar </td> </button>";
            estructura += "</tr>"
        });
        //y finalmente se asigno a una estructura HTML
        document.getElementById("tbDatos").innerHTML = estructura;

        //agrege un evento para el boron actualiza
        guerrero.forEach((guerrero)=>{
            let boton = document.getElementById(""+guerrero.id); //se selecciona al boton actualzair por su id
            boton.addEventListener("click",()=>{
                let eNombre = document.getElementById("nombre");
                let eEdad = document.getElementById("edad");
                let eEmail = document.getElementById("email");
                let eRut = document.getElementById("rut");
                let ePersonaje = document.getElementById("personaje");
                let eHabilidad = document.getElementById("habilidad");
                let eOpening = document.getElementById("opening");
                let eRaza = document.getElementById("raza");
                let eSaga = document.getElementById("saga");
                
                //Asigne los valores del guerrero seleccionado 
                eNombre.value = guerrero.nombre;
                eEdad.value = guerrero.edad;
                eEmail.value = guerrero.eEmail;
                eRut.value = guerrero.rut;
                ePersonaje = guerrero.personaje;
                eHabilidad = guerrero.habilidad;
                eOpening = guerrero.opening;
                eRaza = guerrero.raza;
                eSaga = guerrero.saga;

                //use el identificador para poder actualizar los datos 
                document.getElementById("btnActualizar").value = guerrero.id;
            });
            //obtengo el boton eliminar
            let botonDEL = document.getElementById("DEL"+guerrero.id);
            //agrege un evento de click para eliminar
            botonDEL.addEventListener("click",()=>{
                //mostrara un mensaje de confirmacion
            if(confirm("Seguro que desea eliminar a: \nNombre como guerrero Z?" + guerrero.nombre+ " "+guerrero.rut)){
            //si se confirma saldra un mensaje
                eliminarPersona(guerrero.id).then(()=>{
                    //se mostrara un mensaje exitosi y se recargara los datos de actualizar de la tabla
                    alert("Se ha eliminado a \nNombre de los Guerreros Z");
                    cargarDatos();
                });
            }
            });
        });

    });
}

const actualizar = () => {
    //obtuve los elementos de campos del form
    let eNombre = document.getElementById("nombre");
    let eEdad = document.getElementById("edad");
    let eEmail = document.getElementById("email")
    let eRut = document.getElementById("rut");
    let ePersonaje = document.getElementById("personaje");
    let eHabilidad = document.getElementById("habilidad");
    let eOpening;
    //obtive el valor del campos de opening seleccionado
    if (document.getElementById("opening1").checked){
        eOpening="CHA-LA HEAD-CHA-LA";
    } else if(document.getElementById("opening2").checked){
        eOpening="WE GOTTA POWER";
    } else if(document.getElementById("opening3").checked){
        eOpening="El Podre Nuestro Es";
    }

    let eRaza;
    //lo mismo que el opening
    if (document.getElementById("raza1").checked){
        eRaza="Saiyajins";
    } else if (document.getElementById("raza2").checked){
        eRaza="Androides";
    } else if (document.getElementById("raza3").checked){
        eRaza="Humanos";
    }
    let eSaga = document.getElementById("saga");

    //obtive los valores de los campos del form
    let vNombre = eNombre.value;
    let vEdad = eEdad.value;
    let vEmail = eEmail.value;
    let vRut = eRut.value;
    let vPersonaje = ePersonaje.value;
    let vHabilidad = eHabilidad.value;
    let vOpening = eOpening;
    let vRaza = eRaza;
    let vSaga = eSaga.value;

    //cree un objeto con los valores del form
    let objeto = {
        nombre: vNombre,
        edad: vEdad,
        email: vEmail,
        rut: vRut,
        personaje: vPersonaje,
        habilidad: vHabilidad,
        opening: vOpening,
        raza: vRaza,
        saga: vSaga,
    };
    //obtuve el id del guerrero a actualizar
    let id = document.getElementById("btnActualizar").value;
    //llame a la funcion para actualizar el guerrero en la BD
    actualizarPersona(objeto, id).then(()=> {
        alert("Se a actualizado correctamente a \nNombre");
        cargarDatos();
    });
}