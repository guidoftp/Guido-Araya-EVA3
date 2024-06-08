import {eliminarGuerrero, obtenerPersona, registrarGuerrero, actualizarGuerrero } from "./promesas.js"
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
    cargarDatos();
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

const cargarDatos = () => {
    obtenerPersona().then((guerrero)=>{
        let estrucura = "";
        guerrero.forEach((guerrero)=>{
            estrucura += "<tr>";
            estrucura += "<td>" + guerrero.nombre + "</td>";
            estrucura += "<td>" + guerrero.edad + "</td>";
            estrucura += "<td>" + guerrero.email + "</td>";
            estrucura += "<td>" + guerrero.rut + "</td>";
            estrucura += "<td>" + guerrero.personaje + "</td>";
            estrucura += "<td>" + guerrero.habilidad + "</td>";
            estrucura += "<td>" + guerrero.opening + "</td>";
            estrucura += "<td>" + guerrero.raza + "</td>";
            estrucura += "<td>" + guerrero.saga + "</td>";
            estrucura += "<td> <button id='UPD" + guerrero.id + "'>Actualizar </td> </button>"; //ME COMI UNA COMILLA AAAD:
            estrucura += "<td> <button id='DEL" + guerrero.id + "'>Eliminar </td> </button>";
            estrucura += "</tr>"
        });
        document.getElementById("tbDatos").innerHTML = estrucura;
        guerrero.forEach((guerrero) => {
            let boton = document.getElementById("UPD"+guerrero.id);
            boton.addEventListener("click",()=>{
                let eNombre = document.getElementById("UPDnombre");
                let eEdad = document.getElementById("UPDedad");
                let eEmail = document.getElementById("UPDemail");
                let eRut = document.getElementById("UPDrut");
                let ePersonaje = document.getElementById("UPDpersonaje");
                let eHabilidad = document.getElementById("UPDhabilidad");
                let eOpening = document.getElementById("UPDopening");
                let eRaza = document.getElementById("UPDraza");
                let eSaga = document.getElementById("UPDsaga");

                eNombre.value=guerrero.nombre;
                eEdad.value=guerrero.edad;
                eEmail.value=guerrero.email;
                eRut.value=guerrero.rut;
                ePersonaje =guerrero.personaje;
                eHabilidad = guerrero.habilidad;
                eOpening =guerrero.opening;
                eRaza =guerrero.raza;
                eSaga =guerrero.saga;
                document.getElementById("btnActualizar").value=guerrero.id;
            });
            let botonDEL = document.getElementById("DEL"+guerrero.id);
            botonDEL.addEventListener("click",()=>{
                if(confirm("Quieres eliminar a este Guerrero Z?"+ guerrero.nombre + ""+guerrero.rut)){
                    eliminarGuerrero(guerrero.id).then(()=>{
                        alert ("Se ha eliminado correctamente");
                        cargarDatos();
                    });
                }
            });
            
        });
    });
}

const actualizar =()=>{
    let eNombre = document.getElementById("UPDnombre");
    let eEdad = document.getElementById("UPDedad");
    let eEmail = document.getElementById("UPDemail");
    let eRut = document.getElementById("UPDrut");
    let ePersonaje = document.getElementById("UPDpersonaje");
    let eHabilidad = document.getElementById("UPDhabilidad");

    let eOpening;
    if (document.getElementById("UPDopening1").checked){
        eOpening="CHA-LA HEAD-CHA-LA";
    } else if(document.getElementById("UPDopening2").checked){
        eOpening = "WE GOTTA POWER"
    } else if(document.getElementById("UPDopening3").checked){
        eOpening="EL PODER NUESTRO ES";
    }

    let eRaza;
    if (document.getElementById("UPDraza1").checked){
        eRaza="Saijayins";
    } else if (document.getElementById("UPDraza2").checked){
        eRaza="Androides";
    } else if (document.getElementById("UPDraza3").checked){
        eRaza="Humanos";
    }

    let eSaga=document.getElementById("UPDsaga");

    let vNombre = eNombre.value;
    let vEdad = eEdad.value;
    let vEmail = eEmail.value;
    let vRut = eRut.value;
    let vPersonaje = ePersonaje.value;
    let vHabilidad = eHabilidad.value;
    let vOpening = eOpening;
    let vRaza = eRaza;
    let vSaga = eSaga.value;

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
    
    let id = document.getElementById("btnActualizar").value;
    actualizarGuerrero(objeto,id).then(()=>{
        alert ("Se ha actualizado correctamente al Guerrero Z");
        cargarDatos();
    });
}
