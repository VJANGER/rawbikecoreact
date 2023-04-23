import { useState, createContext, useContext,  } from "react";

const carritoContext = createContext ()

export const useCarritoContext = () => useContext(carritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState ([])

        const isInCart = (id) =>{
            return carrito.some(prod => prod.id === id)
        }
        const addItem = (item,quantity) =>{
            if(isInCart(item.id)){
                const indice = carrito.findIndex(prod => prod.id === item.id)
                const aux = [...carrito]
                aux[indice].quantity = quantity
                setCarrito(aux)
            }else{
                const newItem = {
                    ...item,
                    quantity: quantity
                }
                setCarrito([...carrito, newItem])
            }
        }
        const removeItem = (id) =>{
            setCarrito(carrito.filter(prod => prod.id !== id))
        }
        const emptyCart = () =>{
            setCarrito([])
        }
        const getItemQuantity = () => {
            return carrito.reduce((acum,prod) => acum += prod.cant, 0)
        }
        const totalPrice = () => {
            return carrito.reduce((acum,prod) => acum += (prod.quantity * prod.precio), 1)
        }
        return(
            <CarritoProvider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
                {props.children}
            </CarritoProvider>
        )
}