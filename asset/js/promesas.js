import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

//defini la funcion
export const registrarPersona = async (guerrero) => {
    //mensaje para mostrar el objeto guerrero en consola
    console.log("guerrero");
    console.log(guerrero);
    //agrega un nuevo documetno coleccion "guerrero" en mi BD
    const docRef = await addDoc(collection(db, "guerrero"), guerrero);
    //aki retorna la referencia del documento recien creado
    return docRef
}
//defini la funcion
export const obtenerPersonas = async()=>{
    //crea la referencias a la coleccion guerrero en la BD
    const ref=collection(db,"guerrero");
    //una instancia de la collecion guerrero
    const querySnap=await getDocs(ref);
    console.log(querySnap);
    //se crea una lista para almacenar los doc
    let listado = []
    //itera cada documento en la instancia
    querySnap.forEach(doc => {
    //agrega a la lista cada documento con su ID como propiedad
        listado.push({...doc.data(),id:doc.id});
    });
    //retornara el listado de guerrero
    return listado;
}
//funcion para actualizar
export const actualizarPersona = async(objeto,id)=>{
    //crea una ref al documento del guerero q desea actualizar
    const ref=doc(db,"guerrero",id);
    //actualizar el documento con los datos del objeto
    await updateDoc(ref,objeto);
}
//funcion eliminar
export const eliminarPersona = async(id)=>{
    //crea una referencia al documento del guerrero q desea eliminar
    const ref = doc (db,"guerrero",id);
    //elimina el documento de la BD
    await deleteDoc(ref)
}