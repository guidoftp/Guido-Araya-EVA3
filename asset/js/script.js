import {registrarGuerrero } from "./promesas.js"
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
});

const registrar = () =>{
    let eNombre = document.getElementById("nombre");
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eRut = document.getElementById("rut")
    let ePersonaje = document.getElementById("personaje")
    let eHabilidad = document.getElementById("habilidad")

    let eOpening;
    if (document.getElementById("opening1").checked){
        eOpening="CHA-LA HEAD-CHA-LA";
    } else if(document.getElementById("opening2").checked){
        eOpening="WE GOTTA POWER";
    } else if(document.getElementById("opening3").checked){
        eOpening="EL PODER NUESTRO ES";
    }

    let eRaza;
    if (document.getElementById("raza1").checked){
        eRaza="Saijayins";
    } else if (document.getElementById("raza2").checked){
        eRaza="Androides";
    } else if (document.getElementById("raza3").checked){
        eRaza="Humanos";
    }

    let eSaga = document.getElementById("saga");

    let vNombre = eNombre.value;
    let vEdad = eEdad.value;
    let vEmail = eEmail.value;
    let vRut = eRut.value;
    let vPersonaje = ePersonaje.value;
    let vHabilidad = eHabilidad.value;
    let vOpening = eOpening;
    let vRaza = eRaza;
    let vSaga = eSaga.value;

    //recuperar el objeto
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

    registrarGuerrero(objeto).then(()=>{
        alert ("Se registro el Guerrero Z");
        cargarDatos();
    }).catch((r)=>{
        alert ("Ups, tuviste un problema");
        alert (r);
        console.log(r)
    });
}

//cargar datos
