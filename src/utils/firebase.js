import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIUQy46qVHkhD6eV8FgMxLKIhwYgbW5Ns",
  authDomain: "cachitosbakery-52d03.firebaseapp.com",
  projectId: "cachitosbakery-52d03",
  storageBucket: "cachitosbakery-52d03.appspot.com",
  messagingSenderId: "541850060285",
  appId: "1:541850060285:web:d36a108fe2b5cae9494594"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// console.log(process.env.REACT_APP_SALUDO)

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

console.log(obtenerProductos);