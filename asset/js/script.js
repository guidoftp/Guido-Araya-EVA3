window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
})

const registrar = () =>{
    let eNombre = document.getElementById("nombre")

    let vNombre = eNombre.value;

    //recuperar el objeto
    let objeto{
        nombre: vNombre;
    }
}
