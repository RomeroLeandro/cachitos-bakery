import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIUQy46qVHkhD6eV8FgMxLKIhwYgbW5Ns",
  authDomain: "cachitosbakery-52d03.firebaseapp.com",
  projectId: "cachitosbakery-52d03",
  storageBucket: "cachitosbakery-52d03.appspot.com",
  messagingSenderId: "541850060285",
  appId: "1:541850060285:web:d36a108fe2b5cae9494594"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const obtenerProductos = async () => {
  try {
    const productosRef = collection(firestore, "productos");
    const querySnapshot = await getDocs(productosRef);

    const productos = [];
    querySnapshot.forEach((doc) => {
      const producto = doc.data();
      productos.push(producto);
    });

    return productos;
  } catch (error) {
    console.log('Error al obtener los productos:', error);
    return [];
  }
};

export const obtenerComentarios = async () => {
  try {
    const comentariosRef = collection(firestore, 'comentarios');
    const querySnapshot = await getDocs(comentariosRef);

    const comentarios = [];
    querySnapshot.forEach((doc) => {
      const comentario = { id: doc.id, ...doc.data() };
      comentarios.push(comentario);
    });

    return comentarios;
  } catch (error) {
    console.log('Error al obtener los comentarios:', error);
    return [];
  }
};

export const agregarComentario = async (comentario) => {
  try {
    const comentariosRef = collection(firestore, 'comentarios');
    const docRef = await addDoc(comentariosRef, comentario);
    return docRef;
  } catch (error) {
    throw new Error('Error al agregar el comentario:', error);
  }
};
