import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-VHR28wu04wSjkT6SyWhCb_NJ_BG8Tec",
  authDomain: "rawbikeco-80622.firebaseapp.com",
  projectId: "rawbikeco-80622",
  storageBucket: "rawbikeco-80622.appspot.com",
  messagingSenderId: "345320320196",
  appId: "1:345320320196:web:d241a78d760a60d3cb2d91",
  measurementId: "G-08XVHVX8Q6"
};
const db = getFirestore()

const app = initializeApp(firebaseConfig);

const createProducts = async () =>{
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) =>{
    await addDoc(collection(db, "productos"), {
      nombre: productos.nombre,
      precio: productos.precio,
      categoria: productos.categoria,
      img: productos.img,
      color: productos.color,
      talle: productos.talle,
      talleEspecial: productos.talleEspecial,
      descripcion: productos.descripcion,
      stock: productos.stock
    })
  })
}
export const getProducts = async () => {
  const prods = await getDocs(collection(db, "productos"))
  const items = prods.docs.map(prod => {
      return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(db, "productos", id))
  const item = { ...prod.data(), id: prod.id }
  return item
}