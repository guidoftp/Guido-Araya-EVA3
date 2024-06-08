import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; //corregi lo de firestore y el link
import { db } from "./firebase.js";

export const registrarGuerrero = async (guerrero) => {
    console.log("guerrero");
    console.log(guerrero);
    const docRef = await addDoc(collection(db, "guerrero"), guerrero);
    return docRef
}
export const obtenerPersona = async() =>{
    const ref=collection(db,"guerrero");
    const querySnap = await getDocs(ref);
    console.log(querySnap);
    let listado = []
    querySnap.forEach(doc => {
        listado.push({...doc.data(),id:doc.id});
    });
    return listado;
    
}

