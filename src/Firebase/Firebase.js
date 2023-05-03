import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-VHR28wu04wSjkT6SyWhCb_NJ_BG8Tec",
  authDomain: "rawbikeco-80622.firebaseapp.com",
  projectId: "rawbikeco-80622",
  storageBucket: "rawbikeco-80622.appspot.com",
  messagingSenderId: "345320320196",
  appId: "1:345320320196:web:d241a78d760a60d3cb2d91"
};


const db = getFirestore()

const app = initializeApp(firebaseConfig);

export const createProducts = async () =>{
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) =>{
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      precio: prod.precio,
      categoria: prod.categoria,
      img: prod.img,
      color: prod.color,
      talle: prod.talle,
      talleEspecial: prod.talleEspecial,
      descripcion: prod.descripcion,
      stock: prod.stock
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
export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      cliente: cliente,
      items: carrito,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  return item
}

export const deleteOrdenCompra = async (id) => {
  await deleteDoc(doc(db, "ordenCompra", id))
}